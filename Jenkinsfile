pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
            }
        }

        stage('Run App') {
            steps {
                echo 'Starting application...'
                sh '''
                pkill -f "node server.js" || true
                nohup node server.js > output.log 2>&1 &
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully 🚀'
        }
        failure {
            echo 'Pipeline failed ❌'
        }
    }
}
