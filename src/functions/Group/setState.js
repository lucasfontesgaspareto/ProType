setState(data) {
	if (JSON.stringify(data) != JSON.stringify(this.state)) {
		this.state = data

		this.changeHandler(this.state)
	}
}
