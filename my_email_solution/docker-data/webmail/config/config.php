<?php
    // Set the SSL parameters.
    $config['imap_conn_options'] = [
        'ssl' => [
            'verify_peer'       => true,
            'verify_depth'      => 3,
            //'local_cert'        => '/etc/ssl/roundcube/webmail.example.com-cert.pem',
            //'local_pk'          => '/etc/ssl/roundcube/webmail.example.com-key.pem',
            'cafile'            => '/etc/openssl/certs/cacert.pem',
        ],
    ];

    $config['smtp_conn_options'] = [
        'ssl' => [
            'verify_peer'       => true,
            'verify_depth'      => 3,
            //'local_cert'        => '/etc/ssl/roundcube/webmail.example.com-cert.pem',
            //'local_pk'          => '/etc/ssl/roundcube/webmail.example.com-key.pem',
            'cafile'            => '/etc/openssl/certs/cacert.pem',
        ],
    ];

    $config['use_https'] = true;

    // Log IMAP communication (useful for debugging)
    $config['imap_debug'] = true;

    // Log SMTP communication
    $config['smtp_debug'] = true;

    // Log SQL queries (can generate large logs)
    
    $config['sql_debug'] = false;

    // Enable detailed error logs (for debugging purposes)
    $config['debug_level'] = 4; // 1 = errors only, 4 = all debugging information

