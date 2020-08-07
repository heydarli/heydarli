const fs = require('fs');
fs.writeFileSync('README.md', `last generated on: ${new Date().toUTCString()}`);