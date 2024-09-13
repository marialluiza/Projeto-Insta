import { FreeMode, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "./styles";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SingleStory from "./singleStory";

const stories = [
    { image: "/images/story1.svg", span: "meowed" },

    {
        image: "https://c4.wallpaperflare.com/wallpaper/827/256/895/spirited-away-studio-ghibli-anime-wallpaper-preview.jpg", span: "barked"
    },

    { image: "/images/story2.svg", span: "nathanpilewedboord" },
    { image: "/images/story3.svg", span: "wawawikakawa" },
    { image: "/images/story4.svg", span: "respondeai" },
    { image: "/images/story5.svg", span: "filomoderna" },
    { image: "/images/story6.svg", span: "memes" },
    { image: "/images/story7.svg", span: "9gag" },
    { image: "/images/story8.svg", span: "meowed" },
    {
        image: "https://c4.wallpaperflare.com/wallpaper/827/256/895/spirited-away-studio-ghibli-anime-wallpaper-preview.jpg", span: "barked"
    },
    {
        image: "/images/post1.png", span: "nathanpilewedboord"
    },
    {
        image: "https://motionbgs.com/i/c/364x205/media/135/totoro-on-top-of-a-tree.3840x2160.jpg", span: "wawawikakawa"
    },
    {
        image: "https://cdn.wallpapersafari.com/43/57/u9z5jP.jpg", span: "respondeai"
    },

]

const StoriesComponent: React.FC = () => {

    return (
        <Container>

            <Swiper
                slidesPerView={5.5}
                spaceBetween={20}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
                style={{ marginLeft: 18 }}
                breakpoints={{
                    614: {
                        slidesPerView: 7.5,
                        spaceBetween: 20
                    }
                }}
            >
                {stories.map((item, index) => (
                    <SwiperSlide >
                        <SingleStory image={item.image} span={item.span} key={index}/>
                    </SwiperSlide>
                ))}


            </Swiper>
        </Container>
    )

}

export default StoriesComponent;