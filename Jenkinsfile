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
    
    stage('Integration Test') {
        steps {
            dir('client') {
                sh 'npm run test'
            }
            dir('server') {
                sh 'npm run test'
            }
        }
    }
}
