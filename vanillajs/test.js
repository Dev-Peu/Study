// const date = new Date();
// const formattedDate = new Intl.DateTimeFormat("pt-BR", {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// }).format(date);

// console.log(date);
// console.log(formattedDate);

const price = 25321.35;

const fPrice = new Intl.NumberFormat("pt-br", {}).format(price);

console.log(fPrice);
