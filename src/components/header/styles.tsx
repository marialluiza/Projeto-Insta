import styled from "styled-components";

export const Container = styled.div`

    .main{
        display: flex;
        justify-content: center;
        border-bottom: 1px solid var(--soft-gray);
        background-color: white;
        margin-bottom: 34px;
    }

    .centered{
        display: flex;
        justify-content: space-between;
        height: 50px;
        width: 90%;

    }

    .logos{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .divider{
        border-left: 1px solid #dcdfe4;
        height: 22px;
    }

    .input-search{
        display: flex;
        align-items: center;
        
        & > input {
            background-color: var(--light-gray);
            width: 215px;
            height: 28px;
            border-radius: 4px;
            border: 1px solid var(--soft-gray);
            text-align: center;
        }
    }

    .icons{
        display: flex;
        align-items: center;
        gap: 20px;

        & > img{
            height: 22px;
            cursor: pointer;
        }
    }

    @media(max-width: 935px) {
        .centered {
            width: 100%;
            padding: 0px 10px 

        }
    }

    @media(max-width: 614px){
        .main {
            margin-bottom: 0px;
        }

        .divider, .input-search{
            display: none;
        }

        .logos{
            width: 60%;
            justify-content: space-between;
        }

        .icons{
            > .hide-on-mobile{ 
                display: none;
            }
        }

    }

    

`;

export default Container;

