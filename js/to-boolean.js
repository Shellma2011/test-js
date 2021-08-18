//////// любое строчное значение К БУЛЮ -- true 

// 1й способ -- через конструктор Boolean

let value1 = "bla";

let newValue1 = Boolean(value1);
console.log(newValue1, typeof newValue1)

// 2й способ -- через двойное отрицание !!

let value2 = "bla";

let newValue2 = !!value2;
console.log(newValue2, typeof newValue2)

//////// любое строчное число К БУЛЮ -- true 

// 1й способ -- через конструктор Boolean

let value3 = "123";

let newValue3 = Boolean(value3);
console.log(newValue3, typeof newValue3)

// 2й способ -- через двойное отрицание !!

let value4 = "123";

let newValue4 = !!value4;
console.log(newValue4, typeof newValue4)

//////// пустая строка К БУЛЮ -- FALSE 

// 1й способ -- через конструктор Boolean

let value5 = "";

let newValue5 = Boolean(value5);
console.log(newValue5, typeof newValue5)

// 2й способ -- через двойное отрицание !!

let value6 = "";

let newValue6 = !!value6;
console.log(newValue6, typeof newValue6)

//////// строка с пробелом (не пустая) К БУЛЮ -- true 

// 1й способ -- через конструктор Boolean

let value7 = " ";

let newValue7 = Boolean(value7);
console.log(newValue7, typeof newValue7)

// 2й способ -- через двойное отрицание !!

let value8 = " ";

let newValue8 = !!value8;
console.log(newValue8, typeof newValue8)

//////// число 0 К БУЛЮ -- FALSE 

// 1й способ -- через конструктор Boolean

let value9 = 0;

let newValue9 = Boolean(value9);
console.log(newValue9, typeof newValue9)

//////// число 1 К БУЛЮ -- true 

// 1й способ -- через конструктор Boolean

let value10 = 1;

let newValue10 = Boolean(value10);
console.log(newValue10, typeof newValue10)

//////// значение undefined К ЧИСЛУ -- FALSE 
let value11 = undefined;

let newValue11 = Boolean(value11);
console.log(newValue11, typeof newValue11)

//////// значение null К ЧИСЛУ -- FALSE 
let value12 = null;

let newValue12 = Boolean(value12);
console.log(newValue12, typeof newValue12)

///////////// значение null К ЧИСЛУ -- FALSE 
///////////// значение undefined К ЧИСЛУ -- FALSE 
///////////// число 0 К БУЛЮ -- FALSE 
///////////// пустая строка К БУЛЮ -- FALSE 
///////////// NaN К БУЛЮ -- FALSE 
///////////// false К БУЛЮ -- FALSE 
//////// число 1 К БУЛЮ -- true 
//////// строка с пробелом (не пустая) К БУЛЮ -- true 
//////// любое строчное значение К БУЛЮ -- true 
//////// любое строчное число К БУЛЮ -- true 