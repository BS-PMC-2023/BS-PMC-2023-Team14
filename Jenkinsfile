pipeline {
    agent any

    stages {
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
                        export DB="mongodb+srv://admin:admin123@cluster0.nswvsqy.mongodb.net/test"
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
                stage('Check code coverage') {
            steps {
                sh '''
            export NVM_DIR="$HOME/.nvm"
            [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

            cd client
            npm run test

            # Fail if code coverage is below 80%
            if [ $(nyc report --reporter=text-summary | grep 'All files' | awk '{print $5}' | sed 's/%//') -lt 80 ]
            then
                echo "Code coverage is less than 80%"
                exit 1
            fi
        '''
            }
        }
        stage('Run tests and archive results') {
            steps {
                sh '''
            export NVM_DIR="$HOME/.nvm"
            [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

            cd client
            npm run test
        '''
                junit '**/test-results.xml'
            }
        }
    }
}