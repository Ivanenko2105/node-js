function Product({
	ID,
	name,
	description,
	price,
	brand,
	sizes,
	activeSize,
	quantity,
	date,
	reviews,
	images,
}) {
	return {
		ID,
		name,
		description,
		price,
		brand,
		sizes,
		activeSize,
		quantity,
		date,
		reviews,
		images,

		setID(ID) {
			this.ID = ID;
		},

		getID() {
			return this.ID;
		},

		setName(name) {
			this.name = name;
		},

		getName() {
			return this.name;
		},

		setDescription(description) {
			this.description = description;
		},

		getDescription() {
			return this.description;
		},

		setPrice(price) {
			this.price = price;
		},

		getPrice() {
			return this.price;
		},

		setBrand(brand) {
			this.brand = brand;
		},

		getBrand() {
			return this.brand;
		},

		setSizes(sizes) {
			this.sizes = sizes;
		},

		getSizes() {
			return this.sizes;
		},

		setActiveSize(activeSize) {
			this.activeSize = activeSize;
		},

		getActiveSize() {
			return this.activeSize;
		},

		setQuantity(quantity) {
			this.quantity = quantity;
		},

		getQuantity() {
			return this.quantity;
		},

		setDate(date) {
			this.date = date;
		},

		getDate() {
			return this.date;
		},

		setReviews(reviews) {
			this.reviews = reviews;
		},

		getReviews() {
			return this.reviews;
		},

		setImages(images) {
			this.images = images;
		},

		getImages() {
			return this.images;
		},

		getReviewByID(ID) {
			return this.reviews.find(value => value.ID == ID);
		},

		getImage(index = 0) {
			return this.images[index];
		},

		addSize(size) {
			this.sizes.push(size);
		},

		deleteSize(size) {
			let deleteIndex = this.sizes.indexOf(size);

			if (deleteIndex == -1) {
				return;
			}

			this.sizes.splice(deleteIndex, 1);
		},

		addReview(review) {
			this.reviews.push(review);
		},

		deleteReview(ID) {
			let deleteIndex = this.reviews.findIndex(value => value.ID == ID);

			if (deleteIndex == -1) {
				return;
			}

			this.reviews.splice(deleteIndex, 1);
		},

		getAverageRating() {
			return (
				this.reviews.reduce((acc, review) => {
					let rates = Object.values(review.rating);
					return (
						acc + rates.reduce((acc, value) => acc + value, 0) / rates.length
					);
				}, 0) / this.reviews.length
			);
		},

		toString() {
			return `${this.ID} | ${this.name} | ${this.price} | ${this.description}`;
		},
	};
}

function Review({ ID, author, date, comment, rating }) {
	return {
		ID,
		author,
		date,
		comment,
		rating,

		setID(ID) {
			this.ID = ID;
		},

		getID() {
			return this.ID;
		},

		setAuthor(author) {
			this.author = author;
		},

		getAuthor() {
			return this.author;
		},

		setDate(date) {
			this.date = date;
		},

		getDate() {
			return this.date;
		},

		setComment(comment) {
			this.comment = comment;
		},

		getComment() {
			return this.comment;
		},

		setRating(rating) {
			this.rating = rating;
		},

		getRating() {
			return this.rating;
		},
	};
}

/**
 *
 * @param {Array} products
 * @param {String} search
 */
function searchProducts(products, search) {
	return products.filter(
		product =>
			product.name.toLowerCase().includes(search.toLowerCase()) ||
			product.description.toLowerCase().includes(search.toLowerCase())
	);
}

/**
 *
 * @param {Array} products
 * @param {String} sortRule
 * @returns
 */
function sortProducts(products, sortRule) {
	return products
		.slice()
		.sort((product1, product2) =>
			product1[sortRule] < product2[sortRule] ? -1 : 1
		);
}

let product1 = new Product({
	ID: 1,
	name: 'T-shirt',
	description: 'menswear',
	price: 1000,
	brand: 'Chanel',
	sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
	activeSize: 'L',
	quantity: 100,
	date: new Date('2017-01-26'),
	reviews: [],
	images: ['image1', 'image2', 'image3'],
});

product1.addReview(
	new Review({
		ID: 1,
		author: 'Emma Carter',
		date: new Date('2017-02-20'),
		comment: 'good',
		rating: {
			service: 5,
			price: 4,
			value: 3,
			quality: 5,
		},
	})
);

product1.addReview(
	new Review({
		ID: 2,
		author: 'Liam Johnson',
		date: new Date('2018-03-17'),
		comment: 'bad',
		rating: {
			service: 3,
			price: 2,
			value: 3,
			quality: 2,
		},
	})
);

let product2 = new Product({
	ID: 2,
	name: 'Shirt',
	description: 'menswear',
	price: 800,
	brand: 'Chanel',
	sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
	activeSize: 'L',
	quantity: 60,
	date: new Date('2017-01-26'),
	reviews: [],
	images: ['image1', 'image2', 'image3'],
});

let products = [product1, product2];

// console.log(product1.getAverageRating());

// searchProducts(products, 'T-shirt').map(product =>
// 	console.log(product.toString())
// );

sortProducts(products, 'ID').map(product => console.log(product.toString()));
