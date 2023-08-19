from resume import models, serializers
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import get_object_or_404
from resume.permissions import IsOwner
from django.http import JsonResponse
from django.contrib.sessions.models import Session
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        username = body.get('username')
        password = body.get('password')
        
        # Authenticate the user
        user = authenticate(request, username=username, password=password)
        if user is not None:
            try:
                profile = serializers.UserProfileSerializer(models.UserProfile.objects.get(user=user)).data
            except models.UserProfile.DoesNotExist:
                profile = None
            login(request, user)
            return JsonResponse({'status': 'success', 'session_id': request.session.session_key, 'profile': profile}, status=status.HTTP_200_OK)
    
    return JsonResponse({'status': 'failed', 'session_id': None})

@csrf_exempt
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({'status': 'successfoo'})
    return JsonResponse({'status': 'wrong method'})

@csrf_exempt
def restore_session(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        session_id = body.get('session_id')

        try:
            session = Session.objects.get(session_key=session_id)
            user_id = session.get_decoded().get('_auth_user_id')

            user = models.User.objects.get(pk=user_id)
            
            login(request, user)
            return JsonResponse({'status': 'success'})
        
        except Session.DoesNotExist:
            pass
    return JsonResponse({'status': 'failed'})

@csrf_exempt
def sign_up(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        print(body)
        serializer = serializers.UserSerializer(data={'username': body.get('username'), 'email': body.get('username'), 'password': body.get('password')})
        if serializer.is_valid():
            print(serializer.validated_data)
            serializer.save()
            username = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request, username=username, password=password)
            login(request, user)
            return JsonResponse({'status': 'success', 'session_id': request.session.session_key}, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserProfiles(APIView):
    permission_classes = [IsAuthenticated, IsOwner]

    def get(self, request, format=None):
        user = request.user
        profile = get_object_or_404(models.UserProfile, user=user)
        serializer = serializers.UserProfileSerializer(profile)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        profile = request.data['profile']
        profile['user'] = request.user.id
        serializer = serializers.UserProfileSerializer(data=profile)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetResume(APIView):
    permission_classes = [IsAuthenticated, IsOwner]

    def get(self, request, format=None):
        user = request.user
        resume = models.Resume.objects.get_or_create(user=user)
        serializer = serializers.ResumeSerializer(resume[0])
        return JsonResponse(serializer.data, status=status.HTTP_200_OK)