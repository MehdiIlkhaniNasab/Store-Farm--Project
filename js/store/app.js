let darkMmodeLabel = _querySelector('.dark-mode__label')





// dark mode func
function darkModeFun() {
  let darkModeInnput = _querySelector('.dark-mode__input')
  let darkModeSun = _querySelector('.dark-mode__sun')
  let darkModeMoon = _querySelector('.dark-mode__moon')
  let isDark = darkModeInnput.checked

  if (isDark) {
    document.body.classList.add('dark')
    darkModeSun.classList.remove('hidden-element')
    darkModeMoon.classList.add('hidden-element')
  } else {
    document.body.classList.remove('dark')
    darkModeSun.classList.add('hidden-element')
    darkModeMoon.classList.remove('hidden-element')
  }
}


// slider 
let swiperSupporters = new Swiper(".supporters__slider", {
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
});
//end



// if user is login convert register nav link to dashboard link
function convertRegisterToDashboard(isLogin) {
  let navItemRegister = _id('nav-item-register')
  let navItemDashboard = _id('nav-item-dashboard')
  if (isLogin) {
    navItemDashboard.classList.replace('d-none', 'd-block')
    navItemRegister.classList.add('d-none')
  } else {
    navItemDashboard.classList.replace('d-block', 'd-none')
    navItemRegister.classList.remove('d-none')
  }
}




// funtion reset all form of page when page load
function resetAllForm() {
  let forms = _querySelectorAll('form')
  forms.forEach(function (form) {
    form.reset()
  })
}



// typewritter
let copyright = document.getElementById('copyright');

let typewriter = new Typewriter(copyright, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString(' همه حقوق مادی معنوی این سایت متعلق به <strong class="orange-text">مهدی ایلخانی نسب </strong> میباشید</p> ')
  .pauseFor(1000)
  .start();
// end typewritter


// get item from localstorge
function getItemLocalStorage(nameValue) {
  let getItem = localStorage.getItem(nameValue)
  let listAdminLocalStorage = JSON.parse(getItem)
  return listAdminLocalStorage;
}

// set item on localstorage
function setItemLocalStorage(nameValue, value) {
  localStorage.setItem(nameValue, JSON.stringify(value))
}

// remove item on localstorage
function removeItemLocalStorage(nameValue) {
  localStorage.removeItem(nameValue)
}



// get element by Id, class, querySelector
function _id(elemId) {
  return document.getElementById(elemId)
}

function _class(elemClass) {
  return document.getElementsByClassName(elemClass)
}

function _querySelector(elemSelector) {
  return document.querySelector(elemSelector)
}

function _querySelectorAll(elemSelector) {
  return document.querySelectorAll(elemSelector)
}



// EVENTS
darkMmodeLabel.addEventListener('click', darkModeFun)



