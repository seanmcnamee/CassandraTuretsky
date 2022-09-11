# AngularBootstrapTemplate

## Steps for creation:
- Create Angular application with `ng new AngularBootstrapTemplate` with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.
    - Use Angular Routing
    - Use SCSS
- `cd AngularBootstrapTemplate`
- Add linting with `ng add @angular-eslint/schematics`
	- (answer Y)
- Add e2e testing with `ng add @cypress/schematic`
	- (answer Y)
	- (answer Y)
- Allow for ci e2e testing with `npm install --save-dev start-server-and-test`
- Test e2e testing
    - Modify `spec.cy.ts` test (remove one of the 'contains' tests)
    - add `"e2e:ci": "start-server-and-test start http://localhost:4200 cypress:run"` to package.json
    - Run `npm run e2e:ci`
- Test linting with `ng lint`
- Edit `karma.conf.js` near the bottom to look as follows:
```json
autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    singleRun: false,
```
- Test CI tests with `npm test -- --no-watch --no-progress --browsers=ChromeHeadlessCI`
    - You may have to `<CTRL>+C` to break
- Fix compile collisions between Karma and Cypress by adding the following to tsconfig.json
```json
{
  . . .
  "include": [
    "src",
    "node_modules/cypress"
  ],
  "exclude": [
    "node_modules/cypress" //Can only exclude what has been included. This prevents compile conflicts between Karma and Cypress
  ]
  . . .
}
```
- Add GitHub pages with `npm install angular-cli-ghpages --save-dev`
- Make sure `ng build` is working
- Make sure repo is committed to GitHub

- Test out `ng deploy --base-href=/TemplaterSite/ --name='GH Actions Deployment' --email=seanmcnamee.45@gmail.com`
- Edit package.json to include the tests and deployment
```json
    "test:ci": "npm test -- --no-watch --no-progress --browsers=ChromeHeadlessCI",
    "deploy": "ng deploy --base-href=/AngularBootstrapTemplate/ --name='GH Actions Deployment' --email=seanmcnamee.45@gmail.com"
```
- Make CI for GH Actions
```yml
# Continuous integration for Angular
name: Angular GitHub CI Tests

# Controls when the workflow will run
on:
  # Triggers the workflow on pull request event for the main branch
  pull_request:
    branches: [ main ]
jobs:
   build-and-deploy:
     runs-on: ubuntu-latest
     
     steps: 
      - name: Checkout
        uses: actions/checkout@v2
      
      - name: Use Node.js 14.x
        uses: actions/setup-node@v1
        with:
          node-version: 14.x

      - name: Setup
        run: npm ci

      - name: Lint
        run:
          npm run lint

      - name: Unit Test with Karma
        run:
          npm run test:ci

      - name: End-To-End Test with Cypress
        run:
          npm run e2e:ci
```
- Make CD for GH Actions
```yml
# Continuous integration for Angular
name: Angular GitHub CI/CD

# Controls when the workflow will run
on:
  # Triggers the workflow on push to main branch
  push:
    branches: [ main ]
jobs:
   build-and-deploy:
     runs-on: ubuntu-latest
     
     steps: 
      - name: Checkout
        uses: actions/checkout@v2
      
      - name: Use Node.js 14.x
        uses: actions/setup-node@v1
        with:
          node-version: 14.x

      - name: Setup
        run: npm ci

      - name: Lint
        run:
          npm run lint

      - name: Unit Test with Karma
        run:
          npm run test:ci

      - name: End-To-End Test with Cypress
        run:
          npm run e2e:ci

      - name: Conventional Changelog Action
        id: changelog
        uses: TriPSs/conventional-changelog-action@v3
        with:
          github-token: ${{ secrets.SEAN_ACCESS_TOKEN }}
          output-file: "false"

      - name: Create Release
        uses: actions/create-release@v1
        if: ${{ steps.changelog.outputs.skipped == 'false' }}
        env:
          GITHUB_TOKEN: ${{ secrets.SEAN_ACCESS_TOKEN }}
        with:
          tag_name: ${{ steps.changelog.outputs.tag }}
          release_name: ${{ steps.changelog.outputs.tag }}
          body: ${{ steps.changelog.outputs.clean_changelog }}

      - name: Deploy
        env:
         GH_TOKEN: ${{ secrets.SEAN_ACCESS_TOKEN }}
        run:
          npm run deploy
```
- Create Access Token (for public repos)
    - User Settings > Developer Settings > Personal access tokens > Generate new token
	    - Select all repo scopes
	    - Generate token
	    - Copy value
- Add Secret to repo
    - Settings > Secrets > Actions > New repository secret
        - Paste value from personal access token
	    - Name: SEAN_ACCESS_TOKEN

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


## Template Usage
