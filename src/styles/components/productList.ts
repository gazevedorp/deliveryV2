import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;

    @media(max-width: 375px) {
        flex-direction: column;
        align-items: center;
    }

`