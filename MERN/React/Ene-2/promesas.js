const noMondays = new Promise((resolve, reject) => {
    if (new Date().getDay() !== 1) {
        setTimeout(() => {
            resolve("Good, it's not Monday!");
        }, 10000);
    } else {
        reject("Someone has a case of the Mondays!");
    }
});
const viewDay = async () => {
    try {
        let res = await noMondays;
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

console.log("HOLA");
noMondays
    .then(res => console.log(res))
    .catch(err => console.log(err));

console.log("HOLA2");

console.log("HOLA3");
viewDay();
console.log("HOLA4");
