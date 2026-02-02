export class Prodotto {
    constructor(name, arrivalDate, expiryDate, price, image) {
        this.id = crypto.randomUUID(); 
        this.name = name;
        this.image = image;
        this.category = null;
        this.arrivalDate = arrivalDate;
        this.expiryDate = expiryDate;
        this.price = price;
    }

    toBeExpired() {
        const dataOggi = new Date();
        const differenzaInMs = this.expiryDate - dataOggi;
        const differenzaDate = differenzaInMs / (1000 * 60 * 60 * 24);
        return differenzaDate <= 3 && differenzaDate >= 0;
    }

    finalPrice() {
        if (!this.toBeExpired()) {
            return this.price;
        } else {
            return Number((this.price * 0.95).toFixed(2));
        }
    }

    toObject() {
        return {
            id: this.id,
            name: this.name,
            category: this.category,
            price: this.price,
            image: this.image,
            arrivalDate: this.arrivalDate.toLocaleDateString('it-IT'),
            expiryDate: this.expiryDate.toLocaleDateString('it-IT'), 
            toBeExpired: this.toBeExpired(),
            finalPrice: this.finalPrice(),
        };

    }
}

export class Frutta extends Prodotto {
    constructor(name, arrivalDate, expiryDate, price, image) {
        super(name, arrivalDate, expiryDate, price, image);
        this.category = "Frutta";
    }
}

export class Verdura extends Prodotto {
    constructor(name, arrivalDate, expiryDate, price, image) {
        super(name, arrivalDate, expiryDate, price, image);
        this.category = "Verdura";

    }
}

export class Latticini extends Prodotto {
    constructor(name, arrivalDate, expiryDate, price, image) {
        super(name, arrivalDate, expiryDate, price, image);
        this.category = "Latticini";

    }
}