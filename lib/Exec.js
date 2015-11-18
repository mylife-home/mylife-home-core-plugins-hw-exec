'use strict';

const child_process = require('child_process');

module.exports = class Exec {
  constructor(config) {
    this.bin = config.bin;
    this.args = [];
    for(let i = 0; i< 16; ++i) {
      const name = 'arg' + ('00' + i).slice(-2);
      const value = config[name];
      if(typeof value === 'string' && value !== '') {
        this.args.push(value);
      }
    }
  }

  action(arg) {
    if(arg === 'off') { return; }
    child_process.spawn(this.bin, this.args, () => {});
  }

  // close(done)

  static metadata(builder) {
    builder.usage.driver();
    builder.action('action', builder.enum('off', 'on'));
    builder.config('bin', 'string');
    builder.config('arg00', 'string');
    builder.config('arg01', 'string');
    builder.config('arg02', 'string');
    builder.config('arg03', 'string');
    builder.config('arg04', 'string');
    builder.config('arg05', 'string');
    builder.config('arg06', 'string');
    builder.config('arg07', 'string');
    builder.config('arg08', 'string');
    builder.config('arg09', 'string');
    builder.config('arg10', 'string');
    builder.config('arg11', 'string');
    builder.config('arg12', 'string');
    builder.config('arg13', 'string');
    builder.config('arg14', 'string');
    builder.config('arg15', 'string');
  }
};
