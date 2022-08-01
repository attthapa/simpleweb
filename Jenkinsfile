pipeline{
    agent none
    stages{
        stage('Maven Test'){
            agent{
                docker { image '3.8.6-jdk-11'}
            }
            steps{
                sh 'mvn --version'
            }
        }
    }
}