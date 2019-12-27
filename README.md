# Unlabel action 
Will remove a label as an Github action. 

## Inputs
**Required** `label_name` is the name of the label which will be removed from the issue.
**Required** `repo_token` the github secret token, github provides that thing on its own.

## Example usage

```yml
uses: steffektif/unlabel-action@v1
with:
  label_name: 'In progress'
  repo_token: ${{ secrets.GITHUB_TOKEN }}
```
