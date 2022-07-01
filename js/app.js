/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("[data-nav]");
const nav = document.querySelector("#navbar__list");

/** End Global Variables
 *
 */

/** Define Functions
 *
 */

// build the nav
const buildNav = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < sections.length; i++) {
    const item = document.createElement("li");
    item.classList = "menu__link";
    item.innerText = sections[i].querySelector("h2").innerText;
    // add an evnet istener to control scrolling after the button being clicked
    item.addEventListener("click", (evt) => {
      evt.preventDefault();
      const sectionId = `section${i + 1}`;
      document.querySelector(`#${sectionId}`).scrollIntoView({
        behavior: "smooth",
      });
    });
    fragment.appendChild(item);
  }
  nav.append(fragment);
};

// Add class 'active' to section when near top of viewport
const activate = () => {
  for (let k = 0; k < sections.length; k++) {
    const title = document.querySelectorAll("h2")[k];
    let elem = title.getBoundingClientRect();
    if (elem.top < 350 && elem.top > 30) {
      nav.children[k].classList.add("menu__link__active");
      sections[k].classList.add("your-active-class");
    } else {
      nav.children[k].classList.remove("menu__link__active");
      sections[k].classList.remove("your-active-class");
    }
  }
};

/** End Define Functions
 *
 */

/** Add Event Listeners
 *
 */

// Build menu
document.addEventListener("DOMContentLoaded", buildNav);

// Set sections as active
document.addEventListener("scroll", activate);

/** End Add Event Listeners
 *
 */
