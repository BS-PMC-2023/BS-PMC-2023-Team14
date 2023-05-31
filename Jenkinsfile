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
<<<<<<< HEAD
                        export DB=mongodb+srv://admin:admin123@cluster0.nswvsqy.mongodb.net/test
                        export JWTPRIVATEKEY=123
=======
                            export DB = mongodb+srv://admin:admin123@cluster0.nswvsqy.mongodb.net/test;
                            export JWTPRIVATEKEY=123;
>>>>>>> 7e0eb39a0df3611496519dcd02ea375b9367af73
                        npm start
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
                        npm start
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
    }
}
