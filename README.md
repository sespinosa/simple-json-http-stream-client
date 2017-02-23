# simple-json-http-stream-client


## Install

```
npm install simple-json-http-stream-client
```

## Example

### Import!

```
import { streamParser, streamClient } from 'simple-json-http-stream-client'

```

or

```
import simpleStream from 'simple-json-http-stream-client'

```

or

```
var simpleStream = require('simple-json-http-stream-client')
```

### Usage


With the http client (this uses [request](https://github.com/request/request) as the http client)

```

myStream = simpleStream.streamClient([url|options], [callback])


myStream.on('data', (data) => {  // Use this when you want to get the buffer
	// Do something with the buffer (the 'data' variable in this case).
})

myStream.on('object', (obj) => {
	// Do something with obj (this is the json version of the data).
})

```

## Using the parser directly

If you need more control, you can use the parser directly and do all sort of fancy stuff with request.

```
import { streamParser } from 'simple-json-http-stream-client'

import request from 'request'

const myParser = streamParser([separator]) // Here you can define a custom separator, by default is '\r\n'

request([your url or your options object], [your optional callback]).pipe(myParser)

myParser.on('data', (data) => {  // Use this when you want to get the buffer
	// Do something with the buffer (the 'data' variable in this case).
})

myParser.on('object', (obj) => {
	// Do something with obj (this is the json version of the data).
})

```


## But why?

When you are getting JSON in a HTTP stream you have 2 problems:

1.- The JSON needs to be separated in objects.
2.- When a object is over 64KB get divided on multiple chunks (this can vary depending on the server).

So this little library builds the complete JSON object and generates a single event for that object (no multiple events for the chunks).



### Motivation

Theres not much resources on this topic so i build a simple solution for a simple problem.

This is a work on progress.