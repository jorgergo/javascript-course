'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'Height/Width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation without event delegation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Page navigation with event delegation

// 1. Add event listener to common parent element.
// 2. Determine what element originated the event.

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/*
const h1 = document.querySelector('h1');

// Going downwards: Child - Children

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going Upwards: Parents

console.log(h1.parentNode);
console.log(h1.parentElement);
console.log(h1.closest('.header'));
h1.closest('.header').style.background = 'var(--gradient-secondary)'

// Going Sideways: Siblings
// We can only access direct siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// If we need all the siblings, we can go to the parent element, and select all it's children
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)'
})
/*
/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////// Selecting elements /////////////////////
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
console.log(header);

const sections = document.querySelectorAll('.section');
console.log(sections);

const firstSection = document.getElementById('section--1');
console.log(firstSection);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

///////////////////// Creating and inserting elements /////////////////////

// .insertAdjacentHTML //

// firstSection.insertAdjacentHTML(
//   'beforebegin',
//   `
// <h1>
// When
//   < !--Green highlight effect-- >
// <span class="highlight">banking</span>
// meets < br />
//   <span class="highlight">minimalist</span>
// </h1 >
// `
// );

const message = document.createElement('div');

message.classList.add('cookie-message');

// message.textContent = 'We use cookies for improved functionality and analytics';

message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got It!</button>`;

// header.prepend(message.cloneNode(true)); // Inserts the element as the first child of the header, and sisnce the element already exists, it passes a clone so it can be inserted.

header.append(message); // Inserts the element as the last child of the header

// header.before(message); // Inserts the element as a sibling, in the parent of the header. And before the header.

// header.after(message); // Inserts the element as a sibling, in the parent of the header. And after the header.


///////////////////// Deleting elements /////////////////////

document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  // message.parentElement.removeChild(message);
  message.remove();
})


///////////////////// Styles /////////////////////

// Inline Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// Computed Styles (The ones that are appearing on the page (DOM))
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseInt(getComputedStyle(message).height, 10) + 30 + 'px';

// CSS Styles

document.documentElement.style.setProperty('--color-primary', 'lightgreen');

// Attributes

// Standard
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo'; // change attribute values

// Non-Standard
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist')
console.log(logo.getAttribute('company'));

// GETTING THE VALUES OF ATTRIBUTES (Different ways do different things)
console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('exampleclass');
logo.classList.remove('exampleclass');
logo.classList.toggle('exampleclass');
logo.classList.contains('exampleclass');

*/
