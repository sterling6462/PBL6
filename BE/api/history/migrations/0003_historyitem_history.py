# Generated by Django 4.1.4 on 2022-12-10 08:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("history", "0002_remove_history_accuracy_remove_history_date_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="historyitem",
            name="history",
            field=models.ForeignKey(
                default=None,
                on_delete=django.db.models.deletion.CASCADE,
                to="history.history",
            ),
        ),
    ]
