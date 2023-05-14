pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    stages {
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
        // stage('Test') {
        //     steps {
        //         sh 'chmod -R 777 client/node_modules'
        //         sh 'npm test'
        //     }
        // }
        stage('Code Coverage') {
            steps {
                dir('client') {
                    sh 'npm t -- --coverage'
                }
                dir('server') {
                    sh 'npm t -- --coverage'
                }
            }
        }
        stage('Deliver') {
            steps {
                echo 'Finished using the web site'
            }
        }
    }
}
