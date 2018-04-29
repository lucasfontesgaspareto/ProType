mount() {
	const args = [...arguments]
	for (var i = 0; i < args.length; i++) {
		this.views.push(args[i][1])
		this.viewsName.push(args[i][0])
	}
	for (var i = 0; i < args.length; i++) {
		this.controllers.push(new args[i](this.views[i], this.viewsName, this.views))
	}
}