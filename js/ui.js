//File name: Main Javascript
//Description: Contains the Javascript code to run in the background
//Date Created: 8/3/2020
//Created by: Nurra Naimi

document.addEventListener('DOMContentLoaded', function() {
// opens nav menu, anything with the class "side-menu" in our .html pages
//Coming from the right edge
const menus = document.querySelectorAll('.side-menu');
M.Sidenav.init(menus, {edge: 'right'});
// opens add recipe form, anything with the class "side-form" in our .html pages
const forms = document.querySelectorAll('.side-form');
M.Sidenav.init(forms, {edge: 'left'});
});
