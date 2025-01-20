#!/bin/bash

# Resetting Chrome Profile Directory
echo "Resetting Chrome Profile Directory"
rm -R chrome_profiles
mkdir chrome_profiles
cp -R chrome_profiles_backup/* chrome_profiles/
chmod -R +rwx chrome_profiles/

# Start Xvfb
echo "Starting Xvfb..."
mkdir -p /tmp/logs/
touch /tmp/logs/xfvfb.log
Xvfb :0 -screen 0 1296x736x16 -ac > /tmp/logs/xfvfb.log 2>&1 &

# Start x11vnc
echo "Starting x11vnc..."
mkdir -p /tmp/logs/
touch /tmp/logs/x11vnc.log
x11vnc -forever -create -display :0 -rfbport 5900 -nopw > /tmp/logs/x11vnc.log 2>&1 &

# Add my_solution (i.e. the docker-gateway, so that we can reach 
# the host (which has exposed ports to my_solution own docker network))
# entry to /etc/hosts
echo "172.19.0.1 my_solution" >> /etc/hosts

# Run the Python script (-u option to unbuffer the output)
echo "Running Python script..."
python -u src/scenario.py test2.json