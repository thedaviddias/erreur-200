const episodePlop = plop => {
  plop.setGenerator('episodeEntry', {
    description: 'Episode',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the title of the episode:',
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
        type: 'input',
        name: 'episodeNumber',
        message: 'Enter the episode number:',
        validate: function (input) {
          var done = this.async();
          setTimeout(function () {
            if (input === '') {
              done('You need to provide an episode number');
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
        path: '../../content/episodes/{{episodeNumber}}-{{kebabCase name}}.md',
        skipIfExists: true,
        templateFile: 'templates/episode/episode.hbs',
        abortOnFail: true
      },
    ];

    return actions

  }})
}

module.exports = episodePlop
