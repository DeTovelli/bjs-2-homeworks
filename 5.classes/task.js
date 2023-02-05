class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;  
        this.type = null;
        this.state = 100;
    }
   
    fix() {
       this.state = this.state * 1.5;
    }
    
    set state(fix) {
        if (fix < 0) {
            this._state = 0; 
        } else if (fix > 100) {
            this._state = 100;
        } else {
            this._state = fix;
        }
    }
    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
            this.type = 'magazine';
            this.state = 100;
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
            this.author = author;
            this.type = 'book';
            this.state = 100;
        }
}
class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
            this.type = 'detective';
            this.state = 100;       
        }
}
class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
            this.type = 'fantastic';
            this.state = 100;
        }
}
class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
            this.type = 'novel';
            this.state = 100;
        }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
   );

console.log(sherlock.releaseDate);
console.log(sherlock.state); 
sherlock.fix();
console.log(sherlock.state);



// ............................................

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }
    
    addBook(book) {
        this.book = book;
        if (this.book.state > 30) {
            return this.books.push(this.book);
        }
    }
    
    findBookBy(type, value) {
        return this.books.find(book => book[type] == value) || null;
    }
    
    giveBookByName(bookName) {
        let i = this.books.findIndex(el => el.name == bookName);
        if (i == -1) {
            return null;
        } else {
            let arr = this.books.splice(i, 1);
            return arr[0]
        }
    }
}


const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// Задание 3

class Student {
    // ваш код
  }
  
  const student = new Student("Олег Никифоров");
  student.addMark(5, "algebra");
  student.addMark(5, "algebra");
  student.addMark(5, "geometry");
  student.addMark(4, "geometry");
  student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
  student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
  student.getAverageBySubject("biology"); // Несуществующий предмет
  student.getAverage(); // Средний балл по всем предметам 4.75
  student.exclude("Исключен за попытку подделать оценки");