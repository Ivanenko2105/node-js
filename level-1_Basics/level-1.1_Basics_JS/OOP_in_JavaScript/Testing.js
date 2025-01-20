import { Clothes } from './Clothes.js ';
import { Electronics } from './Electronics.js ';
import { Review } from './Review.js';
import { searchProducts, sortProducts } from './AbstractProduct.js';

let shirt = new Clothes({
	ID: 1,
	name: 'T-shirt',
	description: 'menswear',
	price: 50,
	brand: 'Chanel',
	quantity: 100,
	date: new Date('2017-01-26'),
	sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
	activeSize: 'L',
	reviews: [],
	images: ['image1', 'image2', 'image3'],
	material: 'cloth',
	color: 'black',
});

shirt.addReview(
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

shirt.addReview(
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

let phone = new Electronics({
	ID: 2,
	name: 'IPhone 16',
	description: 'Smartphone',
	price: '1000',
	brand: 'IPhone',
	quantity: 100,
	reviews: [],
	date: new Date('2024-09-17'),
	images: ['image1', 'image2', 'image3'],
	warranty: '1 year',
	power: '100W',
});

let laptop = new Electronics({
	ID: 3,
	name: 'MacBook Air',
	description: 'Laptop',
	price: '1500',
	brand: 'MacBook',
	quantity: 200,
	reviews: [],
	date: new Date('2022-09-10'),
	images: ['image1', 'image2', 'image3'],
	warranty: '2 yeas',
	power: '120W',
});

const products = [shirt, phone, laptop];

console.log('\n\tTesting "getFullInformation" function');
console.log(shirt.getFullInformation());

console.log('\n\tTesting "getPriceForQuantity" function');
console.log(shirt.getPriceForQuantity(5));

console.log('\n\tTesting "getProperty" function');
for (let key in shirt) {
	if (typeof shirt[key] == 'function') {
		continue;
	}
	console.log(`${key}: ${shirt.getProperty(key)}`);
}

console.log('\n\tTesting "searchProducts" function');
console.log(searchProducts(products, 'smartphone').toString());
console.log('---------------------------------');
console.log(searchProducts(products, 'laptop').toString());

console.log('\n\tTesting "sortProducts" function');
sortProducts(products, 'name').map(product => console.log(product.toString()));
console.log();
