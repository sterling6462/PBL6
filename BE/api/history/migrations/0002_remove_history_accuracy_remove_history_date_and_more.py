# Generated by Django 4.1.4 on 2022-12-10 08:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("mushroom", "0001_initial"),
        ("history", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="history",
            name="accuracy",
        ),
        migrations.RemoveField(
            model_name="history",
            name="date",
        ),
        migrations.RemoveField(
            model_name="history",
            name="image",
        ),
        migrations.RemoveField(
            model_name="history",
            name="mushroom",
        ),
        migrations.CreateModel(
            name="HistoryItem",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("image", models.TextField()),
                ("accuracy", models.FloatField()),
                ("date", models.DateField(auto_now_add=True)),
                (
                    "mushroom",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="mushroom.mushroom",
                    ),
                ),
            ],
        ),
    ]
