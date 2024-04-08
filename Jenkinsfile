pipeline {
    agent any
    
    // triggers {
    //     // Poll the Git repository every minute for changes
    //     pollSCM('* * * * *')
    // }

    stages {
        stage('Verify') {
            steps {
                sh '''
                    docker-compose version
                '''
            }
        }
        stage('Build ') {
            steps() {
                script {
                    // // Build Docker image for React application
                    // sh 'docker build -t murugan1997/user-management:latest .'
                    // // Push Docker image to Docker registry
                    // sh 'docker push murugan1997/user-management:latest'
                    echo "building ${env.BRANCH_NAME}"
                }
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
        
        // stage('Deploy to Kubernetes') {
        //     steps {
        //         script {
        //             // Configure Kubernetes authentication
        //             withKubeConfig(credentialsId: 'kubeconfig', serverUrl: 'https://kube-api.example.com')
        //             // Deploy React application to Kubernetes cluster
        //             sh 'kubectl apply -f kubernetes-manifests/react-app-deployment.yaml'
        //         }
        //     }
        // }
    }
}
