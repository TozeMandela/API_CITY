"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

require('./shared/index');

var _indexroutes = require('./Routes/index.routes'); var _indexroutes2 = _interopRequireDefault(_indexroutes);
var _cityroutes = require('./Routes/city.routes'); var _cityroutes2 = _interopRequireDefault(_cityroutes);

class App {
	

	constructor() {
		this.app = _express2.default.call(void 0, );
		this.middleware();
		this.routes();
	}

	middleware () {
		this.app.use(_express2.default.json());
		this.app.use(_express2.default.urlencoded({ extended: false }));
	}

	routes() {
		this.app.use(_indexroutes2.default);
		this.app.use('/city', _cityroutes2.default);

	}
}
const { app } = new App();

exports.app = app;