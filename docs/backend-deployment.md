# Creating a Fargate Cluster with Docker Image Running Spring Boot Application

## 1. Create Docker image
```shell
mvn clean compile jib:build 
```

## 2. Create ECS Cluster
1. Go to Amazon ECS in AWS Console
2. Click "Create Cluster"
3. Choose "Networking only" (Fargate)
4. Name cluster and configure VPC

## 3. Define Task Definition
1. In ECS, go to "Task Definitions"
2. Click "Create new Task Definition"
3. Select "FARGATE"
4. Configure:
  - Task memory and CPU
  - Container details (Docker imge image URL)
  - Port mappings (8080)
  - Environment variables

## 4. Create ECS Service
1. In ECS cluster, click "Create" in Services section
2. Choose task definition
3. Configure:
  - Service name
  - Number of tasks
  - VPC and security group settings

## 5. Set Up Load Balancer 
1. Create Application Load Balancer in EC2 service
2. Configure target group for container port
3. Add load balancer to ECS service
