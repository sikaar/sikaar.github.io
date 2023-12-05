AFRAME.registerComponent('containerent', {
  update: function () {
    let container = this.el;
for (var i=0; i<50; i++)
{
if (i<30){this.el.innerHTML += "<a-entity gltf-model='#blue' position='" + addCube()+ "' ></a-entity>"};
//console.log("adding one");
//console.log("<a-sphere radius=.1 color=" + getRandomColor() +" position=" + addCube() + "></a-sphere>");
this.el.innerHTML += "<a-plane scale='.2 .2 .2' src=" + getRandomTexture() +" color=" + getRandomColor() +" position='" + addCube() + "' look-at='#player'> <a-entity text='width: 4; color: #ffffff; value: BLEU; align: center' position ='0 0 .1' background='color: #ffffff'></a-entity></a-plane>";
}
  }
});
