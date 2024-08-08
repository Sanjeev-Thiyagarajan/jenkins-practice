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
                PORT = "5432"
            }
            steps {
                echo "Hostname is ${env.HOSTNAME}"
                echo "Port is ${env.PORT}"
                // sh 'sleep 125'
            }
        }
        stage('Test') {
            steps {
                echo "Hostname is ${env.HOSTNAME}"
                echo "Port is ${env.PORT}"

            }
        }
        
    }
    
}