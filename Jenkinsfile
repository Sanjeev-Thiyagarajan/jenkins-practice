pipeline {
    agent any

    tools {nodejs "nodejs"}
    parameters {
           string(name: 'ENVIRONMENT', defaultValue: 'dev', description: 'Specify the environment for deployment')
           booleanParam(name: 'RUN_TESTS', defaultValue: true, description: "Run Tests in pipeline")
       }

    stages {
        stage('Build') {
            when {
                   expression {
                       params.RUN_TESTS == true
                   }
               }
            steps {
                echo "Building application"
            }
        }
        stage('deploy') {
            steps {
                echo "Deploying to ${params.ENVIRONMENT} environment"

            }
        }
        
    }
    
}