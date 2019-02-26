'use strict';

const express = require('express'),
	app = express();

app.set('view engine', 'pug');
app.set('views', 'Tag_view');

app.use(express.static('resources'));

app.get('/',function(req, res) {
	let Page;
	const queryPage = req.query.Page;
	if (queryPage !== undefined) {
		Page = queryPage;
	}
	else {
		Page = 0;
	}
	res.render('Tag_Rules_Color_Pages',{Page});
});
const server = app.listen(4300, function() {
	console.log(`Server started on port ${server.address().port}`);
});