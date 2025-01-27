#! /bin/bash

# Script to launch the containers and open the window imediately
xtigervncviewer localhost::5900 &
docker compose up
