import React from "react";
import RealImg from "../assets/Real.svg"
import DolarReal from "../assets/Dolar.svg"
import Arrow from "../assets/arrowDown.svg"
import { Container, Body, Header, H1, Main, Label, Select, Option, Input, Button, Section, Article, ImgMoney, PMoney, PValue, ArrowImg } from "./style.js"

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

          <Section>

            <Article>
              <ImgMoney src={RealImg}></ImgMoney>
              <PMoney>Real</PMoney>
              <PValue>R$ 0,00</PValue>
            </Article>

            <ArrowImg src={Arrow}></ArrowImg>

            <Article>
              <ImgMoney src={DolarReal}></ImgMoney>
              <PMoney>Dolar</PMoney>
              <PValue>$ 0,00</PValue>
            </Article>

          </Section>
        </Main>

      </Container>

    </Body>

  )
}

export default Convert;
