pipeline {
    // triggers {
    //     // Poll the Git repository every minute for changes
    //     pollSCM('* * * * *')
    // }
    agent {
        docker { image 'node:16-alpine' }
    }
    environment {
        GIT_CEILING_DIRECTORIES = '/var/jenkins_home/workspace'
    }

    stages {
           stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
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
