pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 4000:4000'
        }
    }
    stages {ֿ
            stage('Build') {
            steps {
                dir('client') {
                    sh 'npm install'
                }
                dir('server') {
                    sh 'npm install'
                }
            }
        }
        stage('run') {
            steps {
                dir('client') {
                    sh 'npm start'
                }
                dir('server') {
                    sh 'npm start'
                }
            }
        }

    }
}
