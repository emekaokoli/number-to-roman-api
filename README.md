# The roman to number API.
A simple nodejs api that takes in an input of a number and return the roman numerical equivalent.

## TL;DR.
The API is built on top of the [`express`](https://expressjs.com/) framework. 

The app leveraged [`joi`](https://joi.dev/), A  Validation library is used to validate the user input.

## to run the project

In the project directory.
### `yarn install`

### To start the application in development mode.
### `yarn start`

## PROJECT FILES AND DIRECTORY
```bash
├── bin
│   └── appstart.js # The entry point of the application.
├── .gitignore # The file that contains the list of files to ignore when committing.
├── .env # The file that contains the environment variables.
├── README.md - # The readme file.
├── ecosystem.config.js # The file that contains the dependencies of the project.
├── swagger.js # The file that contains the swagger documentation.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
└── src # The source code directory.
    ├── __test__ # The directory that  contains the test files.
    │   └── romanNumber.test.js # The test file.
    ├── controllers # The directory that contains the controllers.
    │   ├── romanNumber.js # The controller file.
    ├── data
    │   └── data.js # The roman data file.
    ├── middlewares # The directory that contains the middlewares.
    │   ├── validatebody # The middleware file that validates request body.
    ├── models # The directory that contains the models.
    ├── routes # The directory that contains the routes.
    │   ├── roman.route.js # The route file.
    ├── schema # The directory that contains the schema.
    │   └── validateResources.js # The schema file that validates the user inputs
    ├── services # The directory that contains the services.
    │   └── convert.service.js # The service file.
    │── utils # The directory that contains the utils.
    └── app.js # The entry point of the application.
```