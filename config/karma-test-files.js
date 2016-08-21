var context = require.context('../src/tests', true, /.*\.[tj]sx?$/);
context.keys().forEach(context);
