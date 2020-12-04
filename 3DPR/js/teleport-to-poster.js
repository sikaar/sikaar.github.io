
    var Y=document.querySelectorAll('.poster');
    Array.from(Y).forEach(node => {
    node.addEventListener('click', function () {
      console.log(node);
      
      var X=document.querySelector('#camera');
      
      
      var nodeposition = new THREE.Vector3();
      nodeposition.setFromMatrixPosition(node.object3D.matrixWorld);
      
      console.log(nodeposition.x + ' ' + nodeposition.y + ' ' + nodeposition.z);
      console.log( nodeposition.x + " " + 0 + " " + 0);
      X.setAttribute('position', nodeposition.x + " " + 0 + " " + 0 );

      var angle=0;
      if(nodeposition.z > -4)angle=180;
      let controls = document.querySelector('a-camera').components['look-controls'];
      controls.pitchObject.rotation.x = 0;
      controls.yawObject.rotation.y = degrees_to_radians(angle);
      });

    });
          
function degrees_to_radians(degrees)
        {
          var pi = Math.PI;
          return degrees * (pi/180);
        }