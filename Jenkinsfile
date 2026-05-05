pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "kalpesh/task-manager"
    }

    stages {

        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/kalpeshghorse/devops-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh 'docker push $DOCKER_IMAGE'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }
    }
}
