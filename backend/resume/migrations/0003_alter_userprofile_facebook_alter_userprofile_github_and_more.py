# Generated by Django 4.1.6 on 2023-08-06 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0002_alter_user_managers'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='facebook',
            field=models.URLField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='github',
            field=models.URLField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='instagram',
            field=models.URLField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='linkedin',
            field=models.URLField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='portfolio',
            field=models.URLField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='twitter',
            field=models.URLField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='website',
            field=models.URLField(blank=True, max_length=255),
        ),
    ]