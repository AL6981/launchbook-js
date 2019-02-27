// Exercise: Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')

// Exercise: Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sideBar = document.getElementById('sidebar-left');

// Exercise: Set the text of the 'Favorites' `h5` to say "Least Favs".
sideBar.getElementsByTagName('h5')[0].innerText = "Least Favs"

// Exercise: Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('pages')
document.getElementsByClassName('groups')

// Exercise: Find one of the ads in the sidebar and hide them.
let ad1Hidden = document.getElementsByClassName('ads')[0];
ad1Hidden.style.visibility = 'hidden';

// Exercise: Set the visibility on the ad that you hid in the previous exercise to make it visible again.
ad1Hidden = document.getElementsByClassName('ads')[0];
ad1Hidden.style.visibility = 'visible';

// Exercise: Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
let adSlot = document.getElementsByClassName('ad-slot')[0];
let imgSrc = adSlot.getElementsByTagName('img')[0];
imgSrc.setAttribute('src', 'http://placebear.com/200/300');

// Exercise: Find Sam's post and change its text to something incredible.
let posts = document.getElementsByClassName('posts')[0]
posts.getElementsByTagName('div')[9].getElementsByTagName('p')[0].innerText = "Something Incredible"

// Exercise: Find the first post and add the `.post-liked` class to it, and watch it turn blue.
document.getElementsByClassName('posts')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[0].className += 'post-liked'

// Exercise: Find the second post and add the `.post-shared` class to the `li` containing the text Shared, and watch it turn red.
document.getElementsByClassName('posts')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[7].className += 'post-shared'
