export function Review({ ID, author, date, comment, rating }) {
	this.ID = ID;
	this.author = author;
	this.date = date;
	this.comment = comment;
	this.rating = rating;
}

Object.assign(Review.prototype, {
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

	toString() {
		return `${this.ID} | ${this.author} | ${this.date}`;
	},
});
