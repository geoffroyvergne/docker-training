# Docker Training

[Docker website](https://www.docker.com/)
[Docker doc](https://docs.docker.com/)

## Windows Install

### Requierements

- Windows 10
- Power shell

### Doc

- [Docker installation windows](https://docs.docker.com/docker-for-windows/)
- [Docker installation manual](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
- [Download Docker for windows](https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe)

## Set proxy

### Power shell

```
[Environment]::SetEnvironmentVariable("HTTP_PROXY", "http://username:password@proxy:port/", [EnvironmentVariableTarget]::Machine)
```

```Restart-Service docker```

## Basic commands

### Get current version

```docker --version```

### Launch your first container

```docker run hello-world```

```
docker : Unable to find image 'hello-world:latest' locally
...

latest:
Pulling from library/hello-world
ca4f61b1923c:
Pulling fs layer
ca4f61b1923c:
Download complete
ca4f61b1923c:
Pull complete
Digest: sha256:97ce6fa4b6cdc0790cda65fe7290b74cfebd9fa0c9b8c38e979330d547d22ce1
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.
```

### List images

```docker image ls```

### Delete image

```docker rmi <image>```

### List all containers (running and not running)

```docker container ls --all```

```docker ps -a```

### Explore application

```docker run --interactive --tty ubuntu bash```

```docker run -it ubuntu bash```

## Nginx case

### Run container

```docker run --rm --name -d nginx -p 80:80 nginx:1.15-alpine```

```
Unable to find image 'nginx:1.15-alpine' locally
1.15-alpine: Pulling from library/nginx
e7c96db7181b: Pull complete 
264026bbe255: Pull complete 
a71634c55d29: Pull complete 
5595887beb81: Pull complete 
Digest: sha256:57a226fb6ab6823027c0704a9346a890ffb0cacde06bc19bbc234c8720673555
Status: Downloaded newer image for nginx:1.15-alpine
```

- [Nginx image détails](https://github.com/nginxinc/docker-nginx/blob/e5123eea0d29c8d13df17d782f15679458ff899e/mainline/alpine/Dockerfile)

### Access application

```curl -v localhost```

### Find process

```docker ps```

```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
a871585512ce        nginx:1.15-alpine   "nginx -g 'daemon of…"   4 seconds ago       Up 1 second         0.0.0.0:80->80/tcp       nginx

```

### Explore container

```docker exec -ti nginx sh```

### Stop container

```docker stop nginx```