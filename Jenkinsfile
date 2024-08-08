pipeline {
    agent any

    tools {nodejs "nodejs"}
    environment {
        ENVIRONMENT = "prod"

    }

    stages {
        stage('Build') {
            when {
                branch 'main'
            }
            steps {
                echo "Building application"
            }
        }
        stage('deploy') {
            when {
                expression {env.ENVIRONMENT == "prod"}
            }
            steps {
                echo "Deploying to prod"

            }
        }
        
    }
    
}