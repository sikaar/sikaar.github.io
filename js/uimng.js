const btn = document.getElementById('restart');
const leftdoor=document.getElementById('leftdoor');
const rightdoor=document.getElementById('rightdoor');
btn.addEventListener('click', () => {

 leftdoor.emit("enter");
 rightdoor.emit("enter"); 
