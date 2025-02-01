/**
 * @param {String} csv - text in CSV format (for example - 44.38,34.33,Алушта,31440,)
 * @returns {Function} a function that will accept any text as input and replace the names of cities in it with a string of the following form: "city name (X place in the TOP-10 largest cities of Ukraine, population YYYYYY people)".
 */
export function createFuncForCSV(csv) {
	let top10CitiesByPopulation = csv
		.split('\n')
		.filter(value => value.length != 0 && !value.startsWith('#'))
		.map(value => {
			const properties = ['x', 'y', 'name', 'population'];
			return Object.fromEntries(
				value.split(',').map((property, index) => [properties[index], property])
			);
		})
		.sort((entry1, entry2) => entry1.population - entry2.population)
		.slice(0, 10)
		.reduce(
			(result, entry, index) => (
				(result[entry.name] = {
					population: entry.population,
					rating: index + 1,
				}),
				result
			),
			{}
		);

	return function (text) {
		for (let cityName in top10CitiesByPopulation) {
			text = text.replace(
				cityName,
				`${cityName} (${top10CitiesByPopulation[cityName].rating} місце в ТОП-10 найбільших міст України, населення ${top10CitiesByPopulation[cityName].population} чоловік)`
			);
		}
		return text;
	};
}
