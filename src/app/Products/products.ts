export class Products {

    id:number;
    name:string;
    imgPath:string;
    price:number;
    description:string;

    constructor(
        id:number,
        name:string,
        imgPath:string,
        price:number,
        description:string
    ){
        this.id = id;
        this.name = name;
        this.imgPath = imgPath;
        this.price = price;
        this.description = description;
    }
}