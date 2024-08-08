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
                echo "building app"
            }
        }
        stage('Deploy') {
            steps {
                echo "deploying app"
            }
            input {
                message "Do you want to proceed with deployment?"
                ok "Yes, proceed!"

            }
        }
        
    }
    
}