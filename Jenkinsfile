pipeline{
    agent none
        stage('Maven Test'){
            agent{
                docker { image 'maven:3.8.6-jdk-11'}
            }
            steps{
                sh 'mvn --version'
            }
        }
    }
}