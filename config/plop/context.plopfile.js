const contextPlop = plop => {
  plop.setGenerator('contextComponent', {
    description: 'Context component',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'Enter context name (example: Location, without Context mention):',
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
        path: '../../src/contexts/{{properCase name}}Context.tsx',
        skipIfExists: true,
        templateFile: 'templates/contexts/context.hbs',
        abortOnFail: true
      },
      {
				type: 'modify',
        path: '../../src/contexts/index.ts',
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

module.exports = contextPlop
