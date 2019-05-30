# Demo Back

[https://start.spring.io/](https://start.spring.io/)

## Run Postgres first

```
docker run \
    --rm \
    --name postgres \
    -e POSTGRES_USER=todo \
    -e POSTGRES_PASSWORD=todo \
    -e POSTGRES_DB=todo \
    -v /data/db/docker/demo/postgresql:/var/lib/postgresql/data \
    -d \
    postgres
```

- -e : Set environment variable (key=value)
- -v : Mount volume (host:container)

## Build

```mvn clean install```

```mvn spring-boot:run```

```mvn package```

## Docker build

```docker build -t demo-back .```

### Build Multi Stages (change proxy settings if needed)

```docker build -f Dockerfile-multi-stage -t demo-back .```

## Run

### Run the application

```
docker run \
    --rm \
    --name demo-back \
    --link postgres \
    -p 8080:8080 \
    -e DATABASE_HOST=postgres \
    -e DATABASE_USER=todo \
    -e DATABASE_PASSWORD=todo \
    -e DATABASE_BASE=todo \
    -e HIBERNATE_DLLAUTO=create \
    -d \
    gvergne/demo-back
```

- --link containername
- HIBERNATE_DLLAUTO create : first time
- HIBERNATE_DLLAUTO validate : to keep data

### Test API

```curl -v http://localhost:8080/api/backend/todo/```

```curl -v http://192.168.33.10:8080/api/backend/todo/```

### Check if postgres data are properly mounted

```sudo ls /data/db/docker/demo/postgresql/```

### Check postgres tables

```docker exec -ti postgres bash```

```psql -U todo```

```select * from todo;```

## Push

```docker login```

```docker tag demo-back <login>/demo-back:latest```

```docker tag demo-back <login>/demo-back:0.1```

```docker push <login>/demo-back:latest```
    
```docker push <login>/demo-back:1.0```
