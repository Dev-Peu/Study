const date = new Date();
const formattedDate = new Intl.DateTimeFormat("pt-BR", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(date);

console.log(date);
console.log(formattedDate);
