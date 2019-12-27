# Unlabel action 
Will remove a label as an Github action. 

## Release 
In order to release do the following:
1. Do your changes
2. Create a branch `release/3` 
3. Do `npm install && npm run build && npm prune --production`
4. Add `node_modules` to git and push your changes
5. To verify that everything works set your branch as `uses` in an actions workflow, e.g. `uses: steffektif/unlabel-action@release/3`
6. When verified that everything is working tag that version using `git tag v3` and push the tag: `git push --tags` 
7. In your action configuration in the GitHub actions workflow use the new released version `uses: steffektif/unlabel-action@v3`
8. Celebrate great success

## Inputs
**Required** `label_name` is the name of the label which will be removed from the issue.
**Required** `repo_token` the github secret token, github provides that thing on its own.

## Example usage

```yml
uses: steffektif/unlabel-action@v2
with:
  label_name: 'In progress'
  repo_token: ${{ secrets.GITHUB_TOKEN }}
```
