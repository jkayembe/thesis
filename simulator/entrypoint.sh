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

# Extract the hexadecimal gateway for the default route (Destination == 00000000)
GATEWAY_HEX=$(awk '$2 == "00000000" { print $3 }' /proc/net/route)

# Convert the reversed hexadecimal gateway to a human-readable IP address
GATEWAY_IP=$(printf "%d.%d.%d.%d\n" \
    $((0x${GATEWAY_HEX:6:2})) \
    $((0x${GATEWAY_HEX:4:2})) \
    $((0x${GATEWAY_HEX:2:2})) \
    $((0x${GATEWAY_HEX:0:2})))

# Output the result for verification
echo "Gateway IP: $GATEWAY_IP"

# Append the gateway IP to /etc/hosts with your custom domain
echo "$GATEWAY_IP my-solution.com" >> /etc/hosts

# Set host as DNS
echo "nameserver $GATEWAY_IP" > /etc/resolv.conf


# Run the Python script (-u option to unbuffer the output)
echo "Running Python script..."
#python -u src/scenario.py scenarios_2025/2025_gmail_session_adblock.json
python -u src/topnews.py noadblock