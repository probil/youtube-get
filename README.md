youtube-get
================

Lightweight youtube data api v3 wrapper with proxy support.

## Description

This module aims to provide a very light wrapper around the youtube data api
v3. It doesn't try to provide a bunch of methods for accessing different
parts of the api, instead just taking care of sending requests to the api
based on an endpoint and params and returning you the result

## Install
```sh
npm install probil/youtube-get
```

## Basic Usage

```js
var youtubeGet = require('youtube-get')

var myApiKey = 'something'
var youtube = youtubeGet({'api_key':myApiKey})
//without api key is ok to for some requests
//var youtube = youtubeGet()

youtube('channels', {
    'part': 'id, snippet'
}, function (err, data) {
    //do something with the data
})
```

## Custom request options

#### Proxy
```js
//dependencies
var youtubeGet = require('youtube-get');
var HttpsProxyAgent = require('https-proxy-agent');

// HTTP/HTTPS proxy to connect to
var proxy = process.env.http_proxy || 'http://168.63.76.32:3128';

//YoutubeGet Instance
var youtube = youtubeGet({
    'api_key': 'XXXXXXXXXXXX',
    'request_options':{
        agent: new HttpsProxyAgent(proxy)
    }
})
```

#### Timeout
```js
//YoutubeGet Instance
var youtube = youtubeGet({
    'api_key': 'XXXXXXXXXXXX',
    'request_options':{
        timeout: 20000 //Max request time -> 20s
    }
})
```