function mobilBurgerMenu(head) {
	const burger = document.querySelector('.burger');
	const header = document.querySelector(head);
	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		header.classList.toggle('active');
		document.body.classList.toggle('lock');
	})
}
export { mobilBurgerMenu } ;