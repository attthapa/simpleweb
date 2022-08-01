pipeline{
   agent{
                label 'slave'
            }
    stages{
        stage('Hello'){
            
            steps{
                sh 'java -version'
                sh 'pwd'
            }
        }

        stage('Maven Version'){
            agent{
                docker{ image 'maven:latest'
                      args '-v /root/.m2:/root/.m2'  }

                steps{
                    sh 'mnv --version'
                }
            }
        }


    }
}