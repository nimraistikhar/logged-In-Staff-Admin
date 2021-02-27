import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.font};
        transition: all .5s linear;
    }
    .gc {
        color: ${({ theme }) => theme.gcp};
    }
    .gc:hover {
        color: ${({ theme }) => theme.font};
    }
    .gcb:hover {
        background: ${({ theme }) => theme.gcbp};
        color: ${({ theme }) => theme.font};
        border-radius: 5px;
        @media (max-width: 768px) {
            background-color: transparent;
        }
    }
    .mod {
        color: ${({ theme }) => theme.gcp};
    }
    .mod:hover {
        background: ${({ theme }) => theme.gcbp};
        .li {
            color: ${({ theme }) => theme.font};
        }
    }
    .li-icon {
        color: ${({ theme }) => theme.font};
    }
    ul {
        background-color: ${({theme}) => theme.body};
        transition: all .5s linear;
    }
    .sigb {
        background-color: ${({theme}) => theme.gcbp};
    }
    .sigc {
        color: ${({ theme }) => theme.font};
    }
    .desc {
        border: 1px solid ${({theme}) => theme.bord};
    }
    .main-navy {
        border-right: 1px solid ${({theme}) => theme.bord};
    }
    .btnb {
        border: 1px solid ${({theme}) => theme.font};
        transition: 0.2s ease-in-out;
    }
    .btnb a {
        color: ${({ theme }) => theme.font};
        transition: 0.2s ease-in-out;
    }
    .btnb a:hover {
        color: ${({ theme }) => theme.body};
    }
    .btnb:hover {
        background-color: ${({theme}) => theme.font};
    }
    .btnr {
        border: 1px solid #ff471a;
        transition: 0.2s ease-in-out;
    }
    .btnr:hover {
        background-color: #ff471a;
    }
    .btnr a {
        color: #ff471a;
    }
    .btnr a:hover {
        color: #212121;
    }
    .Email input {
        background-color: ${({theme}) => theme.body};
        border: 1px solid ${({theme}) => theme.bord};
    }
    .selected {
        color: ${({ theme }) => theme.font};
    }
    .shown {
        .navigation-nav {
            background-color: ${({theme}) => theme.body};

        }
    }
    .active {
        color: ${({ theme }) => theme.font};
    }
`

export const lightTheme = {
    body: '#fff',
    font: '#121212',
    gcp: '#b0b0b0',
    gcbp: '#eee',
    bord: '#e2e2e2',
};

export const darkTheme = {
    body: '#121212',
    font: '#fff',
    gcp: '#8f8e8ee5',
    gcbp: '#8080803d',
    bord: '#8080803d',
}