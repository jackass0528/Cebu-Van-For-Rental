
let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 2;

loadMoreBtn.onclick = () =>{
   let boxes =  [...document.querySelectorAll('.container .box-container .box')];
   for (var i = currentItem; i < currentItem + 2; i++){
boxes[i].style.display = 'inline-block';
   }
   currentItem += 2;
if(currentItem >= boxes.length){
loadMoreBtn.style.display = 'none';

}
}




