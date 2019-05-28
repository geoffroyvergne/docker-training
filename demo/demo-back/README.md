# Demo Back

## https://start.spring.io/

## Build

```mvn clean install```

```mvn spring-boot:run```

```mvn package docker:build```

## Run

```
docker run \
	--rm \
	--name postgres \
	-p 5432:5432 \
	-e POSTGRES_USER=todo \
    -e POSTGRES_PASSWORD=todo \
    -e POSTGRES_DB=todo \
    -e POSTGRES_ROOT_PASSWORD=postgres \
	postgres
```

```
docker run \
    --rm \
    --name demo-back \
    -p 8080:8080 \
    -e DATABASE_HOST=10.237.6.85 \
    -e DATABASE_USER=todo \
    -e DATABASE_PASSWORD=todo \
    -e DATABASE_BASE=todo \
    -e HIBERNATE_DLLAUTO=create-drop \
    demo-back
```

## Test API

```curl -v http://localhost:8080/api/backend/todo/```

## Push

```docker login```

```docker tag demo-back <login>/demo-back:latest```

```docker push <login>/demo-back:latest```
