import styled from "styled-components";

export const Container = styled.div`
  background:#ecf1f0;
  min-height: calc(100% - 80px);

  padding:20px;
`;

export const  UserInformation = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap:70px;
    margin-bottom: 20px;

    p{
        font-size:1rem;
        line-height:1.9;

        span{
            display: block;
            border:1px solid var(--gray-400);
            color: var(--white);
            background: var(--gray-700);
            font-size:1.35rem;
            padding: 5px 7px;
            border-radius:5px;
        }
    }
`

export const FigureMain = styled.form`
    width:325px;
    border:1px solid var(--gray-300);
    border-radius:8px;
    padding: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap:20px;

    figure{
        width: 150px;
        height: 150px;
        img{
            width: 100%;
            object-fit:cover;
        }
    }
`

export const UserNumber = styled.div`
    display: flex;
    justify-content: center;
    gap:50px;
    padding: 10px;

    text-align:center;
    color: var(--violet-500);
    
    p{
        font-size:1rem;

        span{
            font-size:1.6rem;
            display: block;
            padding: 5px 7px;
            border:1px solid var(--gray-300);
            border-radius:5px;
            background: var(--gray-100);

        }
    }
`

export const Apresetetion = styled.div`
    width: 480px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

    h1{
        font-size:3rem;
        color: var(--gray-700);
        margin-bottom: 20px;
    }

    p{
        font-size:1.2rem;
        font-weight: 200;
        line-height:1.5;
    }
`