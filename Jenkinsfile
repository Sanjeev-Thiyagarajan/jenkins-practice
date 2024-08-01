pipeline {
    agent any

    environment {
        DB_ENGINE = 'sqlite'
    }

    // options {
    //     // timeout(time: 2, unit: 'MINUTES')
    // }

    parameters {
           string(name: 'ENVIRONMENT', defaultValue: 'dev', description: 'Specify the environment for deployment')
       }
    stages {
        stage('Build') {

            environment {
                HOSTNAME = "my-host"
                PROJECTBUILD = "mybuild"
            }
            steps {
                sh 'echo Building the project'
                sh 'echo db engine $DB_ENGINE'
                sh 'echo "hostname $HOSTNAME"'
                // sh 'sleep 125'
            }
        }
        stage('Test') {
            steps {
                echo 'running test'
                echo 'db engine $DB_ENGINE'
                sh 'echo "hostname $HOSTNAME"'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application.'
                 echo "Deploying to ${params.ENVIRONMENT} environment."
            }
        }
    }
    post {
        always {
            echo 'This will always run, regardless of success or failure'
        }
        success {
            echo 'This will run only if the pipeline succeeds'
        }
        failure {
            echo 'This will run only if the pipeline fails'
        }
    }
}