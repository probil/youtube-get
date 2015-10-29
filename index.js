'use strict';

var
    request     = require('nets'),
    extend      = require('extend'),
    queryString = require('querystring');

var constructYoutubeApiUrl = function (key, endpoint, params) {
    var baseUrl = ['https://www.googleapis.com/youtube/v3', endpoint];
    if (key)
        params.key = key;
    return [baseUrl.join('/'), queryString.stringify(params)].join('?')
};

module.exports = function (params) {
    var youtubeApiKey   = params['api_key']         || '';
    var request_options = params['request_options'] || {};

    return function (endpoint, params, cb) {
        var options = {
            url    : constructYoutubeApiUrl(youtubeApiKey, endpoint, params),
            headers: {
                'Content-Type': 'application/json',
                'Accept'      : 'application/json'
            }
        };
        request(extend(true,{},request_options,options),
            function (error, response, body) {
            if (!error && response.statusCode == 200) {
                cb(null, JSON.parse(body));
            } else {
                cb(error)
            }
        });
    }
};