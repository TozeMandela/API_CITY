"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _httpstatuscodes = require('http-status-codes');

const route = _express.Router.call(void 0, );

route.get('/', (_, res) => {
	res.status(_httpstatuscodes.StatusCodes.ACCEPTED).json({info: 'welcome in backend city'});
});

exports. default = route;