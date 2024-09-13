import styled from "styled-components";

const Container = styled.div`

    .main{
        border: 1px solid var(--soft-gray);
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        height: 100%;
    }

    .header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
    
    .profile-wrapper{
        width: 50%;
        margin-left: 15px;
        display: flex;
        align-items: center;
        gap: 15px;

        & img{
            width: 35px;
            height: 35px;
            cursor: pointer;
            border-radius: 100%;
        }

        & span{
            font-size: small;
            font-weight: 600;
            color: #262626;
            cursor: pointer;
        }

        > a {
            text-decoration: none;
        }
    }

    .ellipsi-wrapper{
        display: flex;
        justify-content: end;
        width: 50%;
        margin-right: 15px;

    }

    .anticon {
        font-size: large;
    }

    .image-wrapper{
        height: 50%;
        
        & img {
            width: 100%;
            max-height: 600px;
            object-fit: cover;
            aspect-ratio: 1 / 1;
        }
    }

    .legend{
    }

    .icons{
        padding: 10px 15px 10px 15px;
        display: flex;
        justify-content: space-between;
    }

    .interaction-icons{
        display: flex;
        gap: 10px;
    }

    .likes{
        padding: 0px 15px 10px 15px;
        display: flex;
        align-items: center;

        & img{
            width: 20px;
            height: 20px;
            margin-right: 10px;
            border-radius: 100%;
            object-fit: cover;
        }

        & span{
            margin-right: 4px; 
            font-size: small;
        }
    }

    @media(max-width: 614px){

        .main{
            margin-top: 0px;
        }
    }
`

export default Container;