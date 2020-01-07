# K8S

minikube config set vm-driver hyperkit
minikube start --memory=8192 --cpus=4 --kubernetes-version=v1.14.2

minikube addons enable ingress

minikube ssh
mkdir /data/demoapp

kubectl get pods -n kube-system

kubectl apply -f base.yml
kubectl apply -f local-volume.yml
kubectl apply -f postgres.yml
kubectl apply -f backend.yml
kubectl apply -f frontend.yml

kubectl expose deployment frontend --type=NodePort --port=81 -n demoapp


minikube service frontend -n demoapp
curl -v $(minikube service frontend -n demoapp --url)


kubectl create deployment hello-minikube --image=gvergne/demo-front
kubectl expose deployment hello-minikube --type=NodePort --port=81
minikube service hello-minikube --url

kubectl delete services hello-minikube
kubectl delete deployment hello-minikube
