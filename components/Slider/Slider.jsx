'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useSlider } from '@/components/SliderProvider/SliderProvider'
import 'swiper/scss'

export default function Slider () {
  const { setSwiper } = useSlider()

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={50}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
      <SwiperSlide>Slide 10</SwiperSlide>
    </Swiper>
  )
}
