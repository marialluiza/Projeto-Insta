import { EllipsisOutlined } from "@ant-design/icons";
import Container from "./styles";
import Link from "next/link";

interface PostsProps {
    image: string;
    name: string
    path: string
}

const PostComponent: React.FC<PostsProps> = ({ image, name, path }) => {
    return (
        <Container>
            <div >
                <div className="main">

                    <div className="header">
                        <div className="profile-wrapper">
                            <img src={image} />
                            <a href={path}>
                                <span>{name}</span>
                            </a>
                        </div>

                        <div className="ellipsi-wrapper">
                            <EllipsisOutlined />
                        </div>
                    </div>

                    <div className="image-wrapper">
                        <img src={image} />
                    </div>

                    <div className="legend">
                        <div className="icons">
                            <div className="interaction-icons">
                                <img src="/icons/heart.svg" />
                                <img src="/icons/chatbubble.svg" />
                                <img src="/icons/paper-plane.svg" />

                            </div>
                            <img src="/icons/saveBobMark.svg" />
                        </div>

                        <div className="likes">
                            <img src="/images/story2.svg" />
                            <span >Curtido por </span>
                            <span style={{ fontWeight: "bold" }}>jubileu</span>
                            <span> e </span>
                            <span style={{ fontWeight: "bold" }}>outras 101.523 pessoas</span>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default PostComponent;