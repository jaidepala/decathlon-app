// Install express server
const express = require('express');
const path = require('path');
var port = process.env.PORT || 8000;
const app = express();
const appName = 'decathlon-app';

// Serve only the static files form the dist directory
app.use(express.static('./dist/' + appName));

app.get('/*', function(req,res) {
    
	res.sendFile(path.join(__dirname,'/dist/'+ appName +'/index.html'));
});

// Start the app by listening on the default Heroku port
console.log('Server listening to ' + port);
app.listen(port);