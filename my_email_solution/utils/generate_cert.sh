#!/bin/sh

# Resolve the script's directory
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
FOLDER="$SCRIPT_DIR/../docker-data"

# Delete old directory
sudo rm -R $FOLDER/ca/ssl
sudo rm -R $FOLDER/dms/config/ssl
sudo rm -R $FOLDER/webmail/config/ssl

# Create the required directory
mkdir -p $FOLDER/ca/ssl
mkdir -p $FOLDER/dms/config/ssl/demoCA
mkdir -p $FOLDER/webmail/config/ssl

# Create the root CA certificate
step certificate create "Smallstep Root CA" \
  "$FOLDER/ca/ssl/cacert.pem" \
  "$FOLDER/ca/ssl/cakey.pem" \
  --no-password --insecure \
  --profile root-ca \
  --not-before "2021-01-01T00:00:00+00:00" \
  --not-after "2031-01-01T00:00:00+00:00" \
  --san "my-solution.com" \
  --san "mail.my-solution.com" \
  --kty RSA --size 2048

# Add read permissions to the CA files
chmod +r "$FOLDER/ca/ssl/cacert.pem" "$FOLDER/ca/ssl/cakey.pem"

# Create the DMS (Docker Mail Server) certificate
step certificate create "Smallstep Leaf" \
  "$FOLDER/dms/config/ssl/mail.my-solution.com-cert.pem" \
  "$FOLDER/dms/config/ssl/mail.my-solution.com-key.pem" \
  --no-password --insecure \
  --profile leaf \
  --ca "$FOLDER/ca/ssl/cacert.pem" \
  --ca-key "$FOLDER/ca/ssl/cakey.pem" \
  --not-before "2021-01-01T00:00:00+00:00" \
  --not-after "2031-01-01T00:00:00+00:00" \
  --san "my-solution.com" \
  --san "mail.my-solution.com" \
  --san "mailserver" \
  --kty RSA --size 2048

cp "$FOLDER/ca/ssl/cacert.pem" "$FOLDER/dms/config/ssl/demoCA/cacert.pem"

# Add read permissions to the DMS files
chmod +r "$FOLDER/dms/config/ssl/mail.my-solution.com-cert.pem" \
          "$FOLDER/dms/config/ssl/mail.my-solution.com-key.pem" \
          "$FOLDER/dms/config/ssl/demoCA/cacert.pem"

# Create the Webmail certificate
step certificate create "Smallstep Leaf" \
  "$FOLDER/webmail/config/ssl/webmail.my-solution.com-cert.pem" \
  "$FOLDER/webmail/config/ssl/webmail.my-solution.com-key.pem" \
  --no-password --insecure \
  --profile leaf \
  --ca "$FOLDER/ca/ssl/cacert.pem" \
  --ca-key "$FOLDER/ca/ssl/cakey.pem" \
  --not-before "2021-01-01T00:00:00+00:00" \
  --not-after "2031-01-01T00:00:00+00:00" \
  --san "my-solution.com" \
  --san "my-solution.com" \
  --san "webmail" \
  --kty RSA --size 2048

# Add read permissions to the Webmail files
chmod +r "$FOLDER/webmail/config/ssl/webmail.my-solution.com-cert.pem" \
          "$FOLDER/webmail/config/ssl/webmail.my-solution.com-key.pem"
