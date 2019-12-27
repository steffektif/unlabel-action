import * as core from '@actions/core'
import {GitHub, context} from '@actions/github'

async function run(): Promise<void> {
  try {
    const github = new GitHub(process.env.repo_token)
    const { owner, repo } = context.repo;
    const labelName = core.getInput('labelName')
    const issueNumber = context.issue.number

    await github.issues.removeLabel({
      repo,
      owner,
      issueNumber,
      labelName
    })

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
