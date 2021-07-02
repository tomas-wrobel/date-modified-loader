module.exports = function() {
	return `module.exports = new Date(${+require("fs").statSync(this.resourcePath).mtime});`;
}