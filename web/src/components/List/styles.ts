import styled from "styled-components";

interface IContainer{
    done:boolean | undefined;
}

export const Container = styled.div<IContainer>`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 280px;
    opacity:${props=>props.done?0.6:1};

    & + div{
        border-left:1px solid rgba(0,0,0,0.05)
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;

        h2{
            font-weight:500;
            font-size:16px;
            padding:0 10px;
        }
        button{
            width: 42px;
            height: 42px;
            border-radius:18px;
            background:#3b5bfd;
            border:0;
            cursor: pointer;
        }
    }

    ul{
        margin-top:30px;
    }
`;

export const ModalContainer = styled.div`
    
    h4{
        margin-bottom: 20px;
    }

    fieldset{
        appearance: none;
        width: 270px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        border:1px solid #ddd;
        margin-bottom: 20px;

        label{
            display: flex;
            align-items: center;
            gap:2px;
        }
    }

    select{
        width:65%;
        padding:4px;
        font-size:1rem;
        margin-bottom: 20px;
    }
`