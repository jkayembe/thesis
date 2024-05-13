FROM python:3.12-slim

RUN apt-get update && apt-get install -y \
    chromium-driver \
    chromium \
    x11vnc \
    xvfb \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt /app

RUN pip install -r requirements.txt

# Expose the VNC port
EXPOSE 5900

# Set environment variables for chromium binary path and chromedriver binary path
ENV CHROMIUM_PATH='/usr/bin/chromium'
ENV CHROMIUM_DRIVER_PATH='/usr/bin/chromedriver'
ENV IS_CONTAINER=true
ENV DISPLAY=:0


# Start Xvfb and x11vnc, then run your Python script
#CMD ["bash", "-c", "Xvfb :0 -screen 0 1296x736x16  & \
#                    x11vnc -forever -create -display :0 -rfbport 5900 -bg -nopw && \
 #                   echo 'Xvfb server ready' && \
  #                  python src/scenario.py"]
