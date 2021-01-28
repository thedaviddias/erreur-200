const testPlop = plop => {
  plop.setGenerator('testFile', {
    description: 'Test file',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'Enter file name with extension (example: Navbar, without test or spec):',
        validate: function (input) {
          const done = this.async();
          setTimeout(function () {
            if (input === '') {
              done('You need to provide a name');
              return;
            }
            done(null, true);
          }, 100);
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Which is the path where the file should be created (ex: src/components/Navbar) omitting the "__tests__" folder:',
        validate: function (input) {
          const done = this.async();
          setTimeout(function () {
            if (input === '') {
              done('You need to provide a path');
              return;
            }
            done(null, true);
          }, 100);
        }
      }
    ],
    actions: function(data) {
			const actions = [
      {
        type: 'add',
        path: '../../{{path}}/__tests__/{{properCase name}}.test.ts',
        skipIfExists: true,
        templateFile: 'templates/__tests__/test.hbs',
        abortOnFail: true
      },
    ];

    return actions

  }})
}

module.exports = testPlop
