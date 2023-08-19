from django.db.models.signals import pre_save
from django.dispatch import receiver
from resume.models import User

@receiver(pre_save, sender=User)
def set_username_from_email(sender, instance, **kwargs):
    if not instance.username:
        instance.username = instance.email