pipeline {
    agent any

    tools {nodejs "nodejs"}
    environment {
        PROD_SERVER = credentials('prod-server')

    }

    stages {
        stage('Build') {

            steps {
                echo "${PROD_SERVER}" // Prints username:password
                echo "${PROD_SERVER_USR}" // Prints username
                echo "${PROD_SERVER_PSW}" // Prints password
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