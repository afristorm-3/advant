# Generated by Django 3.2.16 on 2023-02-08 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('ME', 'Medicine'), ('CO', 'Cosmetic'), ('EQ', 'Equipment')], default='ME', max_length=2),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='item',
            name='label',
            field=models.CharField(choices=[('B', 'blue'), ('G', 'green'), ('R', 'red')], default='B', max_length=1),
            preserve_default=False,
        ),
    ]
