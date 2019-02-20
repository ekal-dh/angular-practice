import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Review } from "../review";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"]
})
export class ReviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  review: Review = {
    name: null,
    review: null,
    rating: null,
    errors: []
  };

  selectOption = rating => {
    this.review.rating = rating;
  };

  @Output() sendReview = new EventEmitter<Review>();
  onSubmit = () => {
    if (this.review.name && this.review.review && this.review.rating) {
      let productReview = {
        name: this.review.name,
        review: this.review.review,
        rating: this.review.rating,
        errors: []
      };
      //Emits to the 'product' parents
      this.sendReview.emit(productReview);

      //after Submitting, reset values
      this.review.name = null;
      this.review.review = null;
      this.review.rating = null;
    } else {
      this.review.errors = [];
      if (!this.review.name) {
        this.review.errors.push("Name required");
      }
      if (!this.review.review) {
        this.review.errors.push("Review required");
      }
      if (!this.review.rating) {
        this.review.errors.push("Rating required");
      }
    }
  };
}
