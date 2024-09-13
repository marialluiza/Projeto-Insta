import Container from "./styles";

interface Images {
    highlightImage: string;
    cardImage: string;
}

const SideBar: React.FC<Images> = ({ highlightImage, cardImage }) => {

    return (
        <Container>
            <div className="highLight-account">
                <div className="image-wrapper">
                    <img src={highlightImage} />
                </div>

                <div>
                    <p>catanacomics</p>
                    <span >Catana</span>
                </div>

            </div>

            <div className="Suggestions">
                <div className="suggestions">
                    <span>Sugestões para você</span>
                    <a style={{ cursor: "pointer" }}>Ver tudo</a>

                </div>

                <div className="cards">
                    <div style={{display: "flex", gap: 15}}>
                        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                            <img src={cardImage} />
                        </div>
                        <div className="span-name-wrapper">
                            <span className="span-name">good.vibes.memes</span>
                            <span className="toGray">Segue você</span>
                        </div>

                    </div>
                    <div className="follow-wrapper">
                        <span style={{ color: "#139EF2" }}>Seguir</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SideBar;