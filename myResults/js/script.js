const obj = [
  { name: "Jonny Walker", birthDate: "1995-12-17" },
  { name: "Andrew", birthDate: "2001-10-29" }
];

function searchByName(a) {
  obj.forEach(function(elem) {
    if (elem.name === a) {
      console.log(elem);
    }
  });
}

console.log(searchByName("Jonny Walker"));

// ---------------------------------------------------------------------------

const res = obj.find(s => s.name === "Andrew");
console.log(res);

// ---------------------------------------------------------------------------

let olderGuy = obj[0].birthDate;

for (let item of obj) {
  if (item.birthDate < olderGuy) {
    olderGuy = item.birthDate;
  }
}

console.log(parseInt(olderGuy) - 2020);
