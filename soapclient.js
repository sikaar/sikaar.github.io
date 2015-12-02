  //simple soap client
  var soap = require('soap');
  var urlwsdl = 'http://www.webservicex.net/geoipservice.asmx?WSDL';
  var args = {IPAddress: '72.229.28.185'};
  soap.createClient(urlwsdl, function(err, client) {
  client.GetGeoIP(args, function(err, result) {  
    var str = result.GetGeoIPResult.CountryName;
    console.log('this IP is in ' + str);
      });

  });