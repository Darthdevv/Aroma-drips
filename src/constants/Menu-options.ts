import drink1 from '@/assets/images/HomeItems/drink1.png';
import drink2 from '@/assets/images/HomeItems/drink2.png';
import drink3 from '@/assets/images/HomeItems/drink3.png';
import drink4 from '@/assets/images/HomeItems/drink4.png';
import drink5 from '@/assets/images/HomeItems/drink5.png';
import drink6 from '@/assets/images/HomeItems/drink6.png';
import drink7 from '@/assets/images/HomeItems/drink7.png';
import Ellipse1 from '@/assets/images/Coffee/Ellipse 1.png';
import Ellipse2 from '@/assets/images/Coffee/Ellipse 2.png';
import Ellipse3 from '@/assets/images/Coffee/Ellipse 3.png';
import Ellipse4 from '@/assets/images/Coffee/Ellipse 4.png';
import Ellipse5 from '@/assets/images/Coffee/Ellipse 5.png';
import Ellipse6 from '@/assets/images/Coffee/Ellipse 6.png'
import Ellipse7 from '@/assets/images/Coffee/Ellipse 7.png';
import Ellipse8 from '@/assets/images/Coffee/Ellipse 8.png';
import Ellipse9 from '@/assets/images/Coffee/Ellipse 9.png';
import Ellipse10 from '@/assets/images/Coffee/Ellipse 10.png';
import Ellipse11 from '@/assets/images/Coffee/Ellipse 11.png';
import Ellipse12 from '@/assets/images/Coffee/Ellipse 12.png';
import Ellipse13 from '@/assets/images/Coffee/Ellipse 13.png';
import Ellipse14 from '@/assets/images/Coffee/Ellipse 14.png';
import Americano from '@/assets/images/IceCoffe/Americano.png';
import ClassicLatte from '@/assets/images/IceCoffe/Classic Latte.png';
import ColdBrew from '@/assets/images/IceCoffe/Cold Brew.png';
import HoneyCoffeMilkFoam from '@/assets/images/IceCoffe/Honey Coffee milk foam.png';
import IcedMatchaLatte from '@/assets/images/IceCoffe/Iced Matcha Latte.png';
import Mocha from '@/assets/images/IceCoffe/Mocha.png'
import SpanishLatte from '@/assets/images/IceCoffe/Spanish Latte.png';
import StrawberryAndMocha from '@/assets/images/IceCoffe/Strawberry & Mocha.png';
import StrawBeryAndMatch from '@/assets/images/IceCoffe/strawberry Matcha 1.png';
import WhiteMoka from '@/assets/images/IceCoffe/White Mocha.png';
import BelgiumChocolate from '@/assets/images/Milkshakes/Belgium Chocolate.png';
import CheeseCake from '@/assets/images/Milkshakes/Cheese Cake.png';
import Coffe from '@/assets/images/Milkshakes/Coffee.png';
import FrenchVanilla from '@/assets/images/Milkshakes/French Vanilla.png';
import Hazelnut from '@/assets/images/Milkshakes/Hazelnut & White Chocolate.png';
import Kinder from "@/assets/images/Milkshakes/Kinder n' Ferrero Rocher.png";
import Mango from '@/assets/images/Milkshakes/Mango.png';
import OreoCookies from '@/assets/images/Milkshakes/Oreo Cookies.png';
import Pistachio from '@/assets/images/Milkshakes/Pistachio.png';
import SaltedCaramel from '@/assets/images/Milkshakes/Salted Caramel.png';
import StrawBerry from '@/assets/images/Milkshakes/Srawberry.png';
import ChocolateOreo from '@/assets/images/Milkshakes/chocolate oreo.png';
import MangoSmoothy from '@/assets/images/Smothies/Mango.png';
import MixBerriesSmoothy from '@/assets/images/Smothies/Mix Berries.png';
import Pinacolada from '@/assets/images/Smothies/Pinacolada.png';
import Strawberry from '@/assets/images/Smothies/Strawberry.png';
import TropicalFruitsSmoothy from '@/assets/images/Smothies/Tropical Fruits.png';
import WatermelonSmoothy from '@/assets/images/Smothies/Watermelon.png';
import Classic from '@/assets/images/Mojito/Classic.png';
import MixBerries from '@/assets/images/Mojito/Mix Berries.png';
import RedbullPassion from '@/assets/images/Mojito/Redbull Passion Fruit Mango Mint.png';
import RedbullPeach from '@/assets/images/Mojito/Redbull Peach Cherry.png';
import Redbull from '@/assets/images/Mojito/Redbull.png';
import LemonMint from '@/assets/images/Breezers/Lemon Mint Ice Tea.png';
import MixBerriesBreezer from '@/assets/images/Breezers/Mix Berries Ice Tea.png';
import PeachIce from '@/assets/images/Breezers/Peach Ice Tea.png';
import ClassicFrappe from '@/assets/images/Frappe/Classic Latte (1).png';
import MochaFrappe from '@/assets/images/Frappe/Mocha (1).png';
import PistachioFrappe from '@/assets/images/Frappe/Pistachio (1).png';
import SpanishLatteFrappe2 from '@/assets/images/Frappe/Spanish Latte (1).png';
import SpanishLatteFrappe from '@/assets/images/Frappe/Spanish Latte (2).png';
import musrom from '@/assets/images/Options/Masrum.png';
import spince from '@/assets/images/Options/Spince.png';
import pepper from '@/assets/images/Options/Pepper.png';



