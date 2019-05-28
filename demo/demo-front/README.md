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



## Run

```
docker run \
    --rm \
    --name demo-front \
    -p 80:80 \
    -e NGINX_BACKEND_API="http://10.237.5.166:8080"
    demo-front
```

