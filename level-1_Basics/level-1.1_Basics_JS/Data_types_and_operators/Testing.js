import {
	Product,
	Review,
	searchProducts,
	sortProducts,
} from './DataTypesAndOperators.js';

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

console.log('\nTesting the getAverageRating function:');
console.log(`getAverageRating = ${product1.getAverageRating()}`);

console.log('\nTesting the searchProducts function:');
searchProducts(products, 'T-shirt').map(product =>
	console.log(product.toString())
);

console.log('\nTesting the sortProducts function:');
sortProducts(products, 'ID').map(product => console.log(product.toString()));
console.log();
