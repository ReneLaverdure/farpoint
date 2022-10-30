import {BannerContainer, BannerTitle} from './Banner.style.jsx'

interface BannerInterface {
    backgroundImage: string;
    title: string;
}

export default function Banner({backgroundImage, title }: BannerInterface) {
  return (
    <BannerContainer image={backgroundImage}>
        <BannerTitle>
            {title}
        </BannerTitle>
    </BannerContainer>
  )
}
