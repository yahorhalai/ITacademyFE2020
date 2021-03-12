var util3 = 544.5;
var util5 = 816.7;

function getSum(vE, price, age, uk140, electro) {

  let under3;
  var ae;
  var ap;
  // присвоить цену и объём
  if (price <= 8500) {
    ae = vE * 2.5;
    ap = price * 0.54
  } else if (price <= 16700) {
    ae = vE * 3.5;
    ap = price * 0.48
  } else if (price <= 42300) {
    ae = vE * 5.5;
    ap = price * 0.48;
  } else if (price <= 84500) {
    ae = vE * 7.5;
    ap = price * 0.48;
  } else if (price <= 169000) {
    ae = vE * 15;
    ap = price * 0.48;
  } else if (169000 < price) {
    ae = vE * 20;
    ap = price * 0.48;
  };
  if (ae <= ap) {
    under3 = ap
  } else {
    under3 = ae
  }


  let under5 = vE;

  if (vE <= 1000) {
    under5 = vE * 1.5
  } else if (vE <= 1500) {
    under5 = vE * 1.7
  } else if (vE <= 1800) {
    under5 = vE * 2.5
  } else if (vE <= 2300) {
    under5 = vE * 2.7
  } else if (vE <= 3000) {
    under5 = vE * 3
  } else if (3000 < vE) {
    under5 = vE * 3.6
  }

  let more5 = vE;

  if (vE <= 1000) {
    more5 = vE * 3
  } else if (vE <= 1500) {
    more5 = vE * 3.2
  } else if (vE <= 1800) {
    more5 = vE * 3.5
  } else if (vE <= 2300) {
    more5 = vE * 4.8
  } else if (vE <= 3000) {
    more5 = vE * 5
  } else if (3000 < vE) {
    more5 = vE * 5.7
  }

  let result;
  if (uk140) {
    if (age < 3) {
      result = (under3 * 0.5 + util3)
    } else if (age < 5) {
      result = (under5 * 0.5 + util5)
    } else if (5 < age) {
      result = (more5 * 0.5 + util5)
    }
  } else if (electro) {
    if (age < 3) {
      result = (util3)
    } else {
      result = (util5)
    }
  } else {
    if (age < 3) {
      result = (under3 + util3)
    } else if (age < 5) {
      result = (under5 + util5)
    } else if (5 < age) {
      result = (more5 + util5)
    }
  }

  return result;
}