pipeline {
    agent any

    environment {
        DB_ENGINE = 'sqlite'
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
            }
        }
        stage('Test') {
            steps {
                echo 'running test'
                echo 'db engine $DB_ENGINE'
                echo 'hostname $HOSTNAME'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application.'
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