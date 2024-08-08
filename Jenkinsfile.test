pipeline {
    agent any

    tools {nodejs "nodejs"}
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

       
        stage('Build') {

            environment {
                HOSTNAME = "my-host"
                PROJECTBUILD = "mybuild"
            }
            steps {
                sh 'echo Building the project'
                sh 'npm install'
                sh 'echo "hostname $HOSTNAME"'
                // sh 'sleep 125'
            }
        }
        stage('Test') {

            when {
                expression {params.RUN_TESTS == true}
            }
            steps {
                sh 'npm run test'
                sh 'ls -l output'
                sh 'ls -l output/coverage'
                sh 'ls -l output/coverage/jest/'

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
            publishHTML (target: [
            allowMissing         : false,
            alwaysLinkToLastBuild: false,
            keepAll             : true,
            reportDir            : 'output/coverage/jest/',
            reportFiles          : 'index.html',
            reportName           : 'Test Report'
          ])
        }
        success {
            echo 'This will run only if the pipeline succeeds'
        }
        failure {
            echo 'This will run only if the pipeline fails'
        }
    }
}