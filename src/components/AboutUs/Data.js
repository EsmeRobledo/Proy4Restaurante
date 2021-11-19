/**
 * Esta parte la realice con la ayuda de un tutorial aunque es un poco lago el y quiza un poco 
 * simple quise implementar esta parte de esta manera para mantener el dato de la reutilizacion
 * de codigo, en este archivo se pueden crear mas objetos de datos y ser enviados para 
 * agregar mas secciones en el area inicial con el scroll. :)
 */
export const homeObjOne ={
    id: 'about',
    lightBg: false, /**el falso nos regresa un background negro y el true uno color blanco */
    LightText: true,/**el falso nos regresa un color del texto negro y el true uno color blanco */
    LightTestDesc: true,
    topLine: 'Conocenos!!',
    headline: 'Ramen House es un restaurante familiar con el objetivo de traer un toque de sabor oriental a tu paladar.',
    description: 'Utilizando los ingredientes locales podemos darte el platillo de la mejor calidad y un excelente sabor',
    buttonLabel:'Back Home',
    imgStart: true,
    dark: true,/**estas variables pertenecen a las propiedades del hover par el boton */
    primary: true,
    darkText: false
}