# audio-api

Start of a project utilizing serverless, graphql, apollo, mongodb via atlas, lambdas, and S3. The deployed version can be found at https://jqpkd4uxq6.execute-api.us-east-1.amazonaws.com/dev/graphql. Introspection is enabled. The architecture for is serverless (easy to switch), 
with a GraphQL control layer, mongodb for metadata storage, and S3 for serving audio files.

## running

Follow the steps below to run the project:

1. install the serverless framework -- `npm install -g serverless`
2. install application dependencies -- `npm install`
3. run the start script -- `npm run start`

## todos

the following is a list of items that need to be done or could have been done better:

* testing!!!
* passwords are currently environment variables and should be moved to Secrets Manager or AWS SSM
* add authentication using JWT, Cognito, or Auth0 (i'll be doing this one soon)
* the code structure is naive and could have been organized; i like small files
* better error handling
* Use VPC peering for MongoDB Atlas or install on a local server (or use AWS DocumentDB)
* did i mention testing?
