## Demo DevOps

## docker-compose

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

## Exercice

- Change Help page content, tag fron version 1.0 version 1.1
- restart service
