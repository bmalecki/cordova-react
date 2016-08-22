var context = require.context('../src/tests', true, /.*_test\.[tj]sx?$/);
context.keys().forEach(context);
