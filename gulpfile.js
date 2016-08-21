var elixir = require('laravel-elixir');

elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'test/assets';

require('laravel-elixir-vueify');

elixir(function(mix) {
    mix.browserify('main.js');
});
