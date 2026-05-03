pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/kalpeshghorse/devops-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run App') {
            steps {
                sh 'node server.js &'
            }
        }
    }
}
