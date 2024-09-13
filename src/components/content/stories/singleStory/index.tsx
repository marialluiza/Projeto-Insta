import Container from "./styles";

interface SingleStoryProps {
    image: string
    span: string
}

const SingleStory: React.FC<SingleStoryProps> = ({ image, span }) => {

    return (
        <Container>
            <div className="img-wrapper">
                <div className="gradient">
                    <img className="image" src={image} />
                </div>
                <span>{span}</span>
            </div>
        </Container>
    )

}

export default SingleStory;

