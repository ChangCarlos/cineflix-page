import styled from "styled-components";

export const MovieDetailContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1480px;
    margin: 0 auto;
    gap: 48px;
    margin-bottom: 64px;
`

export const PosterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 600;
    color: #FFFFFF;
`

export const Description = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: #FFFFFF;
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: left;
    gap: 64px;
`

export const TrailerContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1480px;
    margin: 0 auto;
    margin-bottom: 64px;
`
