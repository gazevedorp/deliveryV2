import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media(max-width: 375px) {
    align-items: center;
    }

`

export const Title = styled.p`
    width: 100%;
    padding: 1rem 1rem 1rem 2rem;

    font-size: 2.5rem;
    font-weight: 600;
    
    background-color: #d3794f;
    color: white;

    @media(max-width: 800px) {
        padding: 1rem 1rem 1rem 1rem;
        text-align: center;
    }
`