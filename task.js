/**
 * @autor Yuchkovich Svetlana
 * @version 1.0
*/

/** Класс Pupil служит для хранения объектов с полями
 * name, mark
  @constructor
  @this  {Pupil}
*/

function Pupil(name, mark){
	this.name = name; //имя
	this.mark = mark; //средняя оценка
}

var arrName = ["Alex", "Piter", "Mike", "Ann", "Sveta", "Nik", "Kate", "Jon", "Kevin", "Anton"];

/**   Метод randMarks для генерирования рондомной целой среднее оценки
	 * @param  {this} arrName
     * @return {Number} Герерируем среднюю оценку
	*/

function randMarks(arrName){
	return Math.round(Math.random() * arrName.length);
}


var arrPupil = new Array(); // задание массива учеников arrPupil, состоящего из объектов Pupil

 arrPupil = [
    new Pupil("Alex", randMarks(arrName)),
    new Pupil("Piter", randMarks(arrName)),
    new Pupil("Mike", randMarks(arrName)),
    new Pupil("Ann", randMarks(arrName)),
    new Pupil("Sveta", randMarks(arrName)),
    new Pupil("Nik", randMarks(arrName)),
    new Pupil("Kate", randMarks(arrName)),
    new Pupil("Jon", randMarks(arrName)),
    new Pupil("Kevin", randMarks(arrName)),
    new Pupil("Anton", randMarks(arrName))
];

document.write("<b> Pupils </b> befor: </br>"); // записываем в document исходные данные
for (var i = 0; i < arrPupil.length; i++) {
	document.write(" " + arrPupil[i].name + " " + arrPupil[i].mark + "</br>");
}

/**   Метод separateByMark для генерирования рондомной целой среднее оценки
	 * @param  {this} arrPupil 
     * @return {Number} Герерируем среднюю оценку
	*/

function sortByParity(arrPupil){
	var arrOddMaks = new Array(); // Массив arrOddMaks состоит из объектов Pupil, имеющих нечетную среднюю оценку
	var arrEvenMaks = new Array(); // Массив arrEvenMaks состоит из объектов Pupil, имеющих четную среднюю оценку
	var arrPupilsAfterSort = new Array(arrPupil.length); // Массив arrPupilsAfterSort, в который перезаписывается arrPupil, с учетом четности оценок

	for (var i = 0; i < arrPupil.length; i++) {
		if(arrPupil[i].mark % 2 == 0){
			arrEvenMaks.unshift(arrPupil[i]); //вставляем в начало массива arrEvenMaks объект из arrPupil
		}
		else {
			arrOddMaks.unshift(arrPupil[i]); //вставляем в начало массива arrOddMaks объект из arrPupil
		}
		
	}

	var min = 0; // переменная min хранит значение количества чередований "четная -> нечетная оценка""
	var limit = 0; // переменная limit хранит количество чередующихся по четности элементов в новом массиве arrPupilsAfterSort
    var flag = true; // если четных больше
	
	min = Math.min(arrEvenMaks.length, arrOddMaks.length);
	limit = 2 * min;

    if (min == arrEvenMaks.length) { 
    	flag = false;  //если нечетных больше
    }
	
    arrOddMaks.sort( function(a, b) { //сортируем arrOddMaks по убыванию
  		return b.mark - a.mark;
  	});

  	arrEvenMaks.sort( function(a, b) { //сортируем arrEvenMaks по убыванию
  		return b.mark - a.mark;
  	});

	
    for (var i = 0, j = 0; j < limit; i++, j += 2) {  // Перезаписываем массив arrPupil в arrPupilsAfterSort с учетом четности оценок
    	arrPupilsAfterSort[j] = arrEvenMaks[i];
    	arrPupilsAfterSort[j+1] = arrOddMaks[i];
    }

    if (flag) { // если четных оценок больше, то дописываем четными оценками
   		for (j = limit, i = min; j < arrPupil.length; i++, j++) {
    		arrPupilsAfterSort[j] = arrEvenMaks[i] ;
    	}
    }

    else {
    	for (j = limit, i = min; j < arrPupil.length; i++, j ++) { // если нечетных оценок больше, то дописываем нечетными оценками
    		arrPupilsAfterSort[j] = arrOddMaks[i];
    	}
    }
   
	console.log(min);
    console.log(limit);
    console.log(flag);
	console.log(arrOddMaks);
	console.log(arrEvenMaks);
    console.log(arrPupilsAfterSort);

  

	return arrPupilsAfterSort;
}

var arrPupilsAfterSort = sortByParity(arrPupil); //вызываем функцию sortByParity  для объекта arrPupil, который содержит в себе массив объектов Pupil

 document.write("<b>Pupils</b> after <b>sortByParity</b> metod: </br>");
    for (var i = 0; i < arrPupilsAfterSort.length; i++) {
	    document.write(" " + arrPupilsAfterSort[i].name + " " + arrPupilsAfterSort[i].mark + "</br>");
    }