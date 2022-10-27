import { mobilBurgerMenu } from '../default/module-lc.js';

mobilBurgerMenu('.header-bg');

const btn = document.querySelector('.btn-question');
const btn_send_question = document.querySelector('#send-question');
btn.addEventListener('click', (e) => {
	onModal();

})
btn_send_question.addEventListener('click', (e) => {
	$('#exampleModal').arcticmodal('close');
	e.preventDefault()
	onModal2();
	setTimeout(() => {
		const form = document.querySelector('.modal-question-form');
		form.submit();
		$('#exampleModal2').arcticmodal('close');
	}, 1500)
})

function onModal() {
	$('#exampleModal').arcticmodal({
		overlay: {
			css: {
				backgroundColor: 'rgba(16, 78, 171, 0.4)',
			}
		}
	});
}
function onModal2() {
	$('#exampleModal2').arcticmodal({
		overlay: {
			css: {
				backgroundColor: 'rgba(16, 78, 171, 0.4)',
			}
		}
	});
}

const btnHead = document.querySelector('.notification button');
btnHead.addEventListener('click', () => {
	btnHead.parentElement.classList.remove('active');
});