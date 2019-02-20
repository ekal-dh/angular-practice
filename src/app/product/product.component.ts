import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() premium: boolean; //from app parents to product child
  @Output() sendProductId = new EventEmitter(); //from product child to app parents

  product = "Socks";
  brand = "Angular Mastery";
  selectedVariant = 0;
  details = ["80% cotton", "20% polyester", "Gender-neutral"];
  variants = [
    {
      variantId: 2234,
      variantColor: "green",
      variantImage: "../../../../assets/vmSocks-green.jpeg",
      variantQuantity: 10
    },
    {
      variantId: 2235,
      variantColor: "blue",
      variantImage: "../../../../assets/vmSocks-blue.jpeg",
      variantQuantity: 0
    }
  ];
  reviews = [];

  addToCart = () => {
    let productId = this.variants[this.selectedVariant].variantId;
    this.sendProductId.emit(productId);
  };

  updateProduct = index => {
    this.selectedVariant = index;
  };

  inStock = () =>
    this.variants[this.selectedVariant].variantQuantity > 0 ? true : false;

  image = () => this.variants[this.selectedVariant].variantImage;

  shipping = () => {
    if (this.premium) {
      return "Free";
    }
    return 2.99;
  };

  addReview = productReview => this.reviews.push(productReview);
}
