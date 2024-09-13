import styled from "styled-components";

const Container = styled.div`

    .main{
        display: flex;
        justify-content: center;
    }

    /* Lado esquerdo do conteúdo da página com: stories e posts */
    .content{
        width: 65%; 
        display: flex;
    }

    .stories-posts{
        width: 65%;
        display: flex;
        flex-direction: column;
    }

    .stories-wrapper{
        border: 1px solid var(--soft-gray);
        border-radius: 4px;
    }

    .posts{
        
    }

    /* Lado direito do conteúdo da página com: sidebar */
    .sidebar{
        width: 35%;
        padding: 20px;
    }
    
    @media(max-width: 935px){

        .sidebar{
            display: none;
        }

        .content{
            width: 100%; 
            display: flex;
            justify-content: center;
        }

        .stories-posts{
            width: 80%;
        }
    }

    @media(max-width: 614px){

        .stories-posts{
            width: 100%;
        }
    }


`
export default Container;