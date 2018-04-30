setState(data, handler) {
	if (JSON.stringify(data) != JSON.stringify(this.state)) {
		this.state = data

		handler({
			object: this.state
		})
	}
}