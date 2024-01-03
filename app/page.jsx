import Slider from '@/components/Slider/Slider'
import SliderButton from '@/components/SliderButton/SliderButton'
import SliderProvider from '@/components/SliderProvider/SliderProvider'
import styles from './page.module.css'

export default function HomePage () {
  return (
    <main className={styles.main}>
      <SliderProvider>
        <Slider />
        <SliderButton prev />
        <SliderButton next />
      </SliderProvider>
    </main>
  )
}
