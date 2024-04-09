pipeline {
    agent any
    
    // triggers {
    //     // Poll the Git repository every minute for changes
    //     pollSCM('* * * * *')
    // }

    stages {
        stage('creating infra'){
            steps {
                build job: 'terraform-pipline-usm',parameters: [string(name: 'ACTION', value: 'apply')]
            }
        }
        stage('Build ') {
            steps() {
                script {
                    echo "this is the ip username from the env: $IP_USER_ADDRESS"
                    def ipaddress = sh(script: 'terraform output -raw instance_ip_addr', returnStdout: true).trim()
                    def username = sh(script: 'terraform output -raw VmIpAddress', returnStdout: true).trim()
                    echo "this is the ip address: $ipaddress"
                    echo "this is the ip username: $username"
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
        // stage('destroying infra'){
        //     steps {
        //         build job: 'terraform-pipline-usm',parameters: [string(name: 'ACTION', value: 'destroy')]
        //     }
        // }
        
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
