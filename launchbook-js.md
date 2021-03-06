Practice finding elements on the DOM using JavaScript.

## Learning Goals

* Find HTML elements
* Find HTML elements using `class` and `id` attributes
* Store JavaScript objects in variables


## Getting Started

```no-highlight
et get launchbook-js
cd launchbook-js
```

For this lesson, there are some fake ads along the right hand side of the page. Ad blocking extensions may detect these as actual ads and hide them, so it is recommended that you turn off ad blocking extensions while working on this lesson.

**Open the JavaScript console in Chrome so that you can follow along with the code. You can open the JavaScript console by navigating the menu bar to `View -> Developer -> JavaScript Console` or with the shortcut `cmd + option + j`.**

### Following Along

The start of this challenge provides examples - things for you to do on your own to practice the concept. You should try out each example and exercise in the browser console. Once you complete an exercise, add your code to the the `solutions.js` file. (This file is not actually run. The file is simply a place to record your answers).

### Find an Element by Type

JavaScript lets us use HTML class and id attributes to find elements that are in the DOM (on the page). The most basic way to find something with JavaScript is via the HTML element type (aka tag name).

**Example:** Find the status update form. (Paste this into the developer console and hit return.)

```javascript
document.getElementsByTagName('form')[0];
```

You should see this:
![form](https://s3.amazonaws.com/horizon-production/images/launchbook-js-1.png)

**Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.**

### Finding Elements by their ID

We can also find an element by its **id**.

Example: Find the left sidebar by its id.

```javascript
document.getElementById('sidebar-left');
```

**Exercise: Find the sidebar on the left by using its id.**

### Finding Elements by their Class

We can also find elements by their **class**.

Example: Find the 'Favorites' section of the sidebar by using its class.

```javascript
document.getElementsByClassName('favorites')[0];
```

**Exercise: Find the 'Pages' and 'Groups' sections of the sidebar by using their class.**

### Finding Child Elements

We can scope our queries to child elements by chaining functions.

Example: Find all of the sections of the sidebar.

```javascript
document.getElementById('sidebar-left').getElementsByTagName('div');
```

### Querying Multiple Elements

#### Finding All Matching Elements

Example: Find all of the posts on the page by using the `.post` class.

```javascript
document.getElementsByClassName('post');
```

**Exercise: Find all of the comments on the page.**

#### Finding Specific Matching Elements

Example: Find the first post in the feed.

```javascript
document.getElementsByClassName('post')[0];
```

**Exercise: Find the first comment on the page.**

Example: Find the last post in the feed.

```javascript
let posts = document.getElementsByClassName('post');
let lastPostIndex = posts.length - 1;
posts[lastPostIndex];
```

**Exercise: Find the last comment on the page.**

Example: Find the third post in the feed.

```javascript
document.getElementsByClassName('post')[2];
```

**Exercise: Find the fourth comment on the page.**

Note: Make sure you grab the fourth *comment* (Eric Kelly exclaiming "NEVARRRR!") rather than the fourth *block* of comments. You may need more than one line of code!

### Simple Hiding/Showing Elements

#### Hiding an Element

We can set the CSS properties of elements on the page via the `style` function.

Example: Hide the status update form.

```javascript
let statusUpdateForm = document.getElementsByClassName('status-update')[0];
statusUpdateForm.style.visibility = 'hidden';
```

**Exercise: Find one of the ads in the sidebar and hide them.**

#### Showing an Element

We can change the visibility back to what it was, initially.

Example: Show the status update form.

```javascript
let statusUpdateForm = document.getElementsByClassName('status-update')[0];
statusUpdateForm.style.visibility = 'visible';
```

**Exercise: Set the visibility on the ad that you hid in the previous exercise to make it visible again.**

### Modifying an Element's Attributes

We can use the `setAttribute` function to modify the value of an element's attribute.

Example: Change the placeholder of the status update form's `<textarea>`.

```javascript
let statusUpdate = document.getElementsByClassName('status-update')[0];
let textArea = statusUpdate.getElementsByTagName('textarea')[0];
textArea.setAttribute('placeholder', 'Hello World!');
```

**Exercise: Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.**

Here's an image source if you need one: `http://placebear.com/200/300`.

### Modifying an Element's Text

We can use the `innerHTML` property of an element to change the text content of that element.

Example: Change the title of our application.

```javascript
let titleArea = document.getElementsByClassName('title-area')[0];
let listElement = titleArea.getElementsByClassName('name')[0];
let link = listElement.getElementsByTagName('a')[0];
link.innerHTML = 'Launch Academy Facebook Clone';
```

**Exercise: Find Sam's post and change its text to something incredible.**

### Modifying an Element's Class

#### Adding a Class to an Element

Example: Add the `.active` class to the 'Events' link in the left favorites sidebar.

```javascript
let favorites = document.getElementsByClassName('favorites')[0];
let eventsLink = favorites.getElementsByTagName('li')[2];
eventsLink.className = eventsLink.className + ' active'
```

**Exercise: Find the first post and add the `.post-liked` class to it.**

#### Removing a Class

Example: Remove the `.active` class from the 'Events' link in the left
sidebar.

```javascript
let favorites = document.getElementsByClassName('favorites')[0];
let eventsLink = favorites.getElementsByTagName('li')[2];
eventsLink.classList.remove('active');
```

**Exercise: Find the second post and remove the `.post-liked` class.**
