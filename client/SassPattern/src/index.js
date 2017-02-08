require('./sass/main.sass')

window.addEventListener('scroll', function () {
  let bodyScrollTop = document.body.scrollTop
  let elHeader = document.getElementById('Header')
  let elLogo = document.getElementById('logo')
  let menuListLink = document.querySelectorAll('.Menulist > li > a')

  if ( bodyScrollTop > 0 ) {
    elHeader.style.backgroundColor = "#fff"
    for (i=0; i<menuListLink.length; i++) {
      menuListLink[i].style.color = "#444"
    }
    elLogo.style.backgroundImage = "url('client/SassPattern/src/img/logo-dark.png')"
    elHeader.style.transition = "0.3s"
  } else {
    elHeader.style.backgroundColor = "transparent"
    elLogo.style.backgroundImage = "url('client/SassPattern/src/img/logo.png')"
    for (i=0; i<menuListLink.length; i++) {
      menuListLink[i].style.color = "#fff"
    }
  }
})


if(module.hot) {
    module.hot.accept();
}
