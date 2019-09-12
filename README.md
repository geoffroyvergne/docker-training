# Docker Training

- [Docker website](https://www.docker.com/)
- [Docker doc](https://docs.docker.com/)

This training aims to give the basic knowlege on Docker core components.
- containers management
- image management
- image optimisation
- how to manage an applicative stack
- use of docker-compose to simplify docker dore basic use

## Docker on Linux install (VM on windows)

### Requierements

- Windows 10 - 7
- Virtualbox
- Git bash
- vagrant

- [Download vagrant windows](https://releases.hashicorp.com/vagrant/2.2.4/vagrant_2.2.4_x86_64.msi)

## Clone repository (with gitbash)

```cd /C/dev```

```git clone https://github.com/geoffroyvergne/docker-training.git```

## Run vm (in folder with Vagrantfile with gitbash)

```cd docker-training```

```vagrant up```

### SSH

```vagrant ssh```

### Proxy

```sudo mkdir /etc/systemd/system/docker.service.d```

```sudo vi /etc/systemd/system/docker.service.d/http-proxy.conf```

```
[Service]
Environment="HTTP_PROXY=http://fr-proxy.groupinfra.com:3128"
Environment="HTTPS_PROXY=https://fr-proxy.groupinfra.com:3128"
Environment="NO_PROXY=localhost,127.0.0.1,localaddress,.localdomain.com"
```

```sudo systemctl daemon-reload```

```sudo systemctl restart docker```

### Share with os host

```ls /vagrant_data```

### Stop

```vagrant halt```

### Clear environment

```vagrant destroy -f```

## Docker Basic commands

### PreLoad images
```docker pull nginx:1.15-alpine```
```docker pull postgres:11.1```
```docker pull adoptopenjdk/openjdk11:alpine-jre```
```docker pull ubuntu```

### Get current version

```docker --version```

```Docker version 18.09.3, build 774a1f4```

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

```docker images```
```docker images -a```

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

```docker run --rm --name nginx -p 80:80 -d nginx:1.15-alpine```

- --rm : container auto delete on stop
- --name : give a name to the instance
- -d : run in background
- -p : containerport:hostport
- nginx:1.15-alpine image to use

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

```curl -v 192.168.33.10```

### Find process

```docker ps```

```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
a871585512ce        nginx:1.15-alpine   "nginx -g 'daemon of…"   4 seconds ago       Up 1 second         0.0.0.0:80->80/tcp       nginx
```

### Linux process

As you can see, docker containers are seen as process for host

```
pstree
systemd─┬─VBoxService───7*[{VBoxService}]
        ├─accounts-daemon───2*[{accounts-daemon}]
        ├─agetty
        ├─atd
        ├─cron
        ├─dbus-daemon
        ├─dockerd─┬─docker-containe─┬─docker-containe─┬─postgres───16*[postgres]
        │         │                 │                 └─9*[{docker-containe}]
        │         │                 ├─docker-containe─┬─java───28*[{java}]
        │         │                 │                 └─9*[{docker-containe}]
        │         │                 ├─docker-containe─┬─sh───nginx───nginx
        │         │                 │                 └─9*[{docker-containe}]
        │         │                 └─10*[{docker-containe}]
        │         ├─3*[docker-proxy───5*[{docker-proxy}]]
        │         └─10*[{dockerd}]
        ├─2*[iscsid]
        ├─lvmetad
        ├─lxcfs───10*[{lxcfs}]
        ├─networkd-dispat───{networkd-dispat}
        ├─polkitd───2*[{polkitd}]
        ├─rsyslogd───3*[{rsyslogd}]
        ├─snapd───7*[{snapd}]
        ├─sshd───sshd───sshd───bash───pstree
        ├─systemd───(sd-pam)
        ├─systemd-journal
        ├─systemd-logind
        ├─systemd-network
        ├─systemd-resolve
        └─systemd-udevd

```

### Check logs

```docker logs -f nginx```

### Explore container

```docker exec -ti nginx sh```

### Stop container

```docker stop nginx```

## Hello NGINX

```cd /vagrant_data/demo/nginx```

```docker build -t hello-nginx .```

```docker run --rm --name hello-nginx -p 80:80 -d hello-nginx```

```curl -v localhost```

```curl -v 192.168.33.10```

```docker stop hello-nginx```

### Tag

```docker tag <source> <target>:<version>```

```docker tag hello-nginx hello-nginx:1.0```

### Push

```docker login```

```docker tag <login>/<image>:<version>```

```docker tag gvergne/hello-nginx:1.0```

```docker push <login>/<image>:<version>```

```docker push gvergne/hello-nginx:1.0```

## Demo App

The demo application is a simple CRUD Todo list. It is stacked in 3 layers :
- Frontend (Angular Nginx as reverse proxy)
- Backend (Spring Boot)
- Database (Postgresql)

### 1: postgres <- 2: demo-back <- 3: demo-front

- [Backend](https://github.com/geoffroyvergne/docker-training/tree/master/demo/demo-back)
- [Frontend](https://github.com/geoffroyvergne/docker-training/tree/master/demo/demo-front)
- [Docker compose](https://github.com/geoffroyvergne/docker-training/tree/master/demo/docker-compose)

### Explore image

```docker image inspect hello-nginx```

### Dive

[Dive](https://github.com/wagoodman/dive) allows you to explore image layers. It gives statistics on image space usage and possible optimizations.

```
wget https://github.com/wagoodman/dive/releases/download/v0.7.2/dive_0.7.2_linux_amd64.deb
sudo apt install ./dive_0.7.2_linux_amd64.deb
```

```dive demo-front```

```dive demo-back```

## Test image quality

```CI=true dive demo-back```

```
Fetching image... (this can take a while with large images)
Parsing image...
Analyzing image...
  efficiency: 99.4226 %
  wastedBytes: 4568501 bytes (4.6 MB)
  userWastedPercent: 0.9635 %
Run CI Validations...
  Using default CI config
  PASS: highestUserWastedPercent
  SKIP: highestWastedBytes: rule disabled
  PASS: lowestEfficiency
Result:PASS [Total:3] [Passed:2] [Failed:0] [Warn:0] [Skipped:1]
```

## Images optimisation

### Java example

Be careful when you choose images, size can change and be optimized for the same service.

- FROM adoptopenjdk/openjdk11               421 MB
- FROM adoptopenjdk/openjdk11:alpine        323 MB
- FROM adoptopenjdk/openjdk11:alpine-jre    126 MB

## Usefull commands

### Kill all running containers

```docker kill $(docker ps -q)```

### Delete al containers

```docker rm $(docker ps -qa)```

### Delete all stopped containers (including data-only containers)

```docker rm $(docker ps -q)```

```docker rm $(docker ps -q -f status=exited)```

### Delete all 'untagged/dangling' () images

```docker rmi $(docker images -q -f dangling=true)```

### Delete ALL images

```docker rmi $(docker images -q)```