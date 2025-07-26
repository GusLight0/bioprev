function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  var profile = document.querySelector('#profile img')

  if(html.classList.contains('light')) {
    profile.src = "./assets/logo-eu.png"
  } else {
    profile.src = "./assets/branca-eu.png"
  }
}