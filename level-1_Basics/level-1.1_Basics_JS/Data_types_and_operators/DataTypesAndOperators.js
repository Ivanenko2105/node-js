/**
 * A constructor function that creates an object of type product
 * @param {Object} param0 an object that contains product data
 * @returns {Product} an object of type product
 */
export function Product({
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

/**
 * A constructor function that creates an object of type Review
 * @param {Object} param0 an object that contains Review data
 * @returns {Review} an object of type Review
 */
export function Review({ ID, author, date, comment, rating }) {
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
 * The function searches for a products based on a given description
 * @param {Array} products
 * @param {String} search a given description
 * @returns {Array} wanted products
 */
export function searchProducts(products, search) {
	return products.filter(
		product =>
			product.name.toLowerCase().includes(search.toLowerCase()) ||
			product.description.toLowerCase().includes(search.toLowerCase())
	);
}

/**
 * the function sorts products by the specified property
 * @param {Array} products
 * @param {String} sortRule the specified property
 * @returns {Array}
 */
export function sortProducts(products, sortRule) {
	return products
		.slice()
		.sort((product1, product2) =>
			product1[sortRule] < product2[sortRule] ? -1 : 1
		);
}
