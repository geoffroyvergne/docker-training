# Docker Training

[Docker website](https://www.docker.com/)
[Docker doc](https://docs.docker.com/)

## Windows Install

### Requierements
- Windows 10
- Power shell

[Docker installation windows](https://docs.docker.com/docker-for-windows/)
[Docker installation manual](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
[Download Docker for windows](https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe)

## Set proxy

### Power shell
```[Environment]::SetEnvironmentVariable("HTTP_PROXY", "http://username:password@proxy:port/", [EnvironmentVariableTarget]::Machine)```

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

### List all containers (running and not running)
```docker container ls --all```

