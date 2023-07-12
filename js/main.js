const burgerBtn = document.querySelector(".burger-btn");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav__item");

const toggleNav = () => {
	nav.classList.toggle("nav--active");

	navItems.forEach((element) => {
		element.addEventListener("click", () => {
			nav.classList.remove("nav--active");
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
        navItems.forEach(item =>{
            item.classList.remove("nav-items-animation");
        })
	});
});

burgerBtn.addEventListener("click", toggleNav);
