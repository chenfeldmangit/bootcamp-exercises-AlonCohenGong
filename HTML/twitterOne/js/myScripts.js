
function navItemHandler(element) {
 //console.log('navItemHandler');
 var newsDiv = document.querySelector(".news-feed-wrapper");
 var profileDiv = document.querySelector(".profile-wrapper");
 if(element == 'profile')
 {
 newsDiv.style.display = 'none';
 profileDiv.style.display = 'block';
 }
 if(element == 'home')
 {
  profileDiv.style.display = 'none';
  newsDiv.style.display = 'block'; 
 }

}

function editProfileHandler() {
    console.log('navItemHandler');
    var modal = document.querySelector("#modal-back");
    modal.className = 'modal-back open';
   
}

function editProfileCloseHandler() {
    console.log('navItemHandler');
    var modal = document.querySelector("#modal-back");
    modal.className = 'modal-back close';
   
}