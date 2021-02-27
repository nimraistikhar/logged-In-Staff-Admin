import React from 'react'
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import styled from 'styled-components';

const ToggleContainer = styled.div`
    @media (max-width: 1029px) {
        margin-left: -.48rem;
    }
    @media (max-width: 1013px) {
        margin-left: -.5rem;
    }
    @media(max-width: 880px) {
        font-size: .85rem;
    }
    @media (max-width: 844px) {
        margin-left: -.6rem;
        font-size: .8rem;
    }
    @media (max-width: 837px) {
        margin-left: -.85rem;
    }
    @media (max-width: 768px) {
        margin-top: -.3rem;
        margin-bottom: -.5rem;
    }
`

const Model = styled.div`
    display: flex;
    cursor: pointer;
    margin-left: 1rem;
    margin-right: .2rem;
    border-radius: 5px;
    padding: .65rem 0 .2rem 0;
    @media (max-width: 1172px) {
        padding: .5rem .1rem;
    }
    @media (max-width: 1062px) {
        padding: .5rem 0rem;
    }
    @media (max-width: 768px) {
        /* margin-top: -.1rem; */
        /* margin-bottom: -.5rem; */
    }
`

const ModelTheme = styled.div`
    font-size: .95rem;
    font-weight: 600;
    color: #b0b0b0;
    margin: 0 0 0 .8rem;
    @media (max-width: 1252px) {
        font-size: .9rem;
    }
    @media (max-width: 1212px) {
        font-size: .85rem;
    }
    @media (max-width: 1164px) {
        margin: 0 0 0 .5rem;
    }
    @media (max-width: 1026px) {
        margin: 0 0 0 .3rem;
    }
    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
    @media (max-width: 1013px) {
        /* margin: 0 0 0 .3rem; */
    }

    /* @media(max-width: 1060px) {
        font-size: .9rem;
    } */
    /* @media(max-width: 966px) {
        font-size: .75rem;
    }
    @media(max-width: 768px) {
        font-size: 1rem;
    } */
`

const ModelIcon = styled.div`
    font-size: 1.5rem;
    /* color: #000; */
    margin: -4px 5px 1px 1rem;
    /* @media(max-width: 1060px) {
        font-size: 1.2rem;
    } */
    @media (max-width: 1172px) {
        margin: -4px 5px 1px .5rem;
    }
    @media (max-width: 1132px) {
        font-size: 1.4rem;
    }
    @media (max-width: 1092px) {
        margin: -4px 5px 1px .3rem;
    }
    @media (max-width: 1070px) {
        margin: -4px 5px 1px .2rem;
    }
    @media (max-width: 1039px) {
        margin: -4px 5px 1px .1rem;
    }
    @media (max-width: 834px) {
        margin: -4px 5px 1px .1rem;
    }
    @media (max-width: 812px) {
        margin: -4px 3px 1px 0;
    }
    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin: -4px 5px 1px 1rem;
    }
`

export const Toggle = ({ theme, toggleTheme }) => {
    return (
        <ToggleContainer onClick={toggleTheme}>
            <Model className="mod">
                <ModelTheme className="li">
                    { theme === 'light' ? 'Dark theme' : 'Light theme' }
                </ModelTheme>
                <ModelIcon className="li-icon">
                    { theme === 'light' ? <IoMdMoon /> : <IoMdSunny /> }
                </ModelIcon>
            </Model>
        </ToggleContainer>
    )
}
