import React from 'react';

import { Container, Row } from './styles';
// import Header from '../../components/Header'
import Product from '../product'
import ProductsJson from '../../assets/data/products'

const Card = () => {
  const data = ProductsJson.products;

  return (
    <>
      <Container>
        <Row>
          {data.map(function (d, idx) {
            return (
              <Product key={d.id}
                product_img={d.product_img}
                description={d.description}
                price_old={d.price_old}
                price={d.price}
                price_details={d.price_details}
              />
            )
          }
          )}
        </Row>
      </Container>
    </>
  )
}

export default Card;