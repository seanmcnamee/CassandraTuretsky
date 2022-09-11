# CassandraTuretsky Website
[![Angular GitHub CI/CD](https://github.com/seanmcnamee/CassandraTuretsky/actions/workflows/cd.yaml/badge.svg)](https://github.com/seanmcnamee/CassandraTuretsky/actions/workflows/cd.yaml)
[![pages-build-deployment](https://github.com/seanmcnamee/CassandraTuretsky/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/seanmcnamee/CassandraTuretsky/actions/workflows/pages/pages-build-deployment)

Website available at [https://seanmcnamee.github.io/CassandraTuretsky/](https://seanmcnamee.github.io/CassandraTuretsky/)

## Creation

- Generated from [AngularBootstrapTemplate](https://github.com/seanmcnamee/AngularBootstrapTemplate)
- Replaced `AngularBootstrapTemplate` with `CassandraTuretsky`
- Replaced `angular-bootstrap-template` with `cassandra-turetsky`
- Create Access Token (for public repos)
    - User Settings > Developer Settings > Personal access tokens > Generate new token
	    - Select all repo scopes
	    - Generate token
	    - Copy value
- Add Secret to repo
    - Settings > Secrets > Actions > New repository secret
        - Paste value from personal access token
	    - Name: SEAN_ACCESS_TOKEN
- Ran application using steps defined in [Running applcation](#running-application)

## Development

### Running application
- Pull down repo to your machine.
- Ensure you have npm and the angular cli installed
- After pulling down the application, run `npm install` to locally download all node_modules
- Run application with `ng serve` or `npm run start`. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Developing Application

- Make sure you are working in a branch other than `main`
- Scaffold things with `ng generate component|directive|pipe|service|class|guard|interface|enum|module <NAME>`

### Pushing changes

- Ensure the following have no issues
   - `npm run start` is working, and everythin functions as expected
   - Ensure that `npm run lint` passes
   - Ensure that `npm run test:ci` passes
   - Ensure that `npm run e2e:ci` passes
- Push development branch
- Go through PR process in GitHub
