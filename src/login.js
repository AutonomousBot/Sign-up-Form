import './style.css'
import treeLogo from './assets/treeLogo.png'

function appendTreeImg() {
  const logoTree = document.getElementById("logo-title");
  let logo = document.createElement("img")
  logo.id = "logo"
  logo.src = treeLogo
  logo.alt = "Tree logo."
  const firstChild = logoTree.children[0];
  logoTree.insertBefore(logo, firstChild)
}

appendTreeImg();