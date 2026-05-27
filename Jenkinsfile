pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t calculator-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop calculator || true
                docker rm calculator || true

                docker run -d \
                  --name calculator \
                  -p 80:80 \
                  calculator-app
                '''
            }
        }

    }

    post {
        success {
            echo 'Deployment Successful!'
        }

        failure {
            echo 'Deployment Failed!'
        }
    }
}
