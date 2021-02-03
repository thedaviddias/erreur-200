const componentPlop = plop => {
  plop.setGenerator('componentComponent', {
    description: 'React component',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'Enter stateless component name (example: NavBar):',
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
      {
        type: 'confirm',
        name: 'props',
        default: false,
        message: 'Will the component have styles?',
      },
      {
        type: 'confirm',
        name: 'styles',
        default: false,
        message: 'Will the component accept props?',
      },
    ],
    actions: function(data) {
			const actions = [{
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.tsx',
        skipIfExists: true,
        templateFile: 'templates/components/component.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.ts',
        skipIfExists: true,
        templateFile: 'templates/components/index.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/__tests__/{{properCase name}}.test.tsx',
        skipIfExists: true,
        templateFile: 'templates/components/test.hbs',
        abortOnFail: true
      },
      {
				type: 'modify',
        path: '../../src/components/index.ts',
        pattern: /(\n\n*)$/g,
        template: "\nexport * from './{{properCase name}}'\n",
        abortOnFail: true
			}
    ];

    if(data.styles) {
      actions = actions.concat([
        {
          type: 'add',
          path: '../../src/components/{{properCase name}}/styled.ts',
          skipIfExists: true,
          templateFile: 'templates/components/styled.hbs',
        }
      ]);
    }

    return actions

  }})
}

module.exports = componentPlop
