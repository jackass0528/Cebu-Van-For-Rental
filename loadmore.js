
let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes =  [...document.querySelectorAll('.container .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
boxes[i].style.display = 'inline-block';
   }
   currentItem += 3;
if(currentItem >= boxes.length){
loadMoreBtn.style.display = 'none';

}
}

/*hide and show*/
const button = 
document.getElementById('toggleButton');
const contentContainer = document.getElementById('contentContainer');

button.addEventListener('click' , function() {
   if (contentContainer.style.display === "none")
   {
      contentContainer.style.display = "block";
   } else {
      contentContainer.style.display = "none";
   }
});


