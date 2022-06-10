import styled from "styled-components";

export const Body = styled.body`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E5E5E5;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;

`

export const Header = styled.header`
    background-color: #000000;
    padding: 1rem 1.5rem;

`

export const H1 = styled.h1`
    color: #ffffff;
    font-size: 2rem;
    font-weight: 100;
`

export const Main = styled.main`
    width: 100%;
    max-height: 100vh;
    padding: 1.5rem 1rem;
    display: flex;
    background-color: #f4f4f4;
    flex-flow: column wrap;
`

export const Label = styled.label`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 1rem;
    color: #777777;
    font-weight: 300;
    font-size: 0.9rem;
`

export const Select = styled.select`
    margin-top: 0.3rem;
    background: #FFFFFF;
    border: 1px solid #BBBBBB;
    box-sizing: border-box;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    padding: 1em 0.5em;
    padding-left: 16px;
    display: block;
    outline: none;
    appearance: none;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        background-color: #F5F9FD;
    }
`

export const Option = styled.option`
    font-weight: 300;
`

export const Input = styled.input`
    margin-top: 0.3rem;
    background: #FFFFFF;
    border: 1px solid #BBBBBB;
    box-sizing: border-box;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    padding: 1em 0.5em;
    padding-left: 16px;
    display: block;
    outline: none;
    appearance: none;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        background-color: #F5F9FD;
    }

    &:focus {
        background-color: #F5F9FD;
    }

    &[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }
`

export const Button = styled.button`
    background-color: #000000;
    border-radius: 25px;
    padding: 1rem;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    color: #F4F4F4;
    border: none;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.7;
    }

`

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem;
`

export const Article = styled.article`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

export const ImgMoney = styled.img`
    width: 3rem;
`

export const PMoney = styled.p`
    font-size: 1rem;
    font-weight: 300;
    margin: .2rem 0;
    color: #777777;
`

export const PValue = styled.p`
    font-size: 1.35rem;
    font-weight: 500;
`

export const ArrowImg = styled.img`
    transform: rotate(270deg);
`