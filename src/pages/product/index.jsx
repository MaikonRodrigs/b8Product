import React, { useState } from 'react';
import {
  Container,
  ProductImageContainer,
  ProductImage,
  WishlistContainer,
  Wishlist,
  ProductDescription,
  ProductPriceOld,
  ProductPrice,
  ProductPriceDetails,
  ProductAddToCard,
  WishlistAdd
} from './styles';
// import ProductImg from '../../assets/images/product.jpg'


const Product = (props) => {
  const [addCart, setAddCart] = useState();
  const handleAddToCart = () => {
    setTimeout(() => {
      setAddCart(!addCart);
      return (
        <ProductAddToCard />
      )
    }, 300);
  }



  const { product_img, description, price_old, price, price_details } = props;
  return (
    <Container>
      <ProductImageContainer>
        <ProductImage src={product_img} />
        <WishlistContainer onClick={handleAddToCart} className={addCart ? 'active' : ''}>
          {addCart ?
            <WishlistAdd />
            :
            <Wishlist />
          }
        </WishlistContainer>
      </ProductImageContainer>
      <ProductDescription>
        {description}
      </ProductDescription>

      <ProductPriceOld>R$ {price_old}</ProductPriceOld>
      <ProductPrice>{price}</ProductPrice>
      <ProductPriceDetails>em até <strong>10x de R$ {price_details}</strong> sem juros</ProductPriceDetails>
      <ProductAddToCard onClick={handleAddToCart}>
        {addCart ?
          'ADICIONADO'
          :
          'ADICIONAR'
        }
      </ProductAddToCard>
    </Container>
  )
}

export default Product;