// 14.	צרו פונקציה שמדפיסה אלמנט P עם id, עטוף ב div לחלון לאחר 10 שניות,
//  צרו כפתור שלחיצה עליו מבטלת את ה setTimeout .

// var container;
// function printEver4Second(){
//     container = setTimeout(() => {
//         document.write(`<p id="prinring">trtrtrtrtrtrtrtrt</p>`);
// }, 5000);
// }

// printEver4Second();

// stopButton.onclick=()=>{
//     clearTimeout(container)
// }

// =============================================================================

// var word ="hello timers";
// var char = 0;

// function printingWord (){
//     var setIntervalWord = setInterval(() => {
//         document.write(`<id="paragraphOfWord>${word[char++]}`);
//         if(word.length-1<char){
//             clearInterval(setIntervalWord)
//         }
//     }, 1000);
// }
// printingWord()

// =============================================================================

// clockPara

// function oclockTimer() {
//     var timerObject = new Date();
//     var interval = setInterval(() => {
//         clockPara.innerText = `${timerObject.getHours()}:${timerObject.getMinutes()}:${timerObject.getSeconds()}`
//     }, 1000);
// }

// oclockTimer()

// function timerShow() {
//    setInterval(() => {
//         clockPara.innerText= `${Date().getMonth}`
//     }, 1000);
// }

// timerShow()
// =============================================================================

// 16.	צרו אלמנט של טקסט, שהטקסט "hello timers" מופיע בו אות אחר אות

// var word="hello timers";
// var counter = 0;

// function printingWord() {
//     var interval = setInterval(() => {
//         clockPara.innerText += `${word[counter++]}`
//         if(word.length-1 < counter ){
//             clearInterval(interval)
//         }
//     }, 1000);
// }

// printingWord()

// ====================================================================================
// 13.	צרו פונקציה שמדפיסה ב alert הודעה לאחר 10 שניות, צרו כפתור שלחיצה עליו מבטלת את ה alert שאמור לקפוץ.

// var alertStop;

// function alertPop() {
//     alertStop = setInterval(() => {
//         alert("pop message");
//     }, 5000);
// }

// stopButton.onclick = () => {
//   clearInterval(alertStop);
// };

// alertPop();

// ====================================================================================
// 1.	צרו מערך של אובייקטים אשר מיצגים כל אחד ספר.

// var books = [
//   { bookName: "הארי פוטר", writer: "A", pagesInBook: 500 },
//   { bookName: "הארי פוטר", writer: "U", pagesInBook: 500 },
//   { bookName: "סינדרלה", writer: "E", pagesInBook: 100 },
//   { bookName: "שלגיה ו7 הגמדים", writer: "C", pagesInBook: 200 },
//   { bookName: "כיפה אדומה", writer: "M", pagesInBook: 300 },
//   { bookName: "היפה והחיה", writer: "D", pagesInBook: 400 },
// ];

// console.log(books[0].bookName);

// for (let i = 0; i < books.length; i++) {
//   paraOfPrint.innerText += `${books[i].bookName} , ${books[i].writer} , ${books[i].pagesInBook}
//     `;
// }

// 4.	הוסיפו לתוכנית פונקציה שלוקחת מהמשתמש כותב/ת, שם ספר ומספר דפים ומוסיפה אובייקט חדש למערך.
// debugger;
// function addToArray() {
//     var objectAdd={};
//     objectAdd.bookName= prompt("הכנס ספר:");
//     objectAdd.writer=prompt("הכנס את שם הכותב :");
//     objectAdd.pagesInBook= Number(prompt("הכנס כמות עמודים:"))
//     books.push(objectAdd);
// }

// ;

// 5.	קראו לפונקציה 5 פעמים והדפיסו למסך שוב(כמו בסעיף 3).
// debugger

// function print3Time(array) {
//     if(counter < 5) {
//         var counter = 0;
//     for (let i = 0; i < array.length; i++) {
//         document.write(`${array[i].bookName} , ${array[i].writer}, ${array[i].pagesInBook}
//         `)
//         counter++
//     }
// }}

// print3Time(books);

// Alphabet Order

// function AlphabetOrder(array) {
//     array.sort();
// }

// console.log(AlphabetOrder(books.writer));

// books.sort(function(a,b){
//     return a.writer - b.writer
// })

// var x= books.sort()
// console.log(x);

// ====================================================================================
// function changeLocation(num1 , num2){
// //    var mestane1 =num1 ;//2
// //    var mestane2=num2;//5
//    mestane1 = num2;
//    mestane2=num1
//    console.log(mestane1 , mestane2)
// }

// changeLocation(12,50);

