pipeline {
    agent any

    tools {nodejs "nodejs"}
    environment {
        ENVIRONMENT = "dev"

    }

    stages {
        stage('Build') {
            when {
                branch 'master'
            }
            steps {
                echo "Building application"
            }
        }
        stage('deploy') {
            when {
                expression {env.ENVIRONMENT == prod}
            }
            steps {
                echo "Deploying to prod"

            }
        }
        
    }
    
}