const section = document.getElementById('homes');

const home = {
	name: 'Modern flat',
	type: 'House',
	desc: "This is the perfect house for you, come to visit it you'll love it ",
	img: 'https://cf.bstatic.com/images/hotel/max1024x768/177/177622915.jpg',
	available: true,
};
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
createCard(home);