// ====================================================================================

// function modulu(first , second) {
//     var resuls = first % second;
//     console.log(resuls);
// }

// modulu(7,7)
// ====================================================================================
// function printUpTo100() {
//     for (let i = 0; i < 100; i++) {
//         console.log(i);
//     }
// }

// printUpTo100()

// ====================================================================================
// כתבו פונקציה שקולטת מהמשתמש אורך וגובה של מלבן ומדפיסה את המלבן בעזרת כוכביות. לדוגמא עבור גובה של 3 ורוחב של 5 יודפס מה שמופיע בעמודה הבאה

// function stars(width , hight) {
//   var srting = "*";
//   if (width  > 0) {
//     for (let i = 0; i < width ; i++) {
//       console.log(`${srting}`);
//     }
//     if (hight > 0) {
//       for (let i = 0; i < hight; i++) {
//           console.log(srting);
//       }
//     }
//   }
// }

// stars(prompt("width :"), prompt("hight"));

// ====================================================================================

// צרו מערך של 10 שמות פרטיים מהכיתה וסדרו אותו אלפביתית.
// Alphabet Order
// var names=["eden" , "daniel" , "oshra" , "shirly" , "selam", "lior" , "ofir" , "ronit" , "yafit"];
// console.log(names.sort());

// ====================================================================================
// צרו מערך רנדומלי של 10 גילים וסדרו אותו לפי סדר יורד.
// var ages = [10, 20, 30, 40, 60, 12, 88, 97, 41];

// var y = ages.sort(function (a, b) {
//   return b - a;
// });

// console.log(y);

// ====================================================================================

// function nameAndAge(array1 , array2){
//   return [`${array1[0]},${array2[0]},${array1[1]},${array2[1]},${array1[2]},${array2[2]},${array1[3]},${array2[3]},${array1[4]},${array2[4]},${array1[5]},${array2[5]},${array1[6]},${array2[7]},${array1[8]},${array2[8]}`]
// }
// var x = nameAndAge(names , ages);
// console.log(x);

// ====================================================================================

// 1.	צרו פונקציה שמקבלת סטרינג ובמידה והוא ארוך מ5 תווים היא מחזירה "long" אחרת "short".

// function stringReturn (string){
//     if(string.length > 5){
//         return "long"
//     }
//     else{
//         return "short"
//     }
// }

// var x = stringReturn(prompt("enter srting"));
// console.log(x);

// =========================================================================================
// 2.	צרו פונקציה שמקבלת סטרינג, במידה והסטרינג מכיל את התו "a", היא מחזירה את המיקום של התו אחרת היא מחזירה את ההודעה "not found".

