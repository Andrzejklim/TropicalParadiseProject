const burgerBtn = document.querySelector(".burger-btn");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

const toggleNav = () => {
	nav.classList.toggle("nav--active");
	document.body.classList.toggle("hide-scroll");
	navBtnBars.classList.remove("black-bars-color");

	navItems.forEach((element) => {
		element.addEventListener("click", () => {
			nav.classList.remove("nav--active");
			document.body.classList.remove("hide-scroll");
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0.0;

	navItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

navItems.forEach((item) => {
	item.addEventListener("click", () => {
		navItems.forEach((item) => {
			item.classList.remove("nav-items-animation");
		});
	});
});

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		// console.log(currentSection);
		// console.log(section.offsetTop);
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add("black-bars-color");
		} else if (
			!section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 30
		) {
			navBtnBars.classList.remove("black-bars-color");
		}
	});
};
window.addEventListener("scroll", handleObserver);

const handleCurrentYear = () => {
	const data = new Date();
	const year = data.getFullYear();

	footerYear.textContent = year + " ";
};
handleCurrentYear();

burgerBtn.addEventListener("click", toggleNav);
