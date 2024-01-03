'use client'

import { useSlider } from '@/components/SliderProvider/SliderProvider'

export default function SliderButton ({ next, prev }) {
  const { swiper } = useSlider()

  if ((!next && !prev) || !swiper) {
    return null
  }

  function handleClick () {
    if (next) {
      swiper.slideNext()
    } else {
      swiper.slidePrev()
    }
  }

  return (
    <button onClick={handleClick}>Slide to the {next ? 'next' : 'previous'} slide</button>
  )
}