/**
 * @file menu-options.ts
 * @description Defines the data structure for drink and food items available in the menu, 
 * including images, descriptions, prices, and categories.
 */

/**
 * @interface CoffeeItem
 * @description Represents a drink or food item in the menu.
 * @property {number} id - Unique identifier for the product.
 * @property {string} name - Name of the product.
 * @property {string} description - Short description of the product.
 * @property {number} price - Price of the product in LE (Local Currency).
 * @property {string} imageUrl - URL of the product image.
 * @property {string} category - Category of the product.
 */



interface CoffeeItem {
    id: number;
    name: string;
    description?: string;
    price: number;
    imageUrl: string;
    category?: string;
}




/**
 * @interface Options
 * @description Represents additional options available for customization.
 * @property {number} id - Unique identifier for the option.
 * @property {string} name - Name of the option.
 * @property {string} imageUrl - URL of the option image.
 * @property {number} price - Additional price for the option.
 */








interface Options {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}



/**
 * @interface Sizes
 * @description Represents available drink sizes.
 * @property {string} name - Name of the size.
 */






interface Sizes {
    name: string;
}




/**
 * @constant Drinks
 * @description Array of available drink categories in the menu.
 */

export const Drinks = [
    { id: 1, image: drink1, name: 'Hot Coffee' },
    { id: 2, image: drink2, name: 'Iced Coffee' },
    { id: 3, image: drink3, name: 'Frappe' },
    { id: 4, image: drink4, name: 'Mojito' },
    { id: 5, image: drink7, name: 'Breezers' },
    { id: 6, image: drink5, name: 'Smoothies' },
    { id: 7, image: drink6, name: 'Milk Shakes' },
];


/**
 * @constant coffeeItems
 * @description Array of hot coffee products with details.
 */

export const coffeeItems: CoffeeItem[] = [
    {
        id: 1,
        name: "Ristretto",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 20,
        imageUrl: Ellipse1,
        category: "Hot Coffee"
    },
    {
        id: 2,
        name: "Espresso Single",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 25,
        imageUrl: Ellipse2,
        category: "Hot Coffee"
    },
    {
        id: 3,
        name: "Americano",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 30,
        imageUrl: Ellipse3,
        category: "Hot Coffee"
    },
    {
        id: 4,
        name: "French Press",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 35,
        imageUrl: Ellipse4,
        category: "Hot Coffee"
    },
    {
        id: 5,
        name: "Macchiato",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 25,
        imageUrl: Ellipse5,
        category: "Hot Coffee"
    },
    {
        id: 6,
        name: "Cortado",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 28,
        imageUrl: Ellipse6,
        category: "Hot Coffee"
    },
    {
        id: 7,
        name: "Flat White",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 30,
        imageUrl: Ellipse7,
        category: "Hot Coffee"
    },
    {
        id: 8,
        name: "Cappuccino",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 30,
        imageUrl: Ellipse8,
        category: "Hot Coffee"
    },
    {
        id: 9,
        name: "Classic Latte",
        price: 32,
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        imageUrl: Ellipse9,
        category: "Hot Coffee"
    },
    {
        id: 10,
        name: "Spanish Latte",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 35,
        imageUrl: Ellipse10,
        category: "Hot Coffee"
    },
    {
        id: 11,
        name: "Mocha",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 30,
        imageUrl: Ellipse11,
        category: "Hot Coffee"
    },
    {
        id: 12,
        name: "Espresso Double",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 35,
        imageUrl: Ellipse12,
        category: "Hot Coffee"
    },
    {
        id: 13,
        name: "Matcha Latte",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 40,
        imageUrl: Ellipse13,
        category: "Hot Coffee"
    },
    {
        id: 14,
        name: "White Mocha",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 38,
        imageUrl: Ellipse14,
        category: "Hot Coffee"
    },
];






