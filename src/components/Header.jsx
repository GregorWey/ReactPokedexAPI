import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
        <img src="/images/pokemonLogo.png" alt="" />
        <p> Pokemons </p>
        <p> Abilidades </p>
        <p> Berries </p>
    </Nav>
  )
}

const Nav = styled.div`
    display: flex;
    justify-content: center;
    margin: 0rem 0rem;
    text-decoration: none;
    align-items: center;
    border-bottom: 2px solid;

    img {
        width: 10%;
        margin-right: 5rem;
    }

    p{
        width: 10%;
        font-size: 1.5rem;
        font-weight: bold;
    }
`


export default Header