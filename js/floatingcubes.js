function addCube() {
  var pts=[];
  pts = randomPoint();
  console.log('One point');
  //console.log(pts);
    var x = pts.x;
    var y = pts.y + Math.random();
    var z = pts.z;
   var pos = x.toFixed(2) + ' ' + y.toFixed(2) + ' ' + z.toFixed(2);
  console.log(pos);
return pos;
}


function randomPoint()
{
    let xt = Math.random() - 0.5;
    let yt = Math.random() - 0.5;
  let zt = Math.random() - 0.5;
    var k = Math.sqrt(xt*xt + yt*yt + zt*zt);
    while (k < 0.2 || k > 0.3)
    {
        xt = Math.random() - 0.5;
        yt = Math.random() - 0.5;
        zt = Math.random() - 0.5;
        k = Math.sqrt(xt*xt + yt*yt + zt*zt);
    }
    return {'x':xt/k, 'y':yt/k, 'z':zt/k};
}

/*function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}*/
function getRandomColor() {
  var cols = ['#1E90FF',
'#6495ED',
'#483D8B',
'#4169E1',
'#0000FF',
'#0000CD',
'#00008B',
'#000080',
'#191970',
'#1434A4',
'#4682B4'
];
  var i = Math.floor(Math.random() * cols.length-1)
  return cols[i];
}

function getRandomTexture() {
  var i = Math.floor(Math.random() * 10);
  return "'#Texture" + i + "'";
}
