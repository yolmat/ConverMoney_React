import React from "react";
import RealImg from "../assets/img/Real.svg"
import DolarReal from "../assets/img/Dolar.svg"
import Arrow from "../assets/img/arrowDown.svg"

function Convert() {
  return (
    <div>

      <header>
        <h1>CodClub Convert Money</h1>
      </header>

      <main>

        <label>Converter de:
          <select>
            <option>R$ Real Brasileiro</option>
          </select>
        </label>

        <label>Converter para:
          <select>
            <option>US$ Dolar Americano</option>
            <option>€ Euro</option>
            <option>₿ BitCoin</option>
            <option>Ξ Ethereum</option>
          </select>
        </label>

        <label>
          Valor
          <input placeholder="R$ 10.000,00"></input>
        </label>

        <button type="button">Converter</button>

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
      </main>
    </div>
  )
}

export default Convert;
