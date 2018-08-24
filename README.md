# Apple Rebuild

#### Site rebuild of apple.com using AngularJS.

#### By _Anousone Kaseumsouk, 08.17.2018_

## Description

Apple Rebuild is an application that rebuilds the site apple.com using AngularJS. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploy application

* Install AngularFire on your device: $ npm install angularfire2@4.0.0-rc.0 firebase@^3.6.6 --save

* TypeScript Configuration: Add the following: "types": [ "firebase" ] beneath "lib" area on tsconfig.json

* Create an api-keys.ts file in the same level as your project app files.

* Import: import { masterFirebaseConfig } from './api-keys'; to app.module.ts

* import { AngularFireModule } from 'angularfire2'; to app.module.ts

* import { AngularFireDatabaseModule } from 'angularfire2/database'; to app.module.ts

* Add export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}; to the app.module.ts

* Initialize Firebase in app.module.ts, add:   AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule to imports array.

* Log-in or set-up account on https://firebase.google.com

* Go to console and create a new project, click on + sign to Add project.

* Choose real time databse and click on Authentication on left side of navbar.

* Click on Web setup button next to the ? icon and copy and paste the needed content for your api-keys.ts.

* Fill out required portion of api-keys from firebase.

* Configuring for deployment: build production level of applicaiton by $ ng build --env=prod @ root level of directory.

* Install Firebase npm by: $ npm install -g firebase-tools

* Run login command: $ firebase login

* Run init: $ firebase init

* Select Database, Hosting, or Hosting depending on project.

* Create database.rules.json @ top level of directory and enter: {
  "rules": {
    ".read": true,
    ".write": true
  }
}

* Go to firebase.json file and add: {
  "database": {
    "rules": "database.rules.json"
  },
  "hosting": {
    "public": "dist"
  }
}

* Find .firebaserc and verify that it contains the following code: {
  "projects": {
    "default": "your-project-name"
  }
}

* Deploy Firebase: $ firebase deploy

* Open Firebase: $ firebase open

## Further help

* For any questions or support details, please email: anousonekaseumsouk@icloud.com

* To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Specification: Week 1

* Plan out application and building and separating application into components.

* Create basic structure of application.

* Separate code into working components.

### License

*This software is licensed under the MIT license.*

Copyright (c) 2018 **Anousone Kaseumsouk**
