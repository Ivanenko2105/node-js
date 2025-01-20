import { AbstractProduct } from './AbstractProduct.js';

export function Clothes({
	ID,
	name,
	description,
	price,
	brand,
	quantity,
	date,
	reviews,
	images,
	sizes,
	activeSize,
	material,
	color,
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
	this.sizes = sizes;
	this.activeSize = activeSize;
	this.material = material;
	this.color = color;
}

Clothes.prototype = Object.create(
	AbstractProduct.prototype,
	Object.getOwnPropertyDescriptors({
		constructor: Clothes,

		setMaterial(material) {
			this.material = material;
		},

		getMaterial() {
			return this.material;
		},

		setColor(color) {
			this.color = color;
		},

		getColor() {
			return this.color;
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
	})
);
