'use strict';

const child_process = require('child_process');

module.exports = class Shell {
  constructor(config) {
    this.command = config.command;
  }

  action(arg) {
    if(arg === 'off') { return; }
    child_process.exec(this.command, () => {});
  }

  // close(done)

  static metadata(builder) {
    builder.usage.driver();
    builder.action('action', builder.enum('off', 'on'));
    builder.config('command', 'string');
  }
};
