/**
 * Abstract class used to be inherited by specific products
 */
export function AbstractProduct() {}

Object.assign(AbstractProduct.prototype, {
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

	getFullInformation() {
		let result = '';

		for (let key in this) {
			let propertyValue = this[key];

			if (typeof propertyValue == 'function') {
				continue;
			}

			if (Array.isArray(propertyValue)) {
				result += `${key}:\n`;
				for (let item of propertyValue) {
					result += `\t${item.toString()}\n`;
				}
				continue;
			}

			result += `${key}: ${propertyValue.toString()}\n`;
		}

		return result;
	},

	getPriceForQuantity(count) {
		return `\$${(this.price * count).toFixed(2)}`;
	},

	getProperty(nameProperty) {
		if (!(nameProperty in this)) {
			throw new Error(`${nameProperty} is not in object.`);
		}

		if (typeof this[nameProperty] == 'function') {
			throw new Error(`${nameProperty} is a function`);
		}

		return this[nameProperty];
	},

	setProperty(nameProperty, value) {
		if (!(nameProperty in this)) {
			throw new Error(`${nameProperty} is not in object.`);
		}

		if (typeof this[nameProperty] == 'function') {
			throw new Error(`${nameProperty} is a function`);
		}
		this[nameProperty] = value;
	},
});

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
