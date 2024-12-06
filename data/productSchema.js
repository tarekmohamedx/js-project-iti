class Product {
    static lastID = localStorage.getItem("lastIDProduct") ? +(localStorage.getItem("lastIDProduct")) : 0; //ظظظظظ should be removed;
    #id; #productName; #productPrice; #productQuantity; #productDescription; #productImage; #productSellerID; #productCategory; #categoryPath; #otherCategory;

    constructor(id, productName, productPrice, productQuantity, productDescription, productImage, productSellerID, productCategory, categoryPath = 'Home / Home Office / Black Metal Lamp'
/*ظظظظظ should be removed;*/, otherCategory = productCategory) {
        this.id = id;
        localStorage.setItem("lastIDProduct", Product.lastID); //ظظظظظ should be removed;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productDescription = productDescription;
        this.productImage = "../" + productImage;
        this.productSellerID = productSellerID;
        this.productCategory = productCategory;
        this.categoryPath = categoryPath;
        this.otherCategory = otherCategory;
    }

    set id(_id) {
        this.#id = _id;
    }

    set productQuantity(_productQuantity) {
        if (_productQuantity < 0) {
            this.#productQuantity = 0;
        } else {
            this.#productQuantity = +_productQuantity;
        }
    }

    set productPrice(_productPrice) {
        if (_productPrice < 0) {
            this.#productPrice = 0;
        } else {
            this.#productPrice = _productPrice;
        }
    }

    set productName(_productName) {
        if (_productName == "") {
            this.#productName = "No name";
        } else {
            this.#productName = _productName.trim();
        }
    }

    set productDescription(_productDescription) {
        if (_productDescription.trim() == "") {
            this.#productDescription = "No description";
        } else {
            this.#productDescription = _productDescription.trim();
        }
    }

    set productImage(_productImage) {
        if (_productImage.trim() == "") {
            this.#productImage = "No image";
        } else {
            this.#productImage = _productImage.trim();
        }
    }

    set productSellerID(_productSellerID) {
        if (_productSellerID < 0) {
            this.#productSellerID = 0;
        } else {
            this.#productSellerID = +_productSellerID;
        }
    }

    set productCategory(_productCategory) {
        const validCategories = ['Home-accessories', 'Bedroom', 'Accessories', 'Sofas', 'living-room-furniture', 'Dining-Room-Furniture'];
        if (validCategories.includes(_productCategory)) {
            this.#productCategory = _productCategory;
        } else {
            this.#productCategory = 'Other';
        }
    }

    set categoryPath(_categoryPath) {
        this.#categoryPath = _categoryPath;
    }

    set otherCategory(_otherCategory) {
        this.#otherCategory = _otherCategory;
    }

    get productCategory() {
        return this.#productCategory;
    }

    get id() {
        return this.#id;
    }

    get productQuantity() {
        return this.#productQuantity;
    }

    get productPrice() {
        return this.#productPrice;
    }

    get productName() {
        return this.#productName;
    }

    get productDescription() {
        return this.#productDescription;
    }

    get productImage() {
        return this.#productImage;
    }

    get productSellerID() {
        return this.#productSellerID;
    }

    getProduct() {
        return {
            id: this.#id,
            productName: this.#productName,
            productPrice: this.#productPrice,
            productQuantity: this.#productQuantity,
            productDescription: this.#productDescription,
            productImage: this.#productImage,
            productSellerID: this.#productSellerID,
            productCategory: this.#productCategory,
            categoryPath: this.#categoryPath,
            otherCategory: this.#otherCategory,
        }
    }

    setProductDetails(productName, productPrice, productQuantity, productDescription, productImage, productSellerID, productCategory) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productDescription = productDescription;
        this.productImage = productImage;
        this.productSellerID = productSellerID;
        this.productCategory = productCategory;
    }
}

export { Product };