# Generated by Django 5.0.3 on 2024-03-30 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0005_alter_integertypeq_correctoption'),
    ]

    operations = [
        migrations.AlterField(
            model_name='multiplecorrectq',
            name='correctOptions',
            field=models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('1,2', '1,2'), ('1,3', '1,3'), ('1,4', '1,4'), ('2,3', '2,3'), ('2,4', '2,4'), ('3,4', '3,4'), ('1,2,3', '1,2,3'), ('1,2,4', '1,2,4'), ('1,3,4', '1,3,4'), ('2,3,4', '2,3,4'), ('1,2,3,4', '1,2,3,4')], max_length=10),
        ),
    ]