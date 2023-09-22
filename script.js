const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});


window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "https://i.imgur.com/OFLlzkv.png";
    } else {
        document.querySelector('.search-icon img').src = "https://i.imgur.com/9Io4ugu.png";
    }
}
changeSearchIcon();


let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});


function handleGetFormData(){
    let name = document.getElementById("name").value
    let city = document.getElementById("city").value
    let email = document.getElementById("email").value
    let zipCode = document.getElementById("zip-code").value
    let status = document.getElementById("status").checked

    return { name, city, email, zipCode,status}
}

// Zip Code
function isNumber(str) {
  return !isNaN(str);
}

// Check Code
function checkboxIsChecked() {
  const statusCheckbox = document.getElementById("status");
  return statusCheckbox.checked;
}


//  Validasi Semua Inputan
function validateFormData(formData) {
  if ( formData &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked() ) {
      return true;
    }
       return false;
}

// Function Submit

function submit(){

  const formData = handleGetFormData();
  const warningDiv = document.getElementById('warning');

  if (!validateFormData(formData)) {
      warningDiv.textContent = 'Periksa form anda sekali lagi';
  } else {
      warningDiv.textContent = '';
  }
 
}

const form = document.getElementById('myForm');
form.addEventListener('submit',submit)