import { AbstractProduct } from './AbstractProduct.js';

/**
 * A constructor function that creates an object of type Electronics
 * This class inherits the functionality of the class AbstractProduct.
 * @param {Object} param0 an object that contains Electronics data
 * @returns {Electronics} an object of type Electronics
 */
export function Electronics({
	ID,
	name,
	description,
	price,
	brand,
	quantity,
	date,
	reviews,
	images,
	warranty,
	power,
}) {
	this.ID = ID;
	this.name = name;
	this.description = description;
	this.price = price;
	this.brand = brand;
	this.quantity = quantity;
	this.date = date;
	this.reviews = reviews;
	this.images = images;
	this.warranty = warranty;
	this.power = power;
}

Electronics.prototype = Object.create(
	AbstractProduct.prototype,
	Object.getOwnPropertyDescriptors({
		constructor: Electronics,

		setWarranty(warranty) {
			this.warranty = warranty;
		},

		getWarranty() {
			return this.warranty;
		},

		setPower(power) {
			this.power = power;
		},

		getPower() {
			return this.power;
		},
	})
);
