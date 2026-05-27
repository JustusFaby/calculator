pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/JustusFaby/calculator.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t calculator .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop calculator || true
                docker rm calculator || true

                docker run -d \
                --name calculator \
                -p 80:80 \
                calculator
                '''
            }
        }
    }
}