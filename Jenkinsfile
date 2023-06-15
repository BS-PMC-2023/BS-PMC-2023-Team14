pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh '''
                    sudo apt-get update
                    sudo apt-get install -y libnss3
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    nvm install node
                    node --version
                    npm --version
                    npm install -g nyc
                '''
            }
        }

        stage('Install Node.js and dependencies') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    nvm install node
                    node --version
                    npm --version

                    cd client
                    npm install
                    cd ../server
                    npm install
                '''
            }
        }

        stage('Start Server') {
            steps {
                dir('server') {
                    sh '''
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                        export DB="mongodb+srv://admin:admin123@cluster0.mongodb.net/test"
                        export JWTPRIVATEKEY="123"
                        nohup npm start > output.log 2>&1 &
                        sleep 5
                    '''
                }
            }
        }

        stage('Start Client') {
            steps {
                dir('client') {
                    sh '''
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                        nohup npm start > output.log 2>&1 &
                        sleep 5
                    '''
                }
            }
        }

        stage('Start Integration Tests') {
            steps {
                dir('client') {
                    sh '''
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                        npm run test
                    '''
                }
            }
        }

        stage('Start Unit Tests') {
            steps {
                dir('client') {
                    sh '''
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                        npm run unit-test
                    '''
                }
            }
        }

        stage('Test Coverage') {
            steps {
                dir('client') {
                    sh '''
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                        nyc npm test
                        nyc report --reporter=text-lcov > coverage.lcov
                    '''
                    script {
                        // This will fail the build if coverage is under 80%
                        def coverage = sh(returnStdout: true, script: 'nyc report --reporter=text-summary | grep "All files" | sed "s/%//" | awk "{print $5}"').trim() as Integer
                        if (coverage < 80) {
                            error("Test coverage is under 80%")
                        }
                    }
                }
            }
            post {
                always {
                    publishCoverage adapters: [coberturaAdapter('coverage.xml')], sourceFileResolver: sourceFiles('STORE_LAST_BUILD')
                }
            }
        }
    }
}
