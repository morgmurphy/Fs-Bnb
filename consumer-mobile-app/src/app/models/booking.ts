export class Booking {
    name: string;
    location: string;
    price: number 
    description: string;
    imgUrl: string
    
    constructor(nameInput, locationInput, priceInput, descriptionInput, imgURLInput){
        this.name = nameInput;
        this.location = locationInput;
        this.price = priceInput;
        this.description = descriptionInput
        this.imgUrl = imgURLInput;
    }
}
