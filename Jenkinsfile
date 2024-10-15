pipeline {
    agent any
    
    // triggers {
    //     // Poll the Git repository every minute for changes
    //     pollSCM('* * * * *')
    // }
    environment {
        GIT_CEILING_DIRECTORIES = '/var/jenkins_home/workspace'
    }

    stages {
        stage("testing"){
            steps(){
                script {
                    echo "Testing ${env.BRANCH_NAME}..."
                }
            }
        }
        stage("deploy"){
            steps(){
                script {
                    echo "deploying ${env.BRANCH_NAME} ..."
                }
            }
        }
    }
}
