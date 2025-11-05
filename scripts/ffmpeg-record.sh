#!/usr/bin/env bash
ffmpeg -i http://localhost:8000/stream -acodec copy recordings/$(date +%F-%T).mp3