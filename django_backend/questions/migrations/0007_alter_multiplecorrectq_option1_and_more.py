# Generated by Django 5.0.3 on 2024-04-10 00:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0006_alter_multiplecorrectq_correctoptions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='multiplecorrectq',
            name='option1',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='multiplecorrectq',
            name='option2',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='multiplecorrectq',
            name='option3',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='multiplecorrectq',
            name='option4',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='singlecorrectq',
            name='option1',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='singlecorrectq',
            name='option2',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='singlecorrectq',
            name='option3',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='singlecorrectq',
            name='option4',
            field=models.CharField(max_length=100),
        ),
    ]
