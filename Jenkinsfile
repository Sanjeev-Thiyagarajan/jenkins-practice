pipeline {
    agent any

    tools {nodejs "nodejs"}
    parameters {
           string(name: 'ENVIRONMENT', defaultValue: 'dev', description: 'Specify the environment for deployment')
           booleanParam(name: 'RUN_TESTS', defaultValue: true, description: "Run Tests in pipeline")
       }

    stages {
        stage('Build') {
            steps {
                // Build steps go here
            }
        }
        stage('Deploy') {
            steps {
                // Deployment steps go here
            }
            input {
                message "Do you want to proceed with deployment?"
                ok "Yes, proceed!"

            }
        }
        
    }
    
}