// function isAaExsist(string) {
//   //eden a
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == "a") {
//       return `המיקום של A הוא: ${[i]}`;
//     }
//   }
//   return "not found";
// }

// var x = isAaExsist(prompt("Enter srting:"));
// console.log(x);

// =========================================================================================
// 1.	צרו פונקציה שמקבלת מהמשתמש שם וגיל. הפונקציה מדפיסה ללוג אובייקט של person עם השדות והערכים שהתקבלו מהמשתמש.
// var arrayOfPerson = [];

// function objectPerson(name , age){
//     var object={
//         name : name.value,
//         age : age.value
//     }
//     arrayOfPerson.push(object)
//     console.log(arrayOfPerson);
// }

// objectPerson(prompt("Enter name:"),prompt("Enter age:"));

// =========================================================================================

// inputId.value ;

// buttonId.onclick=()=>{
//     console.log(inputId.value );

// }

// =========================================================================================

// צרו מערך של 10 שמות פרטיים מהכיתה וסדרו אותו אלפביתית.

// var names = ["eden" , "daniel" , "ronit" , "ronrm" , "ofir" , "yafit" , "keren" , "tal" , "noam"];

// var alphabet= names.sort();

// console.log(alphabet);

// =========================================================================================

// 1.	כתבו פונקציה שמקבלת שני מערכים  של מספרים

// function getTwoArray(array1 , array2) {
//     console.log(array1,array2);
// }

// getTwoArray(ages,names);

// =========================================================================================

// 2.	ומעתיקה איברים ממערך אחד לשני אם הם בעלי אותו אורך.
// var names = ["eden" , "daniel" , "ronit" , "ronrm" , "ofir" , "yafit" , "keren" , "tal" , "noam"];
// var ages = [10, 20, 30, 40, 60, 12, 88, 97, 41 , "ronrm" , "ofir" , "yafit" , "keren" , "tal"];

// function ifSameLengthReplace(array1 , array2) {
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if(array1[i].length == array2[j].length){
//                 var pushInArray= array1[i].push(array2);
//                 console.log(pushInArray);
//             }

//         }
//     }
// }

// ifSameLengthReplace(names,ages)
// =========================================================================================

// 1.	הוסיפו כפתור שמזיז את האלמנט   שמאלה.
var left = 0;
function movingBox() {
  divIdBox.style.left = `${left++}px`;
}

var interval = setInterval(() => {
  movingBox();
}, 50);

buttonID.onclick = () => {
  clearInterval(interval);
};

// 2.	צרו מערך של תמונות.

var arrayOfImg = [
  "https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331__340.jpg",
  "https://cdn.pixabay.com/photo/2019/04/26/01/03/female-lion-4156445__340.jpg",
  "https://cdn.pixabay.com/photo/2021/08/25/07/23/nature-6572635__340.jpg",
  "https://cdn.pixabay.com/photo/2019/08/22/10/35/wild-4423158__340.jpg",
  "https://cdn.pixabay.com/photo/2021/08/03/07/02/bee-6518669__340.jpg",
  "https://cdn.pixabay.com/photo/2020/01/30/12/27/st-petersburg-4805295__340.jpg",
  "https://cdn.pixabay.com/photo/2021/08/23/07/38/castle-6566978__340.jpg",
];

// 3.	צרו סליידר שהתמונות בו מתחלפות כל 2 שניות בצורה אוטומטית.

// buttonNextID.onclick(){

// }
// var i = 0;
// function passImg() {
//   imgID.src = arrayOfImg[i];
//   i++;
//   if (i > arrayOfImg.length) {
//     i = 0;
//   }
// }

// setInterval(() => {
//   passImg();
// }, 2000);

// 4.	צרו כפתור "next" שמביא את התמונה הבאה וכפתור "previous" לתמונה הקודמת.
j = 0;
imgID.src = arrayOfImg[j++];
buttonNextID.onclick = () => {
  imgID.src = arrayOfImg[j++];
  if (j >= arrayOfImg.length) {
    j = 0;
  }
};
buttonBackID.onclick = () => {
  imgID.src = arrayOfImg[j--];
  if (j <= 0) {
    j = 0;
  }
};

// 5.	צרו כפתור שמתחיל את המעברים וכפתור שעוצר את המעברים.
i = 0;

var interval;
imgID.src = arrayOfImg[i];
buttonStartID.onclick = () => {
interval = setInterval(() => {
    imgID.src = arrayOfImg[i];
    i++;
    if (i >= arrayOfImg.length) {
      i = 0;
    }
  }, 1000);
  buttonStopID.onclick = () => {
    clearInterval(interval);
  };
};

// 6.	צרו כפתור שמשנה את סוג האנימציה במעברים.

buttonChangeID.onclick = () => {
  divIdBox.style.backgroundColor = "purple";
  divIdBox.style.border = "6px solid black";
  divIdBox.style.borderRadius = "450%";
};

// 7.	צרו כפתור שמערבב את סדר התמונות.
// לא צלחתי
var randomImg = Math.floor(Math.random() * 6);
m = 0;

buttonchangOrderID.onclick = () => {
  for (let i = 0; i < 6; i++) {
    imgID.src = arrayOfImg[randomImg];
  }
};

// 8.	צרו מנגנון שמאפשר למשתמש לבחור איזה תמונה לראות.

selenctID.onchange = () => {
  imgID.src = arrayOfImg[selenctID.value];
};

// 9.	צרו כותרת שנעה מעל התמונות הלוך ושוב משמאל לימין.

// headlineMoving

var leftMoving = 0;
function movimg() {
  headlineMoving.style.left = `${leftMoving++}px`;
}
buttonStartID
// הצלחה חלקית
var movingInterval = setInterval(() => {
  movimg();
  if (leftMoving > 101) {
    clearInterval(movingInterval);
    if (leftMoving < 100) {
      headlineMoving.style.right = `${leftMoving--}px`;
    }
  }
}, 50);
// 10.	רחיפה מעל הכותרת עוצרת אותה וצובעת בצבע אחר.
// הצלחה חלקית:
const headlineMoving = document.getElementById("headlineMoving");


headlineMoving.addEventListener("mouseenter" , function(event) {
    event.target.style.color = "purple";
    clearInterval(movingInterval);

})
// 11.	הוסיפו מנגנון שבעת רחיפה על תמונה, האנימציה עוצרת והתמונה גדלה.
// באמצעות CSS

imgID.onmouseover=(event)=>{
 event.target.style.width = "600px";
    event.target.style.height = "500px";
    clearInterval(interval);

} 
   
