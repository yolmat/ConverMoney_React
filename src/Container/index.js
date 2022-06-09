import React from "react";
import RealImg from "../assets/Real.svg"
import DolarReal from "../assets/Dolar.svg"
import Arrow from "../assets/arrowDown.svg"
import { Container, Body, Header, H1, Main, Label, Select, Option, Input, Button } from "./style.js"

function Convert() {
  return (

    <Body>

      <Container>

        <Header>
          <H1>CodClub Convert Money</H1>
        </Header>

        <Main>

          <Label>Converter de:
            <Select>
              <Option>R$ Real Brasileiro</Option>
            </Select>
          </Label>

          <Label>Converter para:
            <Select>
              <Option>US$ Dolar Americano</Option>
              <Option>€ Euro</Option>
              <Option>₿ BitCoin</Option>
              <Option>Ξ Ethereum</Option>
            </Select>
          </Label>

          <Label>
            Valor:
            <Input type="number" placeholder="R$ 10.000,00"></Input>
          </Label>

          <Button type="button">Converter</Button>

          <section>

            <article>
              <img src={RealImg}></img>
              <p>Real</p>
              <p>R$ 0,00</p>
            </article>

            <img src={Arrow}></img>

            <article>
              <img src={DolarReal}></img>
              <p>Dolar</p>
              <p>$ 0,00</p>
            </article>

          </section>
        </Main>

      </Container>

    </Body>

  )
}

export default Convert;
