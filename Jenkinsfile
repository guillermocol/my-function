pipeline {
    agent none
    stages {
        stage('tf checking') {
            agent {
                docker {
                    image 'hashicorp/terraform:latest'
                }
            }
            steps {
                sh 'terraform fmt -recursive'
                
            }
        }
    }
}
