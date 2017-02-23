import { Transform } from 'stream'



class streamParser extends Transform {
	
	constructor(END) {
		super()
		this.buffer = ''
		this.END = END || '\r\n'
	}

	_flush() {
		this.buffer = ''
	}

	itsFinal(chunk) {
		return (chunk.substr(chunk.length - this.END.length).indexOf(this.END)) > -1
	}

	_transform(chunk, encoding, callback) {
		this.buffer += chunk.toString('utf8')
		if(this.itsFinal(this.buffer)) {
			this.push(this.buffer.trim())
			this.emit('object', JSON.parse(this.buffer.trim()))
			this.buffer = ''
		}
		callback()
	}
}

export default streamParser