#!/usr/bin/env bash

PUBLIC_IP=$(kubectl get svc nginx-nginx-ingress-controller -n nginx -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

cat <<EOF | kubectl apply -f -
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: ingress
  namespace: demoapp
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/service-upstream: "true"
    #nginx.ingress.kubernetes.io/rewrite-target: /$1
spec:
  rules:
    - host: demoapp.$PUBLIC_IP.nip.io
      http:
        paths:
          - path: /
            backend:
              serviceName: frontend
              servicePort: 81
          - path: /api/backend
            backend:
              serviceName: backend
              servicePort: 8080
EOF

echo "curl -v http://demoapp.$PUBLIC_IP.nip.io"
