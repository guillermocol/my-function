Jenkinsfile (Declarative Pipeline)
pipeline {
     agent any
      stages {
        stage('Build') { 
            steps { 
                sh 'make' 
            }
        }
        stage('Testing'){
            steps {
                sh 'make check'
                junit 'reporting/**/*.xml' 
            }
        }
   
    }
}
