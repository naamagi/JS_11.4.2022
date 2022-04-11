
const myCountry = {
  country: "Ecuador",
  capital: "Quito",
  language: "Spanish",
  population: 17715822,
  neighbours: ["colombia", "peru"],
  describe() {
    console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language}, they 
             have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsland() {
    this.neighbours.length === 0
      ? (myCountry["isIsland"] = true)
      : (myCountry.isIsland = false);
  },
};

myCountry.describe();
console.log(myCountry);
myCountry.checkIsland();
console.log(myCountry);
