import styled from "styled-components";

const Container = styled.div`

.highLight-account{
        display: flex;
        align-items: center;
        font-size: 14px;

        & img{
            width: 56px;
            height: 56px;
            border-radius: 100%;
            object-fit: cover;
        }

        & span{
            color: gray;
        }
    }

    .image-wrapper{
        & img{
            margin-right: 17px;
        }
    }

    .suggestions{
        display: flex;
        justify-content: space-between;

        margin-top: 24px;
        & span{
            font-size: smaller;
            color: gray;
        }

        & a{
            font-size: small;
            font-weight: 400;

        }
    }

    .cards{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0px 10px 0px;
        margin-top: 5px;
        cursor: pointer;

        & img{
            width: 32px;
            height: 32px;
            object-fit: cover;
            border-radius: 100%;
        }

        & .toGray{
            color: gray;
        }
    }

    .span-name-wrapper{
        display: flex;
        flex-direction: column;
    
        & .span-name{
            font-size: small;
            font-weight: 700;
        }


        & .toGray{
            font-size: smaller;
            color: #8E8E8E;
        } 
    }

    .follow-wrapper{
        font-weight: 500;
    }

`

export default Container;