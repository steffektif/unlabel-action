import * as core from '@actions/core'
import {GitHub, context} from '@actions/github'

async function run(): Promise<void> {
  try {
    const octokit = new GitHub(<string> process.env.repo_token)
    const { owner, repo } = context.repo;
    const labelName = <string> core.getInput('labelName')
    const issueNumber = context.issue.number

    octokit.issues.removeLabel({
      issue_number: issueNumber,
      name: labelName,
      owner: owner,
      repo: repo
    })

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
