# Telnyx - Tests - Cypress - Cucumber

Web UI automated tests of [Telnyx](https://telnyx.com/) site with JavaScript + Cypress + Cucumber.

## Technologies

-   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [Node.js](https://nodejs.org/en/)
-   [Cypress](https://www.cypress.io/)
-   [Cucumber preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)

## Installation

-   Before using the framework, you need to install a [Node.js](https://nodejs.org/en/) LTS version 14 or latest.
    Check that Node.js is installed:

```
node -v
```

Check that package manager npm is installed:

```
npm -v
```

-   In the root directory of a project, run:

```
git clone https://github.com/metroprog/telnyx-test-cucumber.git
cd <project root directory>
npm install
```

## Test Run

-   For execution from the command line, run the command given below:

```
npx cypress run
```

or

```
npm run cypress:run
```

-- To launch tests with changed configuration (for detailed configuration see .config.js files):

```
npm run cypress:run:chrome1366
```

-   For execution from the Test Runner UI, run the command stated below:

```
npx cypress open
```

or

```
npm run cypress:open
```

Then, click on the spec file that you want to trigger for execution.

## Reporting

-   HTML report generates in directory cypress/reports

See example of reporting at: [gh-pages](https://metroprog.github.io/telnyx-test/)
