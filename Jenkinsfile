pipeline {
    agent any

    tools {nodejs "nodejs"}
    environment {
        PROD_SERVER = credentials('prod-server')

    }

    stages {
        stage('Build') {

            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'ssh-key', keyFileVariable: 'MY_SSH_KEY', usernameVariable: 'username')]) {
                    sh '''
                    ssh -i $MY_SSH_KEY -o StrictHostKeyChecking=no  ${username}@18.207.192.10 << EOF
                    touch file1
                    touch file2
                    EOF
                    '''
                }
            }
        }
        stage('Test') {
            steps {
                echo "Hostname is ${env.HOSTNAME}"
                echo "Port is ${env.PORT}"

            }
        }
        
    }
    
}