worker_processes 1;

events
{
    worker_connections 1024;
}

http
{
    include mime.types;
    default_type application / octet - stream;
    sendfile on;
    keepalive_timeout 65;

    server
    {
        listen 443 ssl;
#对应你的域名
        server_name mulintong.com;
        ssl_certificate / www / server / nginx / conf / mulintong.com_bundle.crt;
        ssl_certificate_key / www / server / nginx / conf / mulintong.com.key;
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1 .1 TLSv1 .2;
        ssl_ciphers ECDHE - RSA - AES128 - GCM - SHA256 : HIGH : !aNULL : !MD5 : !RC4 : !DHE;
        ssl_prefer_server_ciphers on;
#如果是静态文件, 直接指向目录, 如果是动态应用, 用proxy_pass转发一下
        location /
        {
            root / www / wwwroot / mulintong.com;
            index index.html;
            fastcgi_param HTTPS
                fastcgi_param HTTP_SCHEME
        }
    }
    server
    {
        listen 80;
        server_name localhost;
        rewrite ^ / (.*) $ https : // localhost/$1 permanent;
                                   charset utf -
                      8;

        location /
        {
            root / www / wwwroot / mulintong.com;
            try_files $uri $uri / / index.html;
            index index.html index.htm;
        }

        location / prod - api /
        {
            proxy_set_header Host $http_host;
            proxy_set_header X - Real - IP $remote_addr;
            proxy_set_header REMOTE - HOST $remote_addr;
            proxy_set_header X - Forwarded - For $proxy_add_x_forwarded_for;
            proxy_pass http: // localhost:8080/;
        }

        error_page 500 502 503 504 / 50x.html;
        location = / 50x.html
        {
            root html;
        }
    }
}