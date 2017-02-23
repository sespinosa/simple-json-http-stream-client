import streamParser from './lib/parser'

import request from 'request'


const streamClient = (options, callback) => {
	const parser = new streamParser

	request(options, callback).pipe(parser)

	return parser
}

export {
	streamParser,
	streamClient
}