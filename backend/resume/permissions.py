from rest_framework import permissions


class IsOwner(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to view or edit it.
    """
    def has_object_permission(self, request, view, obj):
        if hasattr(obj, 'resume'):
            return obj.resume.user == request.user
        elif hasattr(obj, 'user'):
            return obj.user == request.user
        elif hasattr(obj, 'experience'):
            return self.has_object_permission(request, view, obj.experience)
        elif hasattr(obj, 'project'):
            return self.has_object_permission(request, view, obj.project)
        return False