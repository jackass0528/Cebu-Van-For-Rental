
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

// form js 
function sendEmail(){
   Email.send({
      SecureToken: "08d08125-db06-40f5-83d6-1c182cf73011",
      To : 'naldzaguirre@gamil.com',
      From : document.getElementById("email").value,
      Subject : "New Contact Form Enquiry",
      Body : "Name: " + document.getElementById("name").value 
      + "<br> Email" + document.getElementById("email").value
      + "<br> Phone no:" + document.getElementById("phone").value
      + "<br> Message" + document.getElementById("message").value

  }).then(
    message => alert("Message sent succesfully")
  );

}