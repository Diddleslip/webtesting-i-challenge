module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  // console.log("THIS IS ITEM!", item);
  if(item === 20) {
    return item
  } else {
    item += 1;
  };

  return item;
}

function fail(item) {
  if(item < 15) {
    return item -= 5;
  } else if(item === 15 || item === 16) {
    return item -= 10;
  } else if(item > 16 || item <= 20) {
    return item -= 1;
  } else {
    return item;
  }
}

function repair(item) {
  // console.log("THIS IS ITEM!", item);
  item = 100;
  return item;
}

function get(item) {
  if(item.enhancement === 0) {
    return item.name;
  } else if(item.enhancement > 0) {
    return item.name = `[+${item.enhancement}] ${item.name}`
  }
}
