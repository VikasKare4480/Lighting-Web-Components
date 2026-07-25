import { LightningElement } from 'lwc';
import setAndMap from './SetAndMap';
import EmployeeNumber from '@salesforce/schema/User.EmployeeNumber';

export default class LearningJavaScript extends LightningElement {

    onclickofbutton1() {
        console.log('onclickofbutton1 called');
    }

    constructor() {
        console.log('Learning JavaScript');
        super();

        let setOfUsersNames = new Set(); // let is blocked scoped variable, can be reassigned

        // ADDING VALUES TO THE SET USING ADD() METHOD
        setOfUsersNames.add('John Doe');
        setOfUsersNames.add('Jane Smith');
        setOfUsersNames.add('Alice Johnson');
        setOfUsersNames.add('Bob Brown');
        setOfUsersNames.add('Charlie Davis');
    }
    connectedCallback() {

        let userInfoMap = new Map(); // let is blocked scoped variable, can be reassigned
        // user set() methods to push the data in to the map
        userInfoMap.set('name', 'John Doe');
        userInfoMap.set('age', 30);
        userInfoMap.set('email', 'vikaskare7777@gmail.com');
        userInfoMap.set('address', '123 Main St, Anytown, USA');
        userInfoMap.set('phone', '555-1234');
        const userInfoObject = Object.fromEntries(userInfoMap); // const is blocked scoped variable, cannot be reassigned
        const UserCountry = 'USA'; // const is blocked scoped variable, cannot be reassigned
        userInfoMap.set('country', UserCountry);
        userInfoMap.set('isActive', true);
        userInfoMap.set('lastLogin', new Date());
        userInfoMap.set('roles', ['admin', 'user']);
        userInfoMap.set('preferences', { theme: 'dark', language: 'en' });
        userInfoMap.delete('age');

        // TO CHECK IF A KEY EXISTS IN THE MAP-- HAS METHOD
        const hasEmail = userInfoMap.has('email');

         // TO CLEAR ALL THE VALUES OF THE A MAP
        // userInfoMap.clear();

        // to get the keys of the map which return the iterable object of the keys in the map
        const keys = userInfoMap.keys();

        for(const key of keys) {
            console.log(key);
        }

        // to get the values of the map whic return the iterable object of the values in the map
        const values = userInfoMap.values();

        for(const value of values) {
            console.log(value);
        }

        // TO GET HE ALL KEYS AND VALUES FROM THE MAP USER ENTRIES() METHOD
        const entries = userInfoMap.entries();

        for(const [key, value] of entries) {
            console.log(`${key}: ${value}`);
        }

        let setOfUsersNames = new Set(); // let is blocked scoped variable, can be reassigned

        // ADDING VALUES TO THE SET USING ADD() METHOD
        setOfUsersNames.add('John Doe');
        setOfUsersNames.add('Jane Smith');
        setOfUsersNames.add('Alice Johnson');
        setOfUsersNames.add('Bob Brown');
        setOfUsersNames.add('Charlie Davis');

        // TO CHECK IF A VALUE EXISTS IN THE SET-- HAS METHOD
        const hasUser = setOfUsersNames.has('Alice Johnson');

        // TO CLEAR ALL THE VALUES OF THE A SET
        // var clearSet = setOfUsersNames.clear();

        // TO DELETE THE SPECIFIC VALUE FROM THE SET USING DELETE() METHOD
        setOfUsersNames.delete('Bob Brown');

        // to get the values of the users fro m the set 
        setOfUsersNames.values();

        for(const value of setOfUsersNames) {
            console.log(value);
        }

        // COMPARISON BETWEEN DIFFRERT TYPES WITH == AND === OPERATORS

        let num = 5;
        let str = '5';
        
        console.log(num == str); // true, because == performs values check not type check
        console.log(num === str); // false, because === performs both values and type check
        Object.is(1, '1'); // this methods works like === operator, it checks both values and type of the variables

        let normal = 'Vikas Laxman Kare';
        let objectString = new String('Vikas Laxman Kare');
        normal.slice(0, 5); // this method works on normal string and returns the sliced string

        normal.slice(-10, -5); // this method works on normal string and returns the sliced string
        objectString.slice(0, 5); // this method works on object string and returns the sliced string

        const lengthOfNormalString = normal.length;
        console.log(lengthOfNormalString); 

        const lengthOfObjectString = objectString.length;
        console.log(lengthOfObjectString); 

        // replace methods
        const afterReplaceString = normal.replace('Laxman', 'Mandakini');
        console.log(afterReplaceString);

        normal = normal.replace('Laxman', 'Mandakini'); 
        console.log(normal);

        // for ignoring the case then we user /STRING/i
        const afterReplaceStringIgnoreCase = normal.replace(/mandakini/i, 'Laxman');
        console.log(afterReplaceStringIgnoreCase);

        // to reaplace at every location
        const afterReplaceStringAtEveryLocation = normal.replace(/mandakini/gi, 'Laxman');
        console.log(afterReplaceStringAtEveryLocation);

        const upperCaseString = normal.toUpperCase();
        console.log('upperCaseString ' + upperCaseString);

        const lowerCaseString = normal.toLowerCase();
        console.log('lowerCaseString ' + lowerCaseString);

        const trimmedString = normal.trim();
        console.log('trimmedString ' + trimmedString);

        const splitString = normal.split(' '); // THIS WILL SPLIT THE STRING BY SPACE AND RETURN THE ARRAY OF STRINGS
        console.log('splitString ' + splitString); 

        const charAtIndex = normal.charAt(5); // WILL RETRUN THE CHRACTER AT INDEX IN THE STRING
        console.log('charAtIndex ' + charAtIndex);

        const indexOfChar = normal.indexOf('Laxman'); // THIS WILL RETURN THE INDEX OF THE  CHRACTER / SUBSTRING STRING IN THE STRING
        console.log('indexOfChar ' + indexOfChar);

        const lastIndexOfChar = normal.lastIndexOf('a'); // THIS WILL RETURN THE LAST INDEX OF THE CHARACHTER IN THE STRING 
        console.log('lastIndexOfChar ' + lastIndexOfChar);

        const includesChar = normal.includes('Mandakini'); // RETURN TRUE IF THE STRING INCLUDES THE SUBSTRING OR CHARACTER ELSE RETURN FALSE
        console.log('includesChar ' + includesChar);

        const startsWithChar = normal.startsWith('Vikas'); // RETURN TRUE IF THE STRING STARTS WITH THE GIVEN SUBSTRING ELSE RETURN FALSE
        console.log('startsWithChar ' + startsWithChar);

        const endsWithChar = normal.endsWith('Kare'); // RETURN TRUE IF THE STRING ENDS WITH THE GIVEN SUBSTRING ELSE RETURN FALSE
        console.log('endsWithChar ' + endsWithChar);

        const creditCardNumber = '1234-5678-9012-3456';
        const lastFourNumbers = creditCardNumber.slice(-4);
        const paddedCreditCardnumber = lastFourNumbers.padStart(creditCardNumber.length, '*');

        // PUNCTUATION MARKS IN THE STRING
        const stringWithPunctuation = "Hello, world! How's it going?";
        // const stringWithoutPunctuation = stringWithPunctuation.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

        const ageOfVikas = 30;
        let stringDemo = `My name is Vikas Laxman Kare and I am ${ageOfVikas} years old.`;
        console.log('stringDemo ' + stringDemo);


        // OBJECTS IN JS

        let Vikaskareinfo = {
            name: 'Vikas Laxman Kare',
            age: 30,
            email: 'vikaskare@gmail.com',
            profile : "INDIAN",
            "is Admin" : true,
            EmployeeNumber : 'GANG002',
            Languages : ['Hindi', 'English', 'Marathi'],
            reportees : {
                reportee1 : {
                    name : 'Vikas',
                    EmployeeNumber : 'GANG002'
                },
                reportee2 : {
                    name : 'Vikas',
                    EmployeeNumber : 'GANG002'
                }, 
                reportee3 : {
                    name : 'Vikas',
                    EmployeeNumber : 'GANG002'
                } 
            }
        };
        let objectWithObjectCreatemethd = Object.create(); // WILL ALWAYS RETURN
        let testObject = new  Object({name : 'Vikas', fatherName : "Laxamn", Surname : "Kare"});
        Vikaskareinfo[country] =  'India';
        Vikaskareinfo['Role'] = 'Admin';

        // CAEATION OBJECT FROM MAP 

        let userInfoMapCopy = userInfoMap;
        let objectFromMap = Object.fromEntries(userInfoMap);

        // GET THE KEYS FROM MAP
        let keysFromObject = objectFromMap.keys()

        // GET THE VALUES FROM THE OBJECT
        let valuesFromObject = objectFromMap.values();

        // GET THE ALL THE ENTRIES OF THE OBJECT
        let entriesOfObject = objectFromMap.entries();

        // COPY THE DATA TO ANOTHER OBJECT FROM OLD OBJ     

        // IF YOU WILL DIRECTE ASSING THE OBJECT TO ANOTHER ONE THE IT WILL ON COPY THE REFERENCE OF FIRST ONE 
        let userInfoCopy = userInfoMap; // if changes will be made in any then chagnes will be visible to all of them


        // BEST PRACTICES ARE 

        // WITH JSON PARSING
        let objectWithJsonParsing = JOSN.parse(JSON.stringlyFy(userInfoCopy));

        // with assing method SHALLOW COPY ONLY NESTEST OBJECTS OR AARAYS WILL NOT BE COPIED
        let objectWithAssing = Object.assign({}, userInfoCopy); // THIS WILL COPY THE ALL THE DATA FROM THE USER INFO COPY TO NEW 
        let objectWithOldVariable = {}
        let objectWithOldVariableCopy = Object.assign(objectWithOldVariable, userInfoCopy);


        // DEEP COPY 
        let objectWithAssign = structuredClone(userInfoCopy); 
        // FOR THE DEEP COPY USER SPREAD OPERATOR
        let objectWithSpeadOperator = {...userInfoCopy}; // THIS WILL CREATE THE  FULL COPY

        // HASOWNPROPERTY CHECKES DOES KEY EXIST OR NOT 
        let propertyexists = userInfoCopy.hasOwnProperty('name'); // return true of key exists

        // seal object so changes will be done but not deleted
        Object.seal(userInfoCopy);

        userInfoCopy.name = 'Test Name'; 
        delete userInfoCopy.name; // this will not be allowd

        // freeze - it will not allow the any changes in the object
        Object.freeze(userInfoMap);

        // LOOPS IN THE JS

        // FOR LOOP

        let favFruits = ['BANANA', 'APPLE', 'BLUE BERRY', 'CUSTORED APPLE', 'GRAPES'];

        for(let i =0; i < favFruits.length; i++) {

            console.log(favFruits[i]);
        }
        // FOR-IN LOOP

        let student = {
            name : 'Vasudev Kanta',
            "roll No" : 20,
            class : 8,
            division : 'B',
        };

        for(let key in student) {
            alert(student[key]);
        } 
        // FOR-OF-LOOP

        let teacherMap = new Map(); 
        teacherMap.set('Name', 'Mali Madam');
        teacherMap.set('Subject', 'Biology');
        teacherMap.set('Experience', 14);
        teacherMap.set('Grade', 'A++');
        teacherMap.set('Role', 'Dept Head');

        for(let key of teacherMap.keys()) {
            alert(teacherMap.get(key));
        }

        // WHILE LOOP
        let iteratorVar = 1;
        while(iteratorVar <= 10) {

            alert(iteratorVar);
            i++;
        }
        // DO WHILE LOOP 
        // USE WHEN WE HAVE TO EXECUTE THE CODE AT LEAST ONCE BEFORE CONDTION CHECK
        do {
            iteratorVar--;
        }while(iteratorVar >= 0);

        // LET'S LEARN ABOUT JS ARRAYS 

        // WAYS OF DECLATION OF THE ARRAYS
        let myFriends = ['Atul', 'Tejas', 'Mansi'];

        let lengthOfArray = myFriends.length;
        // ADD() ADDS THE NEW ELEMENT TO THE ARRAY
        myFriends.add('Anil');
        let atulsFriends = ['Vasu', 'Badal', 'Dalla'];

        // concate() -- ADDS THE TWO ARRAYS AND RETURNS THE NEW ARRAY
        let tejasFriends = atulsFriends.concat(myFriends);

        // EVERY() METOHOD - IT WILL CHECK FOR THE CONDTION FOR EVERU ELEMENT IN THE ARRAY
        let numbers = [10, 20, 39, 83, 33, 44, 64, 87];
        numbers.every(function(
            currentValue, index, originalArray) {
                console.log(index);
                return currentValue > 10
            }
        )

        // some() it will check for any element if satsfy then will return true

        let studentsMarks = [87, 88, 98, 100, 87, 88];
        studentsMarks.some(
            function(currentValue, index, originalArray) {
                return currentValue > 100
            }
        );

        // CREATION Array FROM set 
        let set = new Set();
        set.add(10);
        set.add(100);
        set.add(300);
        let arartFromSet = Array.from(set);
     
        // forEach() method only works with the array

        let newArray = Array.from('I\m vikas kare');
        if(Array.isArray(newArray)) {
            newArray.forEach(
                function(currentValue, index, copiesArray) {
                    console.log(copiesArray[index]);
                }
            );
        }

        // includes() method

        console.log(newArray.includes('v'));

        // index of
        console.log(newArray.indexOf('v'));

        // join() return the string of all array elements with comma seperated by default we can also provide the seperator
        console.log(newArray.join());

        const fruits = [
                        'Mango', 
                        'Banana', 
                        'Apple', 
                        'Grapes', 
                        'Orange', 
                        'Strawberry', 
                        'Watermelon', 
                        'Papaya', 
                        'Pineapple', 
                        'Kiwi'
                    ];
        // POP() - REMOVES THE LAST ELMENT OF THE ARRAY AND RETURNS THE SAME

        fruits.pop(); // removes kivi and returns the same

        // push() adds element to the araray 
        fruits.push('Vikas', 'Kare');

        // shift() removes the  first element of the array 
        fruits.shift(); // will remove the mango
                    
        // unshift()
        fruits.unshift('----Select One-----'); // Will be addded at the start of the array

        // slice()
        let slicedArray = fruits.slice(0, 4); 

        // splice() adding elements in the array at specific index
        // let splicedArray = fruits.splice(index, numberOfElementsTodelete, comma seperatedelements);
        let splicedArray = fruits.splice(3, 0, 'SplicedElement');

        // to remove the elements from the array with splice(inde. numberOfElementsToRemove)
        let splicedRemove = fruits.splice(3, 1); // it will remove SplicedElement

        // toString() - Convert the array into string
        let arrayString = fruits.toString();     
        
        //  values() - it will return the Array iterator for the array values
        let arrayValues = fruits.values();

        // lastIndexOf(element) 
        let lastIndexOfMango = fruits.lastIndexOf('Mango');

        // firstIndex(element)
        let firstIndexOf = fruits.firstIndexOf('Mango');

        // filter() 
        let filtersArray = fruits.filter(
            function(currentElement, index, fruitsOriginal) {
                return currentElement.length > 5
            }
        );


        // find() 
        let findMango = fruits.find(
            function(current, index, fruitsOriginal) {
                return current === 'Mango';
            }
        );

        // reduce(accumulator, callback function(currentval, index , orginalArray), initialValue - 0) method
        // ALWAYS WORKS FROM LEFT TO RIGHT
        var araryOfSquares = [1, 4, 9, 16, 25, 36, 49, 64, 79, 100];
        // NOW LET SUM THE ARRAY ELEMENTS USING REDUCEMETOD()
        let arraySum = araryOfSquares.reduce(
            function(accumulator, currentValue, index, originalAray) {
                return accumulator + currentValue;
            }, 0
        );
        console.log(arraySum);

        // USING ARROW FUNCTION 
        let useArrorwFunctions = araryOfSquares.reduce(
            (accumulator, currentValue) => {
                return accumulator + currentValue;
            }, 0
        );

        // reduceRight() - works from RIGHT TO LEFT
        // else works same asa reduce()

        let sfdcArray = ['S', 'F', 'D', 'C'];

        let sfdcConcates = sfdcArray.reduceRight(
            function(accumulator, currentValue){
                return accumulator + currentValue;
            }
        );

        // user arrow function
        let reduceWithArrayFuction = sfdcArray.reduceRight(
            (accumulator, currentValue) => {
                return accumulator + currentValue;
            }
        );


        // SORT() MEHTOD MAKE CHANGES IN THE SAME ARRAY NOT RERURNS THE NEW ARRAY
        var araryOfSquares = [1, 4, 9, 16, 25, 36, 49, 64, 79, 100];    

        araryOfSquares.sort(
            function(a, b) {    
                return a - b; // sort in ascending order
            }
        );

        araryOfSquares.sort(
            function(a, b) {
                return b - a; // sort array in descending order
            }
        );

        araryOfSquares.sort(
            (a, b) => {

                return a - b;
            }   
        );

        // NOW SORT THE ARRAY OF OBJECTS

        const sfAccounts = [
            { id: 'acc1', name: 'TCS', rating: 'Warm', annualRevenue: 5000000, employees: 1200 },
            { id: 'acc2', name: 'Infosys', rating: 'Hot', annualRevenue: 8500000, employees: 2500 },
            { id: 'acc3', name: 'Wipro', rating: 'Cold', annualRevenue: 2300000, employees: 800 },
            { id: 'acc4', name: 'Cognizant', rating: 'Hot', annualRevenue: 9100000, employees: 3100 },
            { id: 'acc5', name: 'Tech Mahindra', rating: 'Warm', annualRevenue: 4200000, employees: 1500 }
        ];

        // sort based on numbers
        sfAccounts.sort(
            function(a, b) {
                return a.annualRevenue - b.annualRevenue;
            }
        );
        sfAccounts;

        // now lets sort based on the String values

        const sfAccountsStringSorting = [
            { id: 'acc2', name: 'Infosys', rating: 'Hot', annualRevenue: 8500000, employees: 2500 },
            { id: 'acc3', name: 'Wipro', rating: 'Cold', annualRevenue: 2300000, employees: 800 },
            { id: 'acc1', name: 'TCS', rating: 'Warm', annualRevenue: 5000000, employees: 1200 },
            { id: 'acc4', name: 'Cognizant', rating: 'Hot', annualRevenue: 9100000, employees: 3100 },
            { id: 'acc5', name: 'Tech Mahindra', rating: 'Warm', annualRevenue: 4200000, employees: 1500 }
        ];

        sfAccountsStringSorting.sort(
            (a, b) => {
                let lowerA = a.rating.toLowerCase();
                let lowerB = b.rating.toLowerCase();
                if(lowerA < lowerB) {
                    return -1;
                }
                if(lowerA > lowerB ) {
                    return 1;
                }
                return 0;
            }
        );

        // FUNCTIONS IN THE JAVASCRIPT
        // DECALATIONS 

        function fooBar(a, b) {
            return a + b;
        }
        fooBar(10, 20);

        function sayHello() {
            alert('Hello');
            return;
        }
        sayHello();

        let makeMeMorePositive = function youAreAlredyPositive() {  
            return 'Be Positive';
        }
        makeMeMorePositive();

        // closure
        let nestedFunction = function doFoo(name) {

            let innerReturn = function innerFunction() {
                return name;
            }
            return innerReturn;
        }
        console.log(nestedFunction('Vikas')()); // returns the inner function and the calls the inner function

        let nestedFunctionFunctionExpressions = function(name) {

            let innerReturn = function() {
                return name;
            }
            return innerReturn;
        }
        console.log(nestedFunctionFunctionExpressions('Vikas')()); 


        // fuction inside objcts

        let laptopInfo = {
            Name : 'HP Pavillion',
            Type : 'Gaming',
            Color : 'Black',
            RAM : 8,
            CORES : 4,
            ISUNDERCOVER : function() {

                return `${this.Name} is under cover`;
            },
            CameraWorking : true
        };
        laptopInfo.ISUNDERCOVER();

        // self calling functions 

        let selfcallingFunction = function secalling() {

            alert('self calling function is called');
        }();

        // unnamed functions OR function expressions

        let unnamedFuncs = function(name) {
            return name;
        }
        unnamedFuncs('Vikas Kare');

        // ARROW / FAT FUNCTIONS 

        let sumwithArrowFunctions = (a, b) => {
            return a + b;
        };
        sumwithArrowFunctions();

        let sumwithArrowFunctions1 = (a, b) => ({Name : 'Vikas'})
        sumwithArrowFunctions1(); // WILL RETURN WHOLE OBJECT

        () => 'HELLO';

        // LOG METHODS 

        let laptopInfoForLogging = {
            Name : 'HP Pavillion',
            Type : 'Gaming',
            Color : 'Black',
            RAM : 8,
            CORES : 4,
            ISUNDERCOVER : function() {

                return `${this.Name} is under cover`;
            },
            CameraWorking : true
        };

        console.log('laptopInfoForLogging -> ' , laptopInfoForLogging);
        console.table(laptopInfoForLogging);
        // console.error('Error from console.error ');
        console.debug(laptopInfoForLogging);

        console.group('GRP1'); // GROUPING OF THE LOGS
        console.log('Inside the GRP1');
        console.group('GRP-1-1');
        console.log('inside GRP-1-1');
        console.groupEnd('GRP-1-1');
        console.groupEnd('GRP1');

        fruits.forEach((item) => {
            console.log(item);
        });

        // setTimeOut and setInterwalMethod

        let testSetTimeOut = setTimeout(
            function() {
                alert('Hey Vikas Kare');
            }, 1000
        );

        // calling insiude another func
        function getCube(a) {
            alert('india');
            alert( a * a * a);
        }
        let cubeOf2 = setTimeout(() => getCube(2), 100000);
        let cubeOf3 = setTimeout(getCube, 4000, 2);    

        // setInterval();

        function printTime() {

            let date = new Date();
            let time = date.toLocaleTimeString();
            console.log('Time is ', time);
        }
        const printTimeProp = setInterval(printTime, 1000);

        // Classes in JS

        let classDef = class {

            
        }

        let classVariable = class Person {
            constructor(name) {
                this.name = name;
            }
            sayHello() {
                alert('Hello');
            }
        }
        let personInstance = new classVariable('VikasKare');

        // function constructor

        function Animal(name, age) {    
            this.name = name;
            this.age = age;
        }
        Animal.prototype.sayName = function() {

            alert(this.name);
        }

        let freddy = new Animal();
        freddy.sayHello();
        
        class User {
            constructor(name) {
                this.name = name;
            }
            sayHello() {
                alert(`Hey ${this.name}, How are you?`);
            }
        }
        class Admin extends User {
            constructor(name) {
                super(name);
            }
            sayHi() {
                alert(`Hey ${this.name}, How are you?`);
            }
        }
        let adminAmit = new Admin('Amit');
        adminAmit.sayHi();
        adminAmit.sayHello();

        // PRMISES IN THE JS 

        let newPromise = new Promise((resolved, rejected) => {
            resolved('Resolved');
            // rejected('Rejected');
        });

        // resilt will be passed to the .then method
        newPromise.then( (result) => {
            alert(result);
        }) .catch((error) => {
            alert(error);
        }).finally(() => {
            alert('Inside Finally Block');
        });

        //  promise.reject()
        Promise.reject(() => {
            new Error('Error Occured');
        }).then((result) => {
            alert(result);
        }).catch((error) => {
            alert('Error Occred', error);
        }).finally( () => {
            alert('Inside Finally');
        });

        // Promise.resolve()
        Promise.resolve((resovled) => {     
            alert('Promise is resolved'); // never works
        })
        .then(() => {
            alert('Yes promise is sucessfully resolved')
        }).catch( () => {
            alert('erorr Occured')
        }).finally( () => {
            alert('Inside Finally')
        });

        let promise1 = new Promise(
            function(resolve, reject) {
                setTimeout( () => {
                    resolve('Car 1 has completed the Race');
                }, 1000);
            }
        );
        let promise2 = new Promise(
            function(resolve, reject) {
                setTimeout( () => {
                    reject('Car 2 has completed the Race');
                });
            }
        );
        Promise.all([promise1, promise2])
        .then( (result) => {
            alert(result);
        })
        .catch( (error) => {
            alert(error);
        }) 
        .finally( () => {
            alert('Finally')
        } )

        // any([]) first completed promise will be retured in the result
        Promise.any([promise1, promise2])
        .then( (result) => {
            alert(result);
        })
        .catch( (error) => {
            alert(error);
        }) 
        .finally( () => {
            alert('Finally')
        } )

        // all settled
        Promise.allSettled([promise1, promise2])
        .then( (result) => {
            alert(result);
        })
        .catch( (error) => {
            alert(error);
        }) 
        .finally( () => {
            alert('Finally')
        } )

        // async functions - return the Promise.resolve()function
        // below both the functions are same
        async function ayncFinction() {
            return 1;
        }

        async function doAsycnCal() {
            return Promise.resolve(1);
        }

        async function testAwait() {
            let result = await doAsycnCal();
        }

        // QueuerySelector
        document.querySelector(".button2").style.backgroundColour = 'red';
        document.querySelector(".button2").style.color = "white";

        function handleOnClick(event) {
            alert('Onclick clicked');
            //document.querySelector(".para1").style.backgroundColor = "red";
            //document.querySelector(".para1").style.color = "green";
            let x;
            x = document.querySelectorAll(".para1"); 
            for(let i = 0; i < x.length; i++) {
                x[i].style.color = "green"
            }
            document.querySelector("#para3").style.color = "red";
            
            document.querySelector("#blankPara").innerHTML = "Hello India";
            
            let currentTarget = event.currentTarget;
            let target = event.target;
            console.log('currentTarget', currentTarget);
            console.log(currentTarget.dataset.recordId);
            console.log(currentTarget.dataset.recordName);
        }

        function handleOnChange(inputElement) {
            alert( inputElement.value);
            inputElement.value='Vikas Kare'.toUpperCase();
        }


        // cration the custom event and dispatching them

        let customEvent = new CustomEvent(
            "Start", {
                detail : {
                    countyName : "India"
                }
            }
        );

        this.dispatchEvent(customEvent);
    }
}