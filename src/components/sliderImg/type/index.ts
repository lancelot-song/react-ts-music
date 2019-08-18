import { SwiperOptions } from 'swiper'
export type TSwiperOptions = Partial<SwiperOptions>;
export interface IProps extends TSwiperOptions {
    bannerList : [];
}