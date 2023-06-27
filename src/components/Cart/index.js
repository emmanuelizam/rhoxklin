import React from "react";
import {
  ContactUs,
  Content,
  Remove,
  Name,
  Service,
  Title,
  Wrapper,
} from "./Cart.styles";
import trash from "../../images/icon-trash.svg";
const laundry = require("../../images/washed_garments.jpg");

const Cart = () => {
  return (
    <Wrapper pic={laundry}>
      <Title>
        <h2>CART</h2>
      </Title>
      <Content>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
        <Service>
          <Name>
            <h1>Detergent</h1>
          </Name>
          <Remove trash={trash}></Remove>
        </Service>
      </Content>
      <ContactUs>
        <h2>BUY NOW</h2>
      </ContactUs>
    </Wrapper>
  );
};

export default Cart;
