# react_webpack_boilerplate

React boilerplate with Webpack, Express, Hot Module Replacement loading

## Setup

Create a bare clone of the repository.

`git clone --bare git@github.com:lucksp/react_webpack_express_boilerplate.git`
// Mirror-push to the new repository.

`cd react_webpack_express_boilerplate.git`
`git push --mirror https://github.com/exampleuser/your-new-repository.git`
// Remove the temporary local repository you created in step 1.

`cd ..`
`rm -rf old-repository.git`
Then...

`yarn install`

## Run Dev

`yarn dev`

## Run Prod

`yarn build`

#### Credits to:

[medium.freecodecamp React Boilerplate](https://medium.freecodecamp.org/how-to-build-your-own-react-boilerplate-2f8cbbeb9b3f) and [medium.freecodecamp Webpack for React](https://medium.freecodecamp.org/learn-webpack-for-react-a36d4cac5060) for getting this started.
