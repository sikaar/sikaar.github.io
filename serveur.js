var http = require('http');
var url = require('url');
var querystring = require('querystring');
var soap = require('soap');
var urlwsdl = 'http://www.webservicex.net/geoipservice.asmx?WSDL';
var location =''; 
var n = 0;


var server = http.createServer(function(req, res) {
    n=n+1;
            console.log(n + 'connections');    
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('ip' in params) {

		var args = {IPAddress: params['ip']};

		  soap.createClient(urlwsdl, function(err, client) {
            console.log('ok here');
		  client.GetGeoIP(args, function(err, result) {  
		    console.log(result);
		    var str = result.GetGeoIPResult.CountryCode;
		    location=str;
            console.log(err);
		      });

		  });


        res.write('Vous etes a ' + location );
    }
    else {
        res.write('Vous n avez pas d IP ?');
    }
    res.end();
});
server.listen(8080);