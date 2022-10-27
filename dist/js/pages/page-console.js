const select = document.querySelector(".select");
openCreateSet('.open-set');
closeCreateSet('.close-set');

function addOpenDropDownMenu() {
	
}
openMobileDropDown('#mobil1');
openMobileDropDown('#mobil2');
function openMobileDropDown(item) {
	let items = document.querySelector(item);
	items.addEventListener('click',() =>{
		items.classList.toggle('active');
	})
}
function addClickItem() {
	$('.select').on('click', () => {
		if ($('.select').hasClass('active')) {
			$('.select').removeClass('active');
		} else {
			$('.select').addClass('active');
		}
	});
	$(document).mouseup(function (e) {
		if (
			!$('.select').is(e.target) // если клик был не по нашему блоку
			&& $('.select').has(e.target).length === 0 &&// и не по его дочерним элементам
			!$('.select-drop').is(e.target) // если клик был не по нашему блоку
			&& $('.select-drop').has(e.target).length === 0  // и не по его дочерним элементам
		) {
			$('.select').removeClass('active');
		}
	});
}

function addClickItem2() {
	$(".header-menu > div").on('click', () => {
		if ($(".header-menu > div").hasClass('active')) {
			$(".header-menu > div").removeClass('active');
		} else {
			$(".header-menu > div").addClass('active');
		}
	});
	$(document).mouseup(function (e) {
		if (
			!$(".header-menu > div").is(e.target) // если клик был не по нашему блоку
			&& $(".header-menu > div").has(e.target).length === 0 &&// и не по его дочерним элементам
			!$('.log_out').is(e.target) // если клик был не по нашему блоку
			&& $('.log_out').has(e.target).length === 0  // и не по его дочерним элементам
		) {
			$(".header-menu > div").removeClass('active');
		}
	});
}
function addClickItem3() {
	$(".btn-table-settings").on('click', () => {
		if ($(".btn-table-settings").hasClass('active')) {
			$(".btn-table-settings").removeClass('active');
		} else {
			$(".btn-table-settings").addClass('active');
		}
	});
	$(document).mouseup(function (e) {
		if (
			!$(".btn-table-settings").is(e.target) // если клик был не по нашему блоку
			&& $(".btn-table-settings").has(e.target).length === 0 &&// и не по его дочерним элементам
			!$('.drop-settings').is(e.target) // если клик был не по нашему блоку
			&& $('.drop-settings').has(e.target).length === 0  // и не по его дочерним элементам
		) {
			$(".btn-table-settings").removeClass('active');
		}
	});
}
if(window.outerWidth > 768) {
	addClickItem();
	addClickItem2();
	addClickItem3();
	bindTabs('.tab-desktop','.tab-nav','.table-wrapper');
} else {
	openSettingTableBg2();
	openSettingTableBg();
	addClickItemMob();
	bindTabs('body','.mob-menu-item','.console-container');
	bindTabsMob('.tab__mob','.nav-tab__mob','.container-mob', ".open-drop-tab__mob");
}
function addClickItemMob() {
	$('.select').on('click', () => {
		if ($('.select').hasClass('active')) {
			$('.select').removeClass('active');
			$('.console-container.active').removeClass('p-bg');
		} else {
			$('.select').addClass('active');
			$('.console-container.active').addClass('p-bg');
		}
	});
	$(document).mouseup(function (e) {
		if (
			!$('.select').is(e.target) // если клик был не по нашему блоку
			&& $('.select').has(e.target).length === 0 &&// и не по его дочерним элементам
			!$('.select-drop').is(e.target) // если клик был не по нашему блоку
			&& $('.select-drop').has(e.target).length === 0  // и не по его дочерним элементам
		) {
			$('.select-drop').removeClass('active');
			$('.select').removeClass('active');
			$('.console-container.active').removeClass('p-bg');
		}
	});
}
function openSettingTableBg() {
	$(".settings__mob-btn").on('click', () => {
		if ($(".settings__mob-btn").hasClass('active')) {
			$(".settings__mob-btn").removeClass('active');
			$('.container-mob').removeClass('p-bg');
		} else {
			$(".settings__mob-btn").addClass('active');
			$('.container-mob.active').addClass('p-bg');
		}
	});
	$(document).mouseup(function (e) {
		if (
			!$('.drop-settings').is(e.target) // если клик был не по нашему блоку
			&& $('.drop-settings').has(e.target).length === 0 &&// и не по его дочерним элементам
			!$('.settings__mob-btn').is(e.target) // если клик был не по нашему блоку
			&& $('.settings__mob-btn').has(e.target).length === 0  // и не по его дочерним элементам
		) {
			$('.settings__mob-btn').removeClass('active');
			$('.drop-settings').removeClass('active');
			$('.container-mob').removeClass('p-bg');
		}
	});
}
function openSettingTableBg2() {
	$(".open-drop-tab__mob").on('click', () => {
		if ($(".open-drop-tab__mob").hasClass('active')) {
			$(".open-drop-tab__mob").removeClass('active');
			$('.container-mob').removeClass('p-bg');
			console.log('1',$(".open-drop-tab__mob"));
		} else {
			$(".open-drop-tab__mob").addClass('active');
			$('.container-mob.active').addClass('p-bg');
		}
	});
	$(document).mouseup(function (e) {
		if (
			!$('.open-drop-tab__mob').is(e.target) // если клик был не по нашему блоку
			&& $('.open-drop-tab__mob').has(e.target).length === 0 &&// и не по его дочерним элементам
			!$('.drop-tab__mob').is(e.target) // если клик был не по нашему блоку
			&& $('.drop-tab__mob').has(e.target).length === 0  // и не по его дочерним элементам
		) {
			$('.open-drop-tab__mob').removeClass('active');
			$('.drop-tab__mob').removeClass('active');
		}
	});
}
function openCreateSet(btnOpen) {
	if (typeof btnOpen === 'string') {
		btnOpen = document.querySelector(btnOpen);
	}
	btnOpen.addEventListener('click', () => {
		btnOpen.parentElement.parentElement.classList.remove('active')
		btnOpen.parentElement.parentElement.nextElementSibling.classList.add('active');
	});
}
function closeCreateSet(btnClose) {
	if (typeof btnClose === 'string') {
		btnClose = document.querySelector(btnClose);
	}
	btnClose.addEventListener('click', () => {
		btnClose.parentElement.parentElement.classList.remove('active');
		btnClose.parentElement.parentElement.previousElementSibling.classList.add('active');
	});
}

