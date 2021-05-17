# Microblogging Boticário

![Preview-Screens](https://github.com/Fmendescn/microblogging-boticario/blob/main/screenshots/screenshot.png)

## Index

  - [🔖&nbsp; About](#-about)
  - [🚀 Technologies used](#-technologies-used)
  - [🗂 Getting started](#-getting-started)

---
### 🔖&nbsp; About

This project was developed like application to Boticário Group. It's a simple blog that you can write a text with a maximum of 240 characters, edit and delete. Also you can see the last news about the boticario group.

---

### 🚀 Technologies used

- [React-Native](https://facebook.github.io/react-native/) - Build the native app using JavaScript and React
- [React-Navigation](https://reactnavigation.org/docs/en/getting-started.html) - Router
- [ESlint](https://eslint.org/) - Linter
- [Prettier](https://prettier.io/) - Code Formatter
- [Styled-Components](https://www.styled-components.com/) - Styles
- [Axios](https://github.com/axios/axios) - Make requests to API
- [React-Redux](https://react-redux.js.org/) - State Management
- [Redux-Sauce](https://github.com/jkeam/reduxsauce) - Provides a few tools for working with Redux-based codebases.
- [React-Native-Async-Storage](https://github.com/react-native-async-storage/async-storage) - Storage
- [React-Native-Modal](https://github.com/react-native-modal/react-native-modal) - Modal Component
- [React-Native-SnackBar](https://github.com/cooperka/react-native-snackbar) - Display alerts
- [React-Native-Skeleton-Placeholder](https://github.com/chramos/react-native-skeleton-placeholder) - Loading Components
- [React-Native-Splash-Screen](https://github.com/crazycodeboy/react-native-splash-screen) - Display splash screen while app is loading


---

### 🗂 Getting started

- #### Requirements
  * To run this project in the development mode, you'll need to have a basic environment to run a React-Native App, that can be found [here](https://facebook.github.io/react-native/docs/getting-started).
- #### Installing

  ```bash
  # Clone the project
  $ git clone https://github.com/Fmendescn/microblogging-boticario

  # Access folder
  $ cd microblogging-boticario

  # Install dependencies
  $ yarn install
  ```

- #### Running
  With the environment properly configured, you can now run the app:

  Metro Bundler
  ```bash
  # Init Metro Bundler
  $ yarn start
  ```

  iOS
  ```bash
  # Access iOS folder
  $ cd ios

  # Install pod dependencies
  $ pod install

  # Back to root folder
  $ cd ..

  # Install the app
  $ yarn ios
  ```

  Android
  ```bash
  # Install the app
  $ yarn android
  ```
