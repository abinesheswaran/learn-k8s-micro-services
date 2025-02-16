# 🚀 Kubernetes Project: Multi-Service Application

This project demonstrates how to containerize, deploy, and manage a multi-service application using **Docker, Docker Compose, and Kubernetes**. The application consists of:

- **Frontend**: A simple HTML & JS application
- **Server A**: A Node.js backend
- **Server B**: Another Node.js service
- **Server C**: A Python Flask service

---

## 📌 1️⃣ Docker: Containerizing Applications

### **Build Docker Images**
```sh
# Build each service
cd frontend && docker build -t front .
cd ../serviceA && docker build -t server_a .
cd ../serviceB && docker build -t server_b .
cd ../serviceC && docker build -t server_c .
```

### **Run Containers**
```sh
docker network create mynetwork

docker run -d --name server_a --network mynetwork -p 3001:3001 server_a
docker run -d --name server_b --network mynetwork -p 3002:3002 server_b
docker run -d --name server_c --network mynetwork -p 3003:3003 server_c
docker run -d --name front --network mynetwork -p 5000:5000 front
```

### **Check Running Containers**
```sh
docker ps
```

---

## 📌 2️⃣ Docker Compose: Simplifying Multi-Container Setup

### **Start Everything**
```sh
docker-compose up --build
```

### **Stop Containers**
```sh
docker-compose down
```

---

## 📌 3️⃣ Kubernetes: Deploying Services

### **Start Kubernetes (Rancher Desktop or Minikube)**
```sh
kubectl cluster-info
```

### **Deployments & Services**
```sh
kubectl apply -f server-a-deployment.yaml
kubectl apply -f server-b-deployment.yaml
kubectl apply -f server-c-deployment.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f server-a-service.yaml
kubectl apply -f server-b-service.yaml
kubectl apply -f server-c-service.yaml
kubectl apply -f frontend-service.yaml
```

### **Check Deployments & Services**
```sh
kubectl get pods
kubectl get services
kubectl get deployments
```

### **Restart a Deployment**
```sh
kubectl rollout restart deployment server-a-deployment
```

---

## 📌 4️⃣ ConfigMaps & Secrets

### **Create & Apply ConfigMap**
```sh
kubectl apply -f configmap.yaml
```

### **Create & Apply Secret**
```sh
kubectl apply -f secret.yaml
```

---

## 📌 5️⃣ Persistent Storage (PV & PVC)

### **Create & Apply Persistent Volume**
```sh
kubectl apply -f persistent-volume.yaml
```

### **Create & Apply Persistent Volume Claim**
```sh
kubectl apply -f persistent-volume-claim.yaml
```

---

## 📌 6️⃣ Debugging Commands

### **Check Logs**
```sh
kubectl logs -l app=server-a
```

### **Enter a Running Pod**
```sh
kubectl exec -it $(kubectl get pod -l app=server-a -o jsonpath="{.items[0].metadata.name}") -- /bin/sh
```

### **List All Resources**
```sh
kubectl get all
```

### **Delete All Deployments & Services**
```sh
kubectl delete deployment --all
kubectl delete service --all
```

---

## 🎯 Conclusion
This project demonstrates how to:
✅ Containerize applications with **Docker**  
✅ Manage multi-container applications with **Docker Compose**  
✅ Deploy services and workloads in **Kubernetes**  
✅ Securely configure apps using **ConfigMaps & Secrets**  
✅ Persist data using **Persistent Volumes & Persistent Volume Claims (PVCs)**  

🚀 **Next Steps**: Improve with **Ingress for Clean URLs!** 😃🔥

