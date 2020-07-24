#Authentication-Proxy POC

## Purpose
 
- Testing out the viabilty of using a lambda function behind an AWS API gateway


## Running the project
#### Project Dependencies
- Ensure that you have the `aws-sam-cli` cli install
    - https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-mac.html
- Needed variables in the `.env` file
    - `SERVERLESS_ACCESS_KEY`
    - `AWS_ACCESS_KEY_ID`
    - `AWS_SECRET_ACCESS_KEY`

#### Running locally
- `npm run start`
- There are 2 important configuration files in this repo. The `template.yml` and the `serverless.yml`. When adding new
routes to the function make to to update both files. The `serverless.yml` is for the Serverless framework to set up the project on
deployment. The `template.yml` is used by the sam cli for local development

#### Coding standards
- All unit test will run on pre-push. It's expected that the code coverage will remain above 90%.
- Prettier will format your code for you. You can run `npm run format` to do so manually. This will also be run as apart
of the pre-push hook
-

#### Testing
- This project has both integration tests and unit tests 