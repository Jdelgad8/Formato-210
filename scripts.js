let array50 = [
  document.getElementById("i43"),
  document.getElementById("i47"),
  document.getElementById("i44"),
  document.getElementById("i45"),
  document.getElementById("i49")
];

let array51 = [
  document.getElementById("i44"),
  document.getElementById("i45"),
  document.getElementById("i49"),
  document.getElementById("i43"),
  document.getElementById("i47")
];

let array53 = [document.getElementById("i50"), document.getElementById("i52")];

let array58 = [
  document.getElementById("i54"),
  document.getElementById("i55"),
  document.getElementById("i56"),
  document.getElementById("i57")
];

let array62 = [
  document.getElementById("i54"),
  document.getElementById("i59"),
  document.getElementById("i55"),
  document.getElementById("i56"),
  document.getElementById("i57"),
  document.getElementById("i61")
];

function calcs31() {
  let array = [document.getElementById("i29"), document.getElementById("i30")];
  if (Number(array[1].value) && Number(array[0].value)) {
    let operation = parseInt(array[0].value) - parseInt(array[1].value);
    if (operation < 0) {
      operation = 0;
    }
    document.getElementById("i31").value = operation;
    console.log(operation);
  } else {
    document.getElementById("i31").value = "";
  }
}

function calcs34() {
  let array = [document.getElementById("i32"), document.getElementById("i33")];
  if (Number(array[1].value) && Number(array[0].value)) {
    let operation = parseInt(array[0].value) - parseInt(array[1].value);
    if (operation < 0) {
      operation = 0;
    }
    document.getElementById("i34").value = operation;
    console.log(operation);
  } else {
    document.getElementById("i34").value = "";
  }
}

function calcs37() {
  let array = [document.getElementById("i34"), document.getElementById("i36")];
  if (Number(array[1].value) && Number(array[0].value)) {
    let operation = parseInt(array[0].value) - parseInt(array[1].value);
    if (operation < 0) {
      operation = 0;
    }
    document.getElementById("i37").value = operation;
    console.log(operation);
  } else {
    document.getElementById("i37").value = "";
  }
}

function calcs40() {
  let array = [document.getElementById("i38"), document.getElementById("i39")];
  if (Number(array[1].value) && Number(array[0].value)) {
    let operation = parseInt(array[0].value) - parseInt(array[1].value);
    if (operation < 0) {
      operation = 0;
    }
    document.getElementById("i40").value = operation;
    console.log(operation);
  } else {
    document.getElementById("i40").value = "";
  }
}

function calcs42() {
  let array = [document.getElementById("i40"), document.getElementById("i41")];
  if (Number(array[1].value) && Number(array[0].value)) {
    let operation = parseInt(array[0].value) - parseInt(array[1].value);
    if (operation < 0) {
      operation = 0;
    }
    document.getElementById("i42").value = operation;
    console.log(operation);
  } else {
    document.getElementById("i42").value = "";
  }
}

function calcs46() {
  let array = [
    document.getElementById("i43"),
    document.getElementById("i44"),
    document.getElementById("i45")
  ];
  if (
    Number(array[0].value) &&
    Number(array[1].value) &&
    Number(array[2].value)
  ) {
    let operation = parseInt(array[0].value) - parseInt(array[1].value);
    if (operation < 0) {
      operation = 0;
    }
    document.getElementById("i42").value = operation;
    console.log(operation);
  } else {
    document.getElementById("i42").value = "";
  }
}

