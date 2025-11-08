import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { SplitText } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
  const videoRef = useRef()
  const videoTimelineRef = useRef()
  const isMobile = useMediaQuery({ maxWidth: 767 })

  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars, words' })
    const paraSplit = new SplitText('.subtitle', { type: 'lines' })

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
    })
    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1.3,
    })
    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top', //when the top of the home page hit the top of the screen
        end: 'bottom top',
        scrub: true,
      },
    })
      .to('.right-leaf', { y: 400 }, 0)
      .to('.left-leaf', { y: -400 }, 0)

    const startValue = isMobile ? 'top 50%' : 'center 60%'
    const endValue = isMobile ? '120% top' : 'bottom top'

    const tl =gsap.timeline({
      scrollTrigger: {
        trigger: videoRef.current,
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    })

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      })
    }
  }, [])
  return (
    <>
      <section id='hero' className='noisy'>
        <h1 className='title'>MOJITO</h1>
        <img src="/images/hero-left-leaf.png" alt='left-leaf' className='left-leaf' />
        <img src="/images/hero-right-leaf.png" alt='right-leaf' className='right-leaf' />
        <div className='body'>
          <div className='content'>
            <div className='space-y-5 hidden md:block'>
              <p>Cool. Crisp. Classic</p>
              <p className='subtitle'>
                Sip the Spirit<br /> of Summer
              </p>
            </div>

            <div className='view-cocktails'>
              <p className='subtitle'>
                Every cocktail on our menu is blend of rewmium ingredient, creative, flair, and timeless recipes - designed to delight your senses.
                <a href='#cocktails'>View Cocktails</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          src='/videos/input.mp4'
          ref={videoRef}
          muted
          playsInline
          preload='auto'
        />
      </div>
    </>
  )
}

export default Hero

