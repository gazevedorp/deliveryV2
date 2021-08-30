import styled from "styled-components";

export const Card = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    margin: 15px;
    padding: 20px;

    width: 12rem;
    height: 18rem;

    p{
        color: black;
        text-align: center;
    }

    img{
        width: 100px;
        height: 100px;
    }

    button{
        width: 100px;
        height: 50px;
        
        background-color: black;
        color: white;
        cursor: pointer;
    }

    @media(min-width: 375px) and (max-width: 800px) {
        width: 45%;
        height: 15rem;
    }

    @media(max-width: 375px) {
        width: 100%;
        height: 15rem;
    }
`