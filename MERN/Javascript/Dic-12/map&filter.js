

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const zapatillas = [
    {
        marca: "Adidas",
        referencia: "Men's Barricade Clay Tennis Shoe",
        price: 97,
    },
    {
        marca: "Adidas",
        referencia: "Women's Barricade Tennis Shoe",
        price: 89,
    },
    {
        marca: "Adidas",
        referencia: "Unisex-Child Barricade Tennis Shoe",
        price: 61,
    },
    {
        marca: "Adidas",
        referencia: "Men`s Barricade Tennis Shoes Arctic Fusion and Lucid Lemon",
        price: 112,
    },
    {
        marca: "Nike",
        referencia: "Men's Defiant Speed Tennis Shoe",
        price: 89,
    },
]
/* MAP */

const doble = nums.map((value, index, arr) => {
    return value * 2;
});
console.log(doble);

const generarPlantilla = (item) => {
    return `
        <div>
            <h2>${item.marca}</h2>
            <h3>${item.referencia}</h3>
            <h1>${item.price}</h1>
        </div>
        `
}


const plantillas = zapatillas.map((item, index, arr) => {
    return generarPlantilla(item);
})

console.log(plantillas);

const doble_de_pares = nums.map((item, index, arr) => {
    if (index % 2 == 0) {
        return item * 2;
    }
    return item;
})
console.log(doble_de_pares);


/* Filter */


const impares = nums.filter((item, index, arr) => {
    return item % 2 != 0 && item > 5;
})
console.log(impares);


const baratas = zapatillas.filter((item, index, arr) => {
    return item.price > 75 && item.price < 100 && item.marca === "Adidas";
})/* .map((item) => generarPlantilla(item)); */

console.log(baratas);