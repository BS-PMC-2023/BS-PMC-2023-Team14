pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                dir('client') {
                    sh 'npm install'
                }
                dir('server') {
                    sh 'npm install'
                }
            }
        }

        stage('Start Server') {
            steps {
                dir('server') {
                    sh 'npm start'
                }
            }
        }

        stage('Start Client') {
            steps {
                dir('client') {
                    sh 'npm start'
                }
            }
        }
    }
}