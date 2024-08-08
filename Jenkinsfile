pipeline {
    agent any

    tools {nodejs "nodejs"}
    environment {
        PROD_SERVER = credentials('prod-server')

    }

    stages {
        stage('Build') {

            steps {
                withCredentials([usernamePassword(credentialsId: 'prod-server', passwordVariable: 'mypassword', usernameVariable: 'myusername')]) {
                    sh '''
                    echo ${mypassword}
                    echo ${myusername}
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