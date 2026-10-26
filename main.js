function createPriceTag(initialPrice) {
  let currentPrice = initialPrice;

  return function changePrice(action, amount) {
    if (action == "add") {
      currentPrice += amount;
    } else if (action == "sub") {
      currentPrice -= amount;
    } else if (action == "get") {
      return currentPrice;
    }
  };
}

function formatCurrency(position) {
  return function(symbol) {
    return function(value) {
      if (position == "before") {
        return symbol + " " + value;
      } else if (position == "after") {
        return value + " " + symbol;
      }
    };
  };
}
function renderPriceTag(tagManager, formatterCallback){ 
    let rawPrice = tagManager("get");
    let formattedPrice = formatterCallback(rawPrice);
    console.log("ЦЕНА НА САЙТЕ: " + formattedPrice);
}
const myTag = createPriceTag(5000);

myTag("add", 1300);
const rubFormat = formatCurrency("after")("₽");
renderPriceTag(myTag, rubFormat);