function bindTabsMob(container ,nav_tab ,item_tab ,btnTab) {
	let titles, contents;
	if (typeof container === 'string' &&
		typeof nav_tab === 'string' &&
		typeof item_tab === 'string' &&
		typeof btnTab === 'string' ) {
		container = document.querySelector(container);
		titles = container.querySelectorAll(nav_tab);
		contents = container.querySelectorAll(item_tab);
	} else {
		return;
	}
	const box = document.querySelectorAll(item_tab);
	for (let i = 0; i < titles.length; i++) {
		const titleEl = titles[i];
		titleEl.addEventListener('click', () => {
			deactivate(titles);
			deactivate(contents);
			box[i].classList.remove('p-bg');
			titles[i].classList.add('active');
			contents[i].classList.add('active');
			btnTab.classList.remove('active');
		});
	}
	function deactivate(elements) {
		for (let i = 0; i < elements.length; i++) {
			elements[i].classList.remove('active');
		}
	}
}
function bindTabs(container, nav_tab, item_tab) {
	let titles,contents;
	if (typeof container === 'string' &&
		typeof nav_tab === 'string' &&
		typeof item_tab === 'string' ) {
		container = document.querySelector(container);
		titles = container.querySelectorAll(nav_tab);
		contents = container.querySelectorAll( item_tab);
	} else {
		return;
	}
	for (let i = 0; i < titles.length; i++) {
		const titleEl = titles[i];
		titleEl.addEventListener('click', () => {
			deactivate(titles);
			deactivate(contents);
			titles[i].classList.add('active');
			contents[i].classList.add('active');
		});
	}

	function deactivate(elements) {
		for (let i = 0; i < elements.length; i++) {
			elements[i].classList.remove('active');
		}
	}
}

