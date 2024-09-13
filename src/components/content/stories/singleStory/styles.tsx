import styled from "styled-components"

const Container = styled.div`
    .img-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
        
        & span{
            margin-top: 4px;
            font-size: smaller;
            width: 60px; 
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis; 
        }
    }

    .gradient{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(to right, red, orange);
        padding: 2px;
        
    }

    .image{
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: white;
    padding: 2px;
    }

    @media (max-width: 614px){
        .img-wrapper{
            > img {
                width: 49px;
                margin: 10px;
            }
        }
    }
`

export default Container