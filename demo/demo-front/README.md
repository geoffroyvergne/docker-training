# Demo Front

Demo front is an angular application, it consumes the backend. It is served by NGINX, the backend is accessible via reverse proxy as gateway.

## Install

```npm install```

## Serve

```npm run serve```

[http://localhost:4200](http://localhost:4200)

## Build

```npm run build```

```npm run docker```

## Docker build

### Simple

```docker build -t demo-front .```

### Multi Stages (change proxy settings if needed)

```docker build -f Dockerfile-multi-stage -t demo-front .```

## Run

```
docker run \
    --rm \
    --name demo-front \
    --link demo-back \
    -p 80:81 \
    -e API_URL=http://localhost:8080 \
    -d \
    gvergne/demo-front
```

## Run in browser

[http://192.168.33.10](http://192.168.33.10)

## Push

```docker login```

```docker tag demo-front <login>/demo-front:latest```

```docker tag demo-front <login>/demo-front:1.0```

```docker push <login>/demo-front:latest```

```docker push <login>/demo-front:1.0```