/**
 * @constant iceCoffeeItems
 * @description Array of iced coffee products with details.
 */







export const iceCoffeeItems: CoffeeItem[] = [
    {
        id: 15,
        name: "Americano",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 20,
        imageUrl: Americano,
        category: "Iced Coffee"
    },
    {
        id: 16,
        name: "Classic Latte",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 25,
        imageUrl: ClassicLatte,
        category: "Iced Coffee"
    },
    {
        id: 17,
        name: "Cold Brew",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 30,
        imageUrl: ColdBrew,
        category: "Iced Coffee"
    },
    {
        id: 18,
        name: "Honey Coffee Milk Foam",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 35,
        imageUrl: HoneyCoffeMilkFoam,
        category: "Iced Coffee"
    },
    {
        id: 19,
        name: "Iced Matcha Latte",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 25,
        imageUrl: IcedMatchaLatte,
        category: "Iced Coffee"
    },
    {
        id: 20,
        name: "Mocha",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 28,
        imageUrl: Mocha,
        category: "Iced Coffee"
    },
    {
        id: 21,
        name: "Spanish Latte",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 30,
        imageUrl: SpanishLatte,
        category: "Iced Coffee"
    },
    {
        id: 22,
        name: "Strawberry and Mocha",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 30,
        imageUrl: StrawberryAndMocha,
        category: "Iced Coffee"
    },
    {
        id: 23,
        name: "Strawberry Matcha",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 32,
        imageUrl: StrawBeryAndMatch,
        category: "Iced Coffee"
    },
    {
        id: 24,
        name: "White Mocha",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 35,
        imageUrl: WhiteMoka,
        category: "Iced Coffee"
    },
];



/**
 * @constant MilkshakesItems
 * @description Array of milkshake options available.
 */








export const MilkshakesItems: CoffeeItem[] = [
    {
        id: 25,
        name: "Belgium Chocolate",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 20,
        imageUrl: BelgiumChocolate,
        category: "Milk Shakes"
    },
    {
        id: 26,
        name: "Cheese Cake",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 25,
        imageUrl: CheeseCake,
        category: "Milk Shakes"
    },
    {
        id: 27,
        name: "Coffe",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 30,
        imageUrl: Coffe,
        category: "Milk Shakes"
    },
    {
        id: 28,
        name: "French Vanilla",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 35,
        imageUrl: FrenchVanilla,
        category: "Milk Shakes"
    },
    {
        id: 29,
        name: "Hazelnut",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 25,
        imageUrl: Hazelnut,
        category: "Milk Shakes"
    },
    {
        id: 30,
        name: "Kinder",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 28,
        imageUrl: Kinder,
        category: "Milk Shakes"
    },
    {
        id: 31,
        name: "Mango",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 30,
        imageUrl: Mango,
        category: "Milk Shakes"
    },
    {
        id: 32,
        name: "OreoCookies",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 30,
        imageUrl: OreoCookies,
        category: "Milk Shakes"
    },
    {
        id: 33,
        name: "Pistachio",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 32,
        imageUrl: Pistachio,
        category: "Milk Shakes"
    },
    {
        id: 34,
        name: "Salted Caramel",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 35,
        imageUrl: SaltedCaramel,
        category: "Milk Shakes"
    },
    {
        id: 35,
        name: "Straw Berry",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 35,
        imageUrl: StrawBerry,
        category: "Milk Shakes"
    },
    {
        id: 36,
        name: "Chocolate Oreo",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 35,
        imageUrl: ChocolateOreo,
        category: "Milk Shakes"
    }
];





