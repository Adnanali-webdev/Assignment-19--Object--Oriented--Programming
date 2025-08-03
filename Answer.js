/// Task-1  

function Person(name,age){
    this.name = name;
    this.age = age;
};

 Person.prototype.display = function(){
    console.log("the name of person is ", this.name, " and age is  ", this.age)
}

const p1 = new Person("john",18);
const p2 = new Person("Alice",24);
p1.display();
p2.display();




//// TASK --2


  let _accNum = "******";
function BankAccount(name,accNum,bankName,balance){
    this.name = name;
     this. _accNum = accNum;
    this.bankName = bankName;
    this.balance = balance;
    this.lastOperation = null;
    this.lastAmnt = 0;
    this.deposit = function(depositAmnt){
        this.lastOperation = "deposit";
        this.lastAmnt = depositAmnt;
         balance = this.balance + depositAmnt;
         return balance;
    }
    this.display = function(){
        if(this.lastOperation === "deposit"){
        console.log(this.name, "has deposited amnt ", this.lastAmnt, "into ",
         this.bankName, "on this account", _accNum);
        }else if(this.lastOperation === "withdrawn"){
        console.log(this.name, "has withdrawn amnt ", this.lastAmnt, "into ",
         this.bankName, "on this account", _accNum);
        }else{
        console.log(this.name, "has balance amnt ", this.balance, "into ",
         this.bankName, "on this account", _accNum);
  
        }
    }
};
BankAccount.prototype.withdraw = function(withdrawAmnt){
    if(withdrawAmnt > this.balance){
        console.log("amount is insufficient")
        return this.balance;
    }
    for(let i = 0; i < withdrawAmnt; i++){
        this.balance = this.balance -  1;
    }
    this.lastOperation = "withdrawn";
    this.lastAmnt = withdrawAmnt;
    return this.balance;
}


const user1 = new BankAccount("rahul Chadda",2734,"delhi bank ", 50000);
user1.display();
console.log(user1.deposit(10000));
user1.display();
console.log(user1.withdraw(10000));
user1.display();

/// Task--3


function Book(title,author){
    this.title = title;
    this.author = author;

};

Book.prototype.display = function(){
    console.log(`Name of the BOOK : ${this.title} \nAuthor  : ${this.author}`);

}

const student1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const student2 = new Book("The Catcher In The Rye", "J.D. SALINGER");
student1.display();
student2.display();



/// task-4

class Personn{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    display(){
        console.log("Name of Person :", this.name, "\nAge :", this.age);
    }
};

const person1 = new Personn("rohan", 23);
const person2 = new Personn("sameer", 30);
person1.display();
person2.display();


/// Task---5

class Calculator{
    constructor(value1,value2){
        this.value1 = value1;
        this.value2 = value2;
    }
    add(){
        return this.value1 + this.value2;
    }
    subtract(){
        return this.value1 - this.value2;
    }
    multiply(){
        return this.value1 * this.value2;
    }
    divide(){
        return this.value1 / this.value2;
    }
};
const calc = new Calculator(10,2);
const sum = calc.add();
console.log(sum);
console.log("subtraction", calc.subtract());
console.log("multiply of two value", calc.multiply());
const div = calc.divide();
console.log("division ", div);


//// TASK----6


class Shape{
    constructor(geometricShapes){
        this.geometricShapes = geometricShapes;
    }
};


class Circle extends Shape{
    constructor(radius){
        super("Circle");                                        // here circle will behave as geometric shape
        this.radius = radius;
    }
    diameter(){
        return this.radius * 2;
    }
    Area(){
        return Math.PI * this.radius ** 2;
    }
    circumference(){
        return 2 * 3.14 * this.radius;
    }
};

const c1 = new Circle(5);
console.log("Area of Circle :", c1.Area());
console.log("Circumference of Circle :",c1.circumference());



class Rectangle extends Shape{
    constructor(length,width){
    super("Rectangle");
    this.length = length;
    this.width = width;
}
  Area(){
    return this.length * this.width;
  }
  perimeter(){
    return 2 * (this.length + this.width);
  }
};

const R1  = new Rectangle(8,12);
console.log("Area of Rectangle :", R1.Area());
console.log("Perimeter of Rectangle :", R1.perimeter());





class RightTriangle extends Shape{
    constructor(base,height,hypoteneous){                                          // pythagoras theorem   a + b = c --> c = sqrt of a**2 + b**2           
        super("RightTriangle");
        this.base = base;
        this.height = height;
        this.hypoteneous = hypoteneous;                                
    }
    Area(){
        return 0.5 * this.base * this.height;
    }
    perimeter(){
        this.hypoteneous = Math.sqrt(this.base**2 + this.height**2);
        // console.log(this.hypoteneous);
        return this.base + this.height + this.hypoteneous;
    }
};

const Rtriangle1 = new RightTriangle(6,8);
console.log("Area of RightTriangle :", Rtriangle1.Area());
console.log("Perimeter of RightTriangle :", Rtriangle1.perimeter());



//// Task-7



class Book1{
    constructor(title,author){
        this.title = title;
        this.author = author;
        this.availability = true;
    }
};
class Library{
    constructor(){
        this.Books = [];
    };
    addBooks(book){
        this.Books.push(book);
        console.log("Book titled", book.title, "added to the Library" );
    }
    checkoutBooks(title){
        const checkoutBook = this.Books.find(book => book.title === title && book.availability);                    // book.title === title → checks if the book's title matches the one passed into the method. book.availability → ensures the book is not already checked out (must be true). So this line finds the first book with a matching title that is still available.
        if(checkoutBook){
            checkoutBook.availability = false;                                                                      // Marks the checkoutBook as checked out by setting its available property to false. Now this book will no longer be available until it is returned.       
            console.log(title, "has been checkout");                       
            return true;
        }else{
            console.log(title, "is not available or doesn't exist.");
            return false;
        }
    }
    returnBooks(title){
        const returnBook = this.Books.find(book => book.title === title && !book.availability);{
            if(returnBook){
                returnBook.availability = true;
               console.log(title,"has been returned.");
               return true; 
            }else{
                console.log(title, "is either not checked out or doesn't exist.")
            }
        }
    };
    listAllBooks(){
        const availableBook = this.Books.filter(book => book.availability);
        if(availableBook.length > 0){
           console.log("Here are the Available List of the Book");
           availableBook.forEach(book => {
            const status = book.availability ? "Available" : "Checked out";
             console.log("-", book.title, "\n  author :", book.author, [status] );
            } ) ;
        }
    }
};

const book1 = new Book1("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book1("The Catcher In The Rye", "J.D. SALINGER");
const book3 = new Book1("To Kill a Mockingbird", "Harper Lee");
const library = new Library();
console.log(book2.availability);
library.addBooks(book1);
library.addBooks(book2);
library.addBooks(book3);
library.checkoutBooks("The Catcher In The Rye");
library.listAllBooks();
library.returnBooks("The Catcher In The Rye");
library.listAllBooks();

