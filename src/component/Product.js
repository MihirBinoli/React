import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import RatingClass from './RatingClass'

export default function product() {
  return (
    <>
        <div class="card m-auto" style={{width:"400px"}}>
                <img src='./image/LAPTOP.jpeg' class="card-img-top" />
                <div class="card-body ">
                    <h3 class="card-title text-center">Lenovo Ideapad Gaming</h3>
                    <h5 class="card-title text-center">Rs 1,29,000</h5>
                    <p class="card-text text-center">An excellent product for ultimate gaming experience</p>
                    <div class="text-center">
                      <RatingClass rating="1"/>          
                    </div>
                </div>
        </div>
    </>
  );
}
//ratingclass pass any rating , any props provided will reach as ARGUMENT (RATING is a key and anything after = is value)
