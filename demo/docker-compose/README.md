# Docker compose

Docker compose helps to manage applicative stack 

### Start stack

```docker-compose up -d```

### View logs

```docker-compose logs -f```

### Delete stack

```docker-compose down```

### Stack status

```docker-compose ps```

### Stop specific service

```docker-compose stop frontend```

### Start specific service

```docker-compose up -d frontend```

## Change frontend version

- Change version in docker-compose.yml
- ```docker-compose stop frontend```
- ```docker-compose up -d frontend```

```docker-compose ps```

```
          Name                         Command               State         Ports       
---------------------------------------------------------------------------------------
docker-compose_backend_1    java -jar /app/demo-back.jar     Up      8080/tcp          
docker-compose_database_1   docker-entrypoint.sh postgres    Up      5432/tcp          
docker-compose_frontend_1   /bin/sh -c /bin/sh -c "env ...   Up      0.0.0.0:80->80/tcp
```

## Explore database container

```docker exec -ti docker-compose_database_1 bash```

## Exercice

- Change Help page content, tag from version 1.0 version 1.1
- restart service
