import styled from 'styled-components';

// Pagina Principal

const Container = styled.div`
        width: 100%;
        max-width: 1200px;
        height: 430px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: auto;
        
        
    `
const Formulario = styled.div`
    width: 100%;
    margin-top: 1em;
    padding: 1em;
    background: #1d1d1f;
    display: flex;
    justify-content: space-around;
    & nav {
        display: flex;
        gap: 10px;
        & form:last-of-type {
            // width: 100px;
            // background: red;
            display: flex
        }
        & form:nth-of-type(3){
            // background: red;
            font-size: 20px;
            & checkbox {
                background: red
            }
        }
    }
   

    
    
  `
const Foot = styled.div`
    width: 100%;
    margin-top: 76em
`;

const Menu = styled.form`
        color: white;
        width: 100%;
        // background: #24303c;
        padding: 20px;
        border-radius: 4px;
        margin-bottom: 16px;
        border: 1px solid #1f53c5;
        font-family: 'calibri';
        font-size: 16px;
        & select {
            padding: 8px;
            font-size: 15px;
            border-radius: 4px;
        }
        & button, a {
            width: 50%;
            background: #1f53c5;
            border: none;
            border-radius: 4px;
            color: white;
            margin: 0 0 0 16px;
            font-size: 16px;
            &:hover {
                color: white;
                text-decoration: underline;
            }
        }
        & input {
            border-radius: 4px
        }
        
    `;

    //Paginado


    const Paginado = styled.div`
    display: flex;
    justify-content: center;
    gap: 2px;
    align-items: center;
    & button {
        padding: 7px;
        margin: 2px;
    }
    & button:hover {
        background: black
    }
    & button:focus {
        background: grey
    }
`

//Card

const Frag = styled.div`
    max-width: 330px;
    height: 500px;
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin: 20px;
    text-align: center;
    transition: all 0.25s;
    & a {
        text-decoration: none
    }
    &:hover {
        transform: translateY(-15px);
        transform: scale(10)
        box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
        border: black solid 1px
    }
    & img{
        width: 330px;
        height: 220px;
    }
    & h3{
        font-weight: 600;
        max-width: 310px;
    }
    & a {
        font-weight: 500;
        text-decoration: none;
        color: #3498db;
    }
    & p, li {
        padding: 0 1rem;
        font-size: 13px;
        font-weight: 300;
        font-family: apple-system
    }
`

// Formulario 

const FormStyles = styled.form`
        width: 400px;
        background: #24303c;
        padding: 30px;
        margin: auto;
        margin-top: 50px;
        border-radius: 4px;
        font-family: 'calibri';
        color: white;
        box-shadow: 7px 13px 37px #000;
        & input, textarea, select, input[type='checkbox'] {
            width: 100%;
            background: #24303c;
            padding: 10px;
            border-radius: 4px;
            margin-bottom: 16px;
            border: 1px solid #1f53c5;
            font-family: 'calibri';
            font-size: 18px;
            color: white;
        }
        & button, a {
            width: 100%;
            background: #1f53c5;
            border: none;
            padding: 12px;
            color: white;
            margin: 16px 0;
            font-size: 16px;
            &:hover {
                color: white;
                text-decoration: underline;
            }
        }
        & div {
            display: flex;
            gap: 0.5em;
            flex-basis: 150px;
            justify-content: space-evenly;
            align-items: center;
            
        }
    
    `;

    const Dietas = styled.div`
        display: flex;
        justify-content: center;
        width: 80%;
        margin: auto;
        margin-top: 100px;
        border-radius: 4px;
        font-family: 'calibri';
        color: white;
      
        & p, button {
            width: auto;
            background: #24303c;
            padding: 10px;
            border-radius: 4px;
            margin-bottom: 16px;
            border: 1px solid #1f53c5;
            font-family: 'calibri';
            font-size: 18px;
            color: white;
        }
        & div {
            display: flex;
            gap: 0.5em;
            flex-basis: 150px;
            justify-content: space-evenly;
            align-items: baseline;   
        }
    `;
    const Volver = styled.div`
    margin-left: 30%;
    margin-top: 2%;
    
        & a{
            width: 100%;
            background: #1f53c5;
            border: none;
            padding: 15px;
            color: white;
            margin: 16px 0;
            font-size: 16px;
            text-decoration: none;
            text-align: right;
            border-radius: 4px;
            &:hover {
                color: white;
                text-decoration: underline;
            }

        }
    `

    // Details

const ContainerDetails = styled.div`
        width: 100%;
        max-width: 1200px;
        height: auto;
        border: 1px solid black;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        
        & ul {
            list-style-type: none
        }
        & img {
            max-width: 100%;
            max-height: auto;
            margin-right: auto;
            margin-left: auto;
        }
    `

    const CajitaGrid = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
    `;

    

    
    
 const FragDetails = styled.div`
    width: auto;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin: 20px;
    text-align: center;
    transition: all 0.25s;
    &:nth-of-type(4){
        width: 60%
    }
    & img {
        width: 75%
    }
    & p {
        padding: 0 1rem;
        font-size: 2.5rem;
        font-weight: 300;
        font-family: allison, cursive;
    }
    & ul {
        list-style-type: square
       
    }
    & ul:last-of-type {
        list-style-type: upper-latin;
        text-align: left;
        max-width: 60%
    }
 `;
 
 const ListasReceta = styled.div`
    display: flex;
    justify-content: center;
 `


export  {
    Foot,
    Formulario,
    Container,
    Paginado,
    ContainerDetails,
    CajitaGrid,
    FormStyles,
    Volver,
    Dietas,
    Menu,
    Frag,
    FragDetails,
    ListasReceta
}