/**
 * @constant SmoothiesItems
 * @description Array of SmoothiesItems options available.
 */



export const SmoothiesItems: CoffeeItem[] = [
    {
        id: 37,
        name: "Mango",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 20,
        imageUrl: MangoSmoothy,
        category: "Smoothies"
    },
    {
        id: 38,
        name: "Mix Berries",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 25,
        imageUrl: MixBerriesSmoothy,
        category: "Smoothies"
    },
    {
        id: 39,
        name: "Pinacolada",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 30,
        imageUrl: Pinacolada,
        category: "Smoothies"
    },
    {
        id: 40,
        name: "Strawberry",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 35,
        imageUrl: Strawberry,
        category: "Smoothies"
    },
    {
        id: 41,
        name: "Tropical Fruits",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 25,
        imageUrl: TropicalFruitsSmoothy,
        category: "Smoothies"
    },
    {
        id: 42,
        name: "Watermelon",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 28,
        imageUrl: WatermelonSmoothy,
        category: "Smoothies"
    },
];




/**
 * @constant MojitoItems
 * @description Array of MojitoItems options available.
 */



export const MojitoItems: CoffeeItem[] = [
    {
        id: 43,
        name: "Classic",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 20,
        imageUrl: Classic,
        category: "Mojito"
    },
    {
        id: 44,
        name: "Mix Berries",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 25,
        imageUrl: MixBerries,
        category: "Mojito"
    },
    {
        id: 45,
        name: "Redbull Passion",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 30,
        imageUrl: RedbullPassion,
        category: "Mojito"
    },
    {
        id: 46,
        name: "Redbull Peach",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 35,
        imageUrl: RedbullPeach,
        category: "Mojito"
    },
    {
        id: 47,
        name: "Redbull",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 25,
        imageUrl: Redbull,
        category: "Mojito"
    },
];






/**
 * @constant BreezersItems
 * @description Array of BreezersItems options available.
 */








export const BreezersItems: CoffeeItem[] = [
    {
        id: 48,
        name: "Lemon Mint",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 20,
        imageUrl: LemonMint,
        category: "Breezers"
    },
    {
        id: 49,
        name: "Mix Berries",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 25,
        imageUrl: MixBerriesBreezer,
        category: "Breezers"
    },
    {
        id: 50,
        name: "Peach Ice",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 30,
        imageUrl: PeachIce,
        category: "Breezers"
    }
];


/**
 * @constant FrappeItems
 * @description Array of FrappeItems options available.
 */



export const FrappeItems: CoffeeItem[] = [
    {
        id: 51,
        name: "Classic Latte",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 20,
        imageUrl: ClassicFrappe,
        category: "Frappe"
    },
    {
        id: 52,
        name: "Mocha",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 25,
        imageUrl: MochaFrappe,
        category: "Frappe"
    },
    {
        id: 53,
        name: "Pistachio",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 30,
        imageUrl: PistachioFrappe,
        category: "Frappe"
    },
    {
        id: 54,
        name: "Spanish Latte",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 35,
        imageUrl: SpanishLatteFrappe2,
        category: "Frappe"
    },
    {
        id: 55,
        name: "Spanish Latte",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 25,
        imageUrl: SpanishLatteFrappe,
        category: "Frappe"
    },
];





/**
 * @constant Options
 * @description Array of options available.
 */

export const Options: Options[] = [
    {
        id: 1,
        name: "Pepper Julienned",
        imageUrl: pepper,
        price: 20,
    },
    {
        id: 2,
        name: "Baby Spinach",
        imageUrl: spince,
        price: 25,
    },
    {
        id: 3,
        name: "Musrom",
        imageUrl: musrom,
        price: 30,
    },
];





/**
 * @constant Sizes
 * @description Array of available drink sizes.
 */




export const Sizes: Sizes[] = [
    {
        name: "Small",
    },
    {
        name: "Medium",
    },
    {
        name: "Large",
    },
];