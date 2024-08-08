pipeline {
    agent any

    tools {nodejs "nodejs"}
    environment {
        PROD_SERVER = credentials('prod-server')

    }

    stages {
        stage('Build') {

            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                echo "Hostname is ${env.HOSTNAME}"
                echo "Port is ${env.PORT}"
                echo "prod server ${credentials('prod-server')}"
                echo "again prod server ${PROD_SERVER}"
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