// let i29 = document.getElementById("i29");
// let i30 = document.getElementById("i30");
// let i31 = document.getElementById("i31");
// let i32 = document.getElementById("i32");
// let i33 = document.getElementById("i33");
// let i34 = document.getElementById("i34");
// let i35 = document.getElementById("i35");
// let i36 = document.getElementById("i36");
// let i37 = document.getElementById("i37");
// let i38 = document.getElementById("i38");
// let i39 = document.getElementById("i39");
// let i40 = document.getElementById("i40");
// let i41 = document.getElementById("i41");
// let i42 = document.getElementById("i42");
// let i43 = document.getElementById("i43");
// let i44 = document.getElementById("i44");
// let i45 = document.getElementById("i45");
// let i46 = document.getElementById("i46");
// let i47 = document.getElementById("i47");
// let i48 = document.getElementById("i48");
// let i49 = document.getElementById("i49");
// let i50 = document.getElementById("i50");
// let i51 = document.getElementById("i51");
// let i52 = document.getElementById("i52");
// let i53 = document.getElementById("i53");
// let i54 = document.getElementById("i54");
// let i55 = document.getElementById("i55");
// let i56 = document.getElementById("i56");
// let i57 = document.getElementById("i57");
// let i58 = document.getElementById("i58");
// let i59 = document.getElementById("i59");
// let i60 = document.getElementById("i60");
// let i61 = document.getElementById("i61");
// let i62 = document.getElementById("i62");
// let i63 = document.getElementById("i63");
// let i64 = document.getElementById("i64");
// let i65 = document.getElementById("i65");
// let i66 = document.getElementById("i66");
// let i67 = document.getElementById("i67");
// let i68 = document.getElementById("i68");
// let i69 = document.getElementById("i69");
// let i70 = document.getElementById("i70");
// let i71 = document.getElementById("i71");
// let i72 = document.getElementById("i72");
// let i73 = document.getElementById("i73");
// let i74 = document.getElementById("i74");
// let i75 = document.getElementById("i75");
// let i76 = document.getElementById("i76");
// let i77 = document.getElementById("i77");
// let i78 = document.getElementById("i78");
// let i79 = document.getElementById("i79");
// let i80 = document.getElementById("i80");
// let i81 = document.getElementById("i81");
// let i82 = document.getElementById("i82");
// let i83 = document.getElementById("i83");
// let i84 = document.getElementById("i84");
// let i85 = document.getElementById("i85");
// let i86 = document.getElementById("i86");
// let i87 = document.getElementById("i87");
// let i88 = document.getElementById("i88");
// let i89 = document.getElementById("i89");
// let i90 = document.getElementById("i90");
// let i91 = document.getElementById("i91");
// let i92 = document.getElementById("i92");
// let i93 = document.getElementById("i93");
// let i94 = document.getElementById("i94");
// let i95 = document.getElementById("i95");
// let i96 = document.getElementById("i96");
// let i97 = document.getElementById("i97");
// let i98 = document.getElementById("i98");
// let i99 = document.getElementById("i99");
// let i100 = document.getElementById("i100");
// let i101 = document.getElementById("i101");
// let i102 = document.getElementById("i102");
// let i103 = document.getElementById("i103");
// let i104 = document.getElementById("i104");

// // i30 = 300;
// if (typeof i30 == Int) {
//   const s = parseInt(i29.value) - parseInt(i30.value);
//   document.getElementById("i31").value = s;
// }
// //  = s;

// console.log(i31);

// if (i31 < 0) {
//   i31 = 0;
// }

// i34 = i32 - i33;

// i37 = i34 - i36;

// i40 = i38 - i39;

// i42 = i40 - i41;

// i46 = i43 - i44 - i45;

// i50 = i43 + i47 - i44 - i45 - i49;

// if (i50 < 0) {
//   i50 = 0;
// }

// i51 = i44 + i45 + i49 - i43 - i47;
// if (i51 < 0) {
//   i51 = 0;
// }

// if (50 == 0) {
//   i53 = 0;
// } else {
//   i53 = i50 - i52;
// }

// i58 = i54 - i55 - i56 - i57;

// i62 = i54 + i59 - i55 - i56 - i57 - i61;
// if (i62 < 0) {
//   i62 = 0;
// }

// i63 = i55 + i56 + i57 + i61 - i54 - i59;
// if (i63 < 0) {
//   i63 = 0;
// }

// if (i62 == 0) {
//   i66 = i65;
// } else {
//   i66 = i62 - i64 + i65;
// }

// i69 = i67 - i68;

// i74 = i69 + i70 + i71 + i72 - i73;

// i75 = i37 + i42 - i53 + i66 + i74;

// i80 = i77 - i78 - i79;

// i86 = i81 + i82 + i83 + i84 + i85;

// i92 = i89 + i90 + i91;

// i93 = i88 - i92;

// i96 = i93 + i94 - i95;

// i101 = i96 + i100 - i97 - i98 - i99;
// if (i101 < 0) {
//   i101 = 0;
// }

// i103 = i96 + i100 + i102 - i97 - i98 - i99;
// if (i103 < 0) {
//   i101 = 0;
// }

// i104 = i97 + i98 + i99 - i96 - i100 - i102;
// if (i104 < 0) {
//   i101 = 0;
// }
// }
