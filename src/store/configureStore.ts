declare var module : any;
declare const process : {env: {NODE_ENV: String}};

let configureStore;

if (process.env.NODE_ENV === 'production') {
  configureStore = require('./configureStore.prod').default;
} else {
  configureStore = require('./configureStore.dev').default;
}

export default configureStore;
