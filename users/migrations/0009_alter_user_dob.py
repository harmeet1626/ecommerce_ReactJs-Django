# Generated by Django 4.2.5 on 2023-10-31 13:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_alter_user_dob_alter_user_gender_alter_user_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='dob',
            field=models.DateField(default='2000-12-25'),
        ),
    ]
