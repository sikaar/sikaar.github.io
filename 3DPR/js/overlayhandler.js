function on(sometext) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("text").innerHTML= sometext;
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

on("<b>Welcome to the XRLAB 3DPR</b> <br/> our 3D presentation Room </br></br> 1) To navigate </br> you can move the view by dragging the the mouse , move in the room by pressing  the arrows keys , or click on a poster to be teleported in front of it </br></br> 2) The room includes a simple slideshow on one of the Wall, just click on the next and previous red arrows to navigate the slide deck </br></br> <button class='button'> Click Here to Get New Insights </button>" );