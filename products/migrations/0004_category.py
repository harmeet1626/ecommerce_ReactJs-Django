# Generated by Django 4.2.5 on 2023-11-08 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_alter_productimage_table'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(default=None, max_length=500)),
            ],
            options={
                'db_table': 'category',
            },
        ),
    ]
