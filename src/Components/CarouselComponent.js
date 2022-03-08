import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <div>
      <Carousel className="my-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg "
            alt="travel Product"
          />

          <Carousel.Caption>
            <h3>Tiket Pesawat</h3>
            <p>Dapatkan Promo Tiket Pesawat Murah</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png  "
            alt="travel Product"
          />

          <Carousel.Caption>
            <h3>Voucher Hotel</h3>
            <p>Dapatkan Promo Voucher Hotel</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg   "
            alt="travel Product"
          />

          <Carousel.Caption text="dark">
            <h3>Paket Tour</h3>
            <p>Dapatkan Promo Paket Tour</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
