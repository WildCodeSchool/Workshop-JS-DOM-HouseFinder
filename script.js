const section = document.getElementById('homes');

let selectValue = 'All';

const home = {
	name: 'Modern flat',
	type: 'House',
	desc: "This is the perfect house for you, come to visit it you'll love it ",
	img: 'https://cf.bstatic.com/images/hotel/max1024x768/177/177622915.jpg',
	available: true,
};

const homes = [
	{
		name: 'Modern flat',
		type: 'House',
		desc: "This is the perfect house for you, come to visit it you'll love it ",
		img: 'https://cf.bstatic.com/images/hotel/max1024x768/177/177622915.jpg',
		available: true,
	},
	{
		name: 'Beautiful design house',
		type: 'House',
		desc: "This is the perfect house for you, come to visit it you'll love it ",
		img: 'https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/newsletter/001.jpg?1575165037',
		available: true,
	},
	{
		name: 'Beautiful House bis',
		type: 'House',
		desc: "This is the perfect house for you, come to visit it you'll love it ",
		img: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/11172338/World%E2%80%99s-15-Most-Beautiful-Houses-That-Will-Leave-You-Awestruck-featured-shutterstock_1182743467-1200x700-compressed.jpg',
		available: false,
	},
	{
		name: 'Wonderful house with Garden',
		type: 'House',
		desc: "This is the perfect house for you, come to visit it you'll love it ",
		img: 'https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
		available: true,
	},
	{
		name: 'My super Flat ',
		type: 'Flat',
		desc: "This is the perfect flat for you, come to visit it you'll love it ",
		img: 'https://r-cf.bstatic.com/images/hotel/max1024x768/843/84330721.jpg',
		available: true,
	},
];

function createCard(data) {
	const card = `
  <article class="card-body">
  <h1 class="card-title">${data.name}</h1>
  <h2 class="card-description">${data.desc}</h2>
  <img
    class="card-image"
    src=${data.img}  />
  <button class="card-button">delete</button>
</article>`;

	const div = document.createElement('div');
	div.innerHTML = card;
	section.appendChild(div);
}
function render() {
	section.innerHTML = '';
	for (let i = 0; i < homes.length; i++) {
		if (selectValue === homes[i].type || selectValue === 'All')
			createCard(homes[i]);
	}
}
function filter() {
	selectValue = document.getElementById('select').value;
	render();
}
render();
