// Вивести на екран породи
// Під ними повинні бути ще під породи
// Все це повинно працювати в циклі
// Повинно змінюватись залежно він розміру масиву

/*
breed1
sub-breed1-1
sub-breed1-2
breed2
breed3
sub-breed3-1
*/

let breeds = [
    ['breed1', ['sub-breed1-1', 'sub-breed1-2']],
    ['breed2', []],
    ['breed3', ['sub-breed3-1']],
];

for (let i = 0; i < breeds.length; i++) {
	for (let j = 1; j < breeds[i].length; j++) {
		console.log(breeds[i][0]);
		for (let k = 0; k < breeds[i][j].length; k++) {
			console.log(breeds[i][j][k]);
		}
	}
}
