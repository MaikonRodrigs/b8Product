import styled from "styled-components";
import { FavoriteBorder } from "@styled-icons/material/FavoriteBorder";
import { Favorite} from '@styled-icons/material/Favorite';

export const Container = styled.div`
  position: relative;
  min-height: calc(56.8rem + 0rem);
  min-width: 30.4rem;
  max-height: calc(56.8rem + 0rem);
  max-width: 30.4rem;
  background: var(--white);
  border-radius: 0.8rem;
`;
export const ProductImageContainer = styled.div``;
export const ProductImage = styled.img`
  position: relative;
  width: 24rem;
  height: 24rem;
  margin: 3.2rem;
`;
export const WishlistContainer = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  top: 3.2rem;
  right: 3.2rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f3f6;
  border-radius: 50%;
  color: #000;
  cursor: pointer;
  transition: all 0.5s linear;
  transition-delay: 0.1s;

  &.active {
    color: #fff;
    background: #da4b4f;
    transform: rotate(360deg);
    transition: all 0.5s linear;
  }

  &:hover {
    background: #fee5ec;
    color: #da4b4f;
  }
`;
export const Wishlist = styled(FavoriteBorder)`
  width: 2.4rem;
  height: 2.4rem;
`;
export const WishlistAdd = styled(Favorite)`
  width: 2.4rem;
  height: 2.4rem;
`;
export const ProductDescription = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  color: #1c1c1c;
  padding: 0 3.2rem;
`;
export const ProductPriceOld = styled.div`
  color: #b5b5b6;
  font-size: 1.4rem;
  text-decoration: line-through;
  margin-top: 2.4rem;
  padding: 0 3.2rem;
`;
export const ProductPrice = styled.div`
  color: #da4b4f;
  font-size: 2rem;
  margin-top: 0.4rem;
  padding: 0 3.2rem;
`;
export const ProductPriceDetails = styled.div`
  color: #848587;
  font-size: 1.2rem;
  margin-top: 0.4rem;
  padding: 0 3.2rem;
  font-weight: 400;
  letter-spacing: -0.5%;
  strong {
    color: #000;
  }
`;
export const ProductAddToCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24rem;
  height: 4.8rem;
  background: #40b25c;
  margin: 3.2rem;
  border-radius: 0.5rem;
  cursor: pointer;

  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.4%;

  &.active {
    opacity: .8;

  &:hover {
    background: #1c6c3e;
  }
`;
