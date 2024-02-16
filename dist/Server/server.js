"use strict";require('dotenv/config');
var _app = require('../app');

const PORT = 3330;

_app.app.listen(process.env.PORT || PORT, () => {
	console.log('====================================');
	console.log('server running in port ', PORT);
	console.log('====================================');
});