import React from "react";
import {
  ContactUs,
  Content,
  Item,
  Details,
  AddToCart,
  Title,
  Wrapper,
  Price,
} from "./CleaningMachines.styles";

const CleaningMachines = () => {
  return (
    <Wrapper>
      <Title>
        <h2>CLEANING MACHINES</h2>
      </Title>
      <Content>
        <Item>
          <Details>
            <p>
              Portable Petrol Power Washer High Pressure lagos Gasoline High
              Pressure Car Washers – 6.5hp
            </p>
          </Details>
          <Price>
            <span>₦230,000.00</span>
          </Price>
          <AddToCart>
            <span>Add to Cart</span>
          </AddToCart>
        </Item>
        <Item>
          <Details>
            <p>Ingco High Pressure Washer 2800W (HPWR20008)</p>
          </Details>
          <Price>
            <span>₦230,000.000</span>
          </Price>
          <AddToCart>
            <span>Add to Cart</span>
          </AddToCart>
        </Item>
        <Item>
          <Details>
            <p>
              ingco high pressure washer 3000w price in lagos nigeria Ingco High
              Pressure Washer 3000W (HPWR30008)
            </p>
          </Details>
          <Price>
            <span>₦485,000.00</span>
          </Price>
          <AddToCart>
            <span>Add to Cart</span>
          </AddToCart>
        </Item>
        <Item>
          <Details>
            <p>carpet dryer, sofa dryer Carpet Dryer</p>
          </Details>
          <Price>
            <span>₦190,000.00</span>
          </Price>
          <AddToCart>
            <span>Add to Cart</span>
          </AddToCart>
        </Item>
      </Content>
      <ContactUs>
        <h2>BUY NOW</h2>
      </ContactUs>
    </Wrapper>
  );
};

export default CleaningMachines;
