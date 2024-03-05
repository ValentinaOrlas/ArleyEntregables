let stocks ={
    fruits: [ 'fresa','uva','banano','manzana'],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
} 

let shopOpen = true;

let time = ms => {
    return new Promise((resolve,reject)=>{
        shopOpen ? setTimeout(resolve,ms) : reject(console.log("Tienda cerrada"))
    })
} 

let kitchen = async ()=>{

    try {
        await time(2000)
        console.log(`${stocks.fruits[0]} ha sido seleccionada`)

        await time(0.000)
        console.log("La producción ha comenzado")

        await time(2000)
        console.log("La fruta ha sido picada")

        await time(1000)
        console.log("Agregando agua y hielo");

        await time(1000)
        console.log("Iniciando operación");

        await time(2000)
        console.log(`Helado contenido en: ${stocks.holder[1]}`)

        await time(3000)
        console.log(`Topping es ${stocks.toppings[0]}`);

        await time(2000)
        console.log("Helado servido");

    } catch (error) {
        console.log("El cliente se fue");
    }
}

kitchen();