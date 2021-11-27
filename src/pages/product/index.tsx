import React from 'react';
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
  ProductAddToCard
} from './styles';
// import ProductImg from '../../assets/images/product.jpg'

interface priceProps {
  product_img: string;
  description: string;
  price_old: string;
  price?: string;
  price_details?: string;
}

const Product = (props: priceProps) => {
  const { product_img, description, price_old, price, price_details } = props;
  return (
    <Container>
      <ProductImageContainer>
        <ProductImage src={product_img} />
        <WishlistContainer>
          <Wishlist />
        </WishlistContainer>
      </ProductImageContainer>
      <ProductDescription>
        {description}
      </ProductDescription>

      <ProductPriceOld>R$ {price_old}</ProductPriceOld>
      <ProductPrice>{price}</ProductPrice>
      <ProductPriceDetails>em até <strong>10x de R$ {price_details}</strong> sem juros</ProductPriceDetails>
      <ProductAddToCard>
        ADICIONAR
      </ProductAddToCard>
    </Container>
  )
}

export default Product;