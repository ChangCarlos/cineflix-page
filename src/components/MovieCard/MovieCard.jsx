import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 300px;
    gap: 16px;
    border: 1px solid #2E2E2E;
    border-radius: 8px;
    cursor: pointer;
`

export const Poster = styled.img`
    width: 100%;
    border-radius: 8px 8px 0 0;
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    gap: 16px;
    padding: 16px;
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #FFFFFF;
`

export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
`

export const FavoriteBtn = styled.button`
    padding: 12px 16px;
    width: 20%;
    border: 1px solid #FFFFFF;
    background-color: #FFFFFF;
    cursor: pointer;
    border-radius: 8px;
`