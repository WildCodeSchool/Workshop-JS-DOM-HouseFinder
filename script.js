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
  <h1 class="card-title">this is a house</h1>
  <h2 class="card-description">a beautiful description for a test</h2>
  <img
    class="card-image"
    src="https://www.publicdomainpictures.net/pictures/90000/velka/house-illustration-clipart.jpg"
  />
  <button class="card-button">delete</button>
</article>`;

	const div = document.createElement('div');
	div.innerHTML = card;
	section.appendChild(div);
}
createCard(home);
