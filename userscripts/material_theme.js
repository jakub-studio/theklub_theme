// ==UserScript==
// @name         The Klub - Material Theme
// @namespace    https://koolkidsklub.org/
// @version      0.1
// @description  Manual override to Klub CSS to give a material-like theme
// @author       jakuski
// @match        https://koolkidsklub.org/*
// @grant        GM_addStyle
// ==/UserScript==
function addStyleSheet(style){
  var getHead = document.getElementsByTagName("HEAD")[0];
  var cssNode = window.document.createElement( 'style' );
  var elementStyle= getHead.appendChild(cssNode)
  elementStyle.innerHTML = style;
  return elementStyle;
}


addStyleSheet(`@import url("https://cdn.rawgit.com/jakuski/726eb75963232e0bf0e887774fa39d56/raw/3c465b301c859c2112b9b2c5750663b946158cf5/klub_metro_theme.css");`);
