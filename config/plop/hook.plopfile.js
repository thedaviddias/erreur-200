const hookPlop = plop => {
  plop.setGenerator('hookComponent', {
    description: 'Custom hook component',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'Enter hook name (example: useLocation):',
        validate: function (input) {
          var done = this.async();
          setTimeout(function () {
            if (input === '') {
              done('You need to provide a name');
              return;
            }
            done(null, true);
          }, 100);
        }
      },
    ],
    actions: function(data) {
			const actions = [
      {
        type: 'add',
        path: '../../src/hooks/{{properCase name}}.tsx',
        skipIfExists: true,
        templateFile: 'templates/hooks/hook.hbs',
        abortOnFail: true
      },
      {
				type: 'modify',
        path: '../../src/hooks/index.ts',
        pattern: /(\n\n*)$/g,
        template: "\nexport * from './{{properCase name}}Context'\n",
        abortOnFail: true,
        transform(fileContents) {
					return fileContents.replace(/export {}\n/g, '');
				}
			}
    ];

    return actions

  }})
}

module.exports = hookPlop
