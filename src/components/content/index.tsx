"use client"

import PostComponent from "./posts";
import SideBar from "./sidebar";
import StoriesComponent from "./stories";
import Container from "./styles";

const posts = [
    {
        image: "https://c4.wallpaperflare.com/wallpaper/827/256/895/spirited-away-studio-ghibli-anime-wallpaper-preview.jpg",
        name: "Chihiro",
        path: ""
    },
    {
        image: "/images/post1.png",
        name: "Clique aqui 🐶",
        path: "/petLife"
    },
    {
        image: "https://motionbgs.com/i/c/364x205/media/135/totoro-on-top-of-a-tree.3840x2160.jpg",
        name: "Totoro",
        path: ""
    },
    {
        image: "https://cdn.wallpapersafari.com/43/57/u9z5jP.jpg",
        name: "Tororo",
        path: ""

    },
]


const ContentComponent: React.FC = () => {

    return (
        <Container>

            <div className="main">
                <div className="content">

                    <div className="stories-posts">
                        <div className="stories-wrapper">
                           <StoriesComponent/>
                        </div>

                        <div className="posts">
                            {posts.map((item, index) => (
                                <PostComponent key={index} image={item.image} name={item.name} path={item.path}/>
                            ))}
                        </div>
                    </div>

                    <div className="sidebar">
                        <SideBar highlightImage={posts[0].image} cardImage={posts[2].image} />
                    </div>

                </div>
            </div>

        </Container>
    )

}

export default ContentComponent;