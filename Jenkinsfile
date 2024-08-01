pipeline {
    agent any

    environment {
        DB_ENGINE = 'sqlite'
    }



    parameters {
        booleanParam(
            name: 'RUN_TESTS',
            defaultValue: true,
            description: 'Choose to run tests'
        )
    }
    stages {
        parallel {
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

            when {
                expression {params.RUN_TESTS == true}
            }
            steps {
                echo 'running test'
                echo 'db engine $DB_ENGINE'
                sh 'echo "hostname $HOSTNAME"'
            }
        }
        stage('Deploy Staging') {
            steps {
                echo 'Deploying to staging'

            }

        }

        stage('Deploy Prod') {
            steps {
                echo 'Deploying to prod'

            }
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