# Demo Front

## Install

```npm install```

## Serve

```npm run serve```

[http://localhost:4200](http://localhost:4200)

## Build

```npm run build```

```npm run docker```

## Docker build

```docker build -t demo-front .```

## Run

```
docker run \
    --rm \
    --name demo-front \
    -p 80:80 \
    -e NGINX_BACKEND_API="http://192.168.33.10:8080"
    demo-front
```

