
pipeline {
	agent any
	stages {
		stage('Clone Git Repo'){
				steps{
					git 'https://github.com/meghrajs/resume-website-assessment.git'
		    }
		}
		stage('Install Dependencies'){
				steps{
					bat 'npm install'
				}
		}
		stage('Run Tests'){
				steps{
				def commitMessage = sh(script:"git log --format=%B -n 1 ${env.GIT_COMMIT}", returnStdout:true).trim()
				def commitAuthor = sh(script:"git log --format='%an' -n 1 ${env.GIT_COMMIT}", returnStdout:true).trim()
				def commitEmail = sh(script:"git log --format='%ae' -n 1 ${env.GIT_COMMIT}", returnStdout:true).trim()

				def cypressVars = "COMMIT_INFO_BRANCH=${env.GIT_BRANCH} COMMIT_INFO_SHA=${env.GIT_COMMIT} COMMIT_INFO_REMOTE=${env.GIT_URL} COMMIT_INFO_MESSAGE=\"${commitMessage}\" COMMIT_INFO_AUTHOR=\"${commitAuthor}\" COMMIT_INFO_EMAIL=${commitEmail}"

					bat 'SET ${cypressVars} && npx cypress run --record --key 06fca1cf-58b2-44a5-ab9d-b23152ae1927'
				}
		}
		stage('Publish HTML Report'){
				steps{
					publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/mochawesome', reportFiles: 'mochawesome.html', reportName: 'HTML Report', reportTitles: ''])
				}
		}
	}
}