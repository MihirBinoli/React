import React from 'react';
import RatingClass from './RatingClass';
let masterList = [
  {
    productName : "Mouse",
    url: "image/mouse.jpeg",
    price : 500,
    disc : "Best quality mouse",
    rating : 4,
  },
  {
    productName : "Keyboard",
    url: "image/mouse.jpeg",
    price : 2800,
    disc : "K",
    rating : 4,
  },
  {
    productName : "Mouse",
    url: "image/mouse.jpeg",
    price : 500,
    disc : "Best quality mouse",
    rating : 4,
  },
  {
    productName : "Mouse",
    url: "image/mouse.jpeg",
    price : 500,
    disc : "Best quality mouse",
    rating : 4,
  },
];

export default function ProductClass() {
  return masterList.map(
        (prod) => {
            return(
              <div className='col'>
                <div className='card'>
                  <img
                    src={prod.url}
                    style={{ width: "50%" }}
                    className='card-img-top mx-auto'
                    alt='logo'
                  />
                  <div className='card-body text-center'>
                    <h5 className='card-title'>{prod.productName}</h5>
                    <h5 className='card-title'>{prod.price}</h5>
                    <p className='card-text'>{prod.disc}</p>
                    <RatingClass rating = {prod.rating} />
                  </div>
                </div>
              </div>
            )
        }
    );
}
//arrow function should return 