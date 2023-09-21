# Generated by Django 4.2.5 on 2023-09-20 17:20

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("playlists", "0003_music_singer"),
    ]

    operations = [
        migrations.AddField(
            model_name="playlist",
            name="musics",
            field=models.ManyToManyField(
                related_name="playlists", to="playlists.music"
            ),
        ),
    ]