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
	console.log(breeds[i][0]);
	for (let j = 0; j < breeds[i][1].length; j++) {
		console.log(breeds[i][1][j]);
	}
}