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

        stage('Build and Test') {
            parallel {
                stage('Build') {
                    steps {
                        echo 'Building.'
                        // Build steps
                    }
                }
                stage('Unit Tests') {
                    steps {
                        echo 'Running unit tests.'
                        // Unit testing steps
                    }
                }
                stage('Integration Tests') {
                    steps {
                        echo 'Running integration tests.'
                        // Integration testing steps
                    }
                }
            }
        }
       
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
                echo 'npm run test'

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
    post {
        always {
            echo 'This will always run, regardless of success or failure'
            publishHTML target: [
            allowMissing         : false,
            alwaysLinkToLastBuild: false,
            keepAll             : true,
            reportDir            : 'output/coverage/jest',
            reportFiles          : 'index.html',
            reportName           : 'Test Report'
          ]
        }
        success {
            echo 'This will run only if the pipeline succeeds'
        }
        failure {
            echo 'This will run only if the pipeline fails'
        }
    }
}