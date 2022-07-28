import styled from 'styled-components';

const FormStyled = styled.div`
    .btn-twitter {
    background-color: #1D9BF0;
    border: 0 solid black;
    font-weight: 700;
    line-height: 20px;
    font-size: 14px;
    color : white;
    min-height: 36px;
    min-width: 36px;
    padding: 0 16px;
    border-radius: 9999px;
    cursor: pointer;
    transition: .2s all ease-in-out;
    align-self: flex-end;

    }

    .btn-twitter:disabled {
        background-color: rgba(29, 155, 240,0.5)  ;
    }


    input {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    input:focus, input:focus, select:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    } 


    textarea{
        box-shadow: 0 0 0 0;
        border: 1px solid rgba(29, 155, 240,0.5);
        border-radius: 10px;
        outline: 0;
        min-width: 150px;
        width: 100%;
        overflow: hidden;
        height: 90px;
        font-weight: 400;
        line-height: 24px;
        font-size: 14px;
        overflow-wrap: break-word;
        margin: 0;
        padding: 10px;
        cursor: text;
        color: #f5f5f5;
        background-color: #363636;
        align-self: center;
        overflow-wrap: break-word;
        resize: none;
        font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
    }

    .avatar {
        width: 48px;
        height: 48px;
    }

    .avatar img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 0 solid black;
    }

    .container { 
        margin-top: 16px;
        max-width: 600px;
        min-width: 598px;
        min-height: 145px;
        width: 100%;
        height: 100%;
        padding: 16px;
        border: 1px solid rgba(29, 155, 240,0.5);
        border-radius: 15px;
    }

    .container > div{  
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-start;
    }

    .form-input {
        display: flex;
        flex: 1;
        max-width: 501px;
        width: 100%;
        max-height: 145px;
        min-height: 140px;
        height: 100%;
    

    }
    form {
        width: 100%;
        height: 100%;
        min-height: 140px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: flex-start;
        
    
    }

    @media screen and (max-width:600px) {
        .container{
            max-width: 100vw ;
            min-width: 100vw;
            width: 100%;
            height: 45vh;

        }
        .container > div {
            width: 95vw ;

        }
        .form-input {
            display: inline;
            width: 100%;
            max-width: 90vw;
        
        }   
        textarea {
            width: 65vw;
            height: 150px;
            padding: 10px;
        }
        form{
            width: auto;
            height: 35vh;
        }
        
    }
`

export default FormStyled;