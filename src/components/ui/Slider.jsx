import { useEffect, useRef, useState } from "react"

import {
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu"

export function Slider({
  children,
  itemsPerView = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  },
  autoplay = true,
  autoplayInterval = 5000,
  ariaLabel = "Slider",
  previousLabel = "Previous slide",
  nextLabel = "Next slide",
  className = "",
}) {
  const trackRef = useRef(null)
  const autoplayRef = useRef(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(
    itemsPerView.desktop
  )
  const [isPaused, setIsPaused] = useState(false)
  const [step, setStep] = useState(0)

  const slides = Array.isArray(children)
    ? children
    : [children]

  const totalSlides = slides.length

  const maxIndex = Math.max(
    0,
    totalSlides - visibleCount
  )

  /* =========================================================
     RESPONSIVE CARD COUNT
     ========================================================= */

  useEffect(() => {
    const updateVisibleCount = () => {
  if (window.innerWidth <= 768) {
    setVisibleCount(itemsPerView.mobile)
  } else if (window.innerWidth <= 1024) {
    setVisibleCount(itemsPerView.tablet)
  } else {
    setVisibleCount(itemsPerView.desktop)
  }
}

    updateVisibleCount()

    window.addEventListener("resize", updateVisibleCount)

    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleCount
      )
    }
  }, [
    itemsPerView.desktop,
    itemsPerView.tablet,
    itemsPerView.mobile,
  ])

  /* =========================================================
     MEASURE SLIDE WIDTH + GAP
     ========================================================= */

  useEffect(() => {
    const track = trackRef.current

    if (!track) return

    const measureStep = () => {
      const firstSlide = track.firstElementChild

      if (!firstSlide) return

      const slideWidth =
        firstSlide.getBoundingClientRect().width

      const styles = window.getComputedStyle(track)

      const gap = parseFloat(styles.columnGap) || 0

      setStep(slideWidth + gap)
    }

    measureStep()

    const observer = new ResizeObserver(measureStep)

    observer.observe(track)

    if (track.firstElementChild) {
      observer.observe(track.firstElementChild)
    }

    return () => observer.disconnect()
  }, [visibleCount, totalSlides])

  /* =========================================================
     KEEP INDEX WITHIN RANGE
     ========================================================= */

  useEffect(() => {
    setCurrentIndex((index) =>
      Math.min(index, maxIndex)
    )
  }, [maxIndex])

  /* =========================================================
     NAVIGATION
     ========================================================= */

  const goToNext = () => {
    setCurrentIndex((index) =>
      index >= maxIndex ? 0 : index + 1
    )
  }

  const goToPrevious = () => {
    setCurrentIndex((index) =>
      index <= 0 ? maxIndex : index - 1
    )
  }

  /* =========================================================
     AUTOPLAY
     ========================================================= */

  useEffect(() => {
    if (
      !autoplay ||
      isPaused ||
      maxIndex === 0
    ) {
      return
    }

    autoplayRef.current = window.setInterval(() => {
      setCurrentIndex((index) =>
        index >= maxIndex ? 0 : index + 1
      )
    }, autoplayInterval)

    return () =>
      window.clearInterval(autoplayRef.current)
  }, [
    autoplay,
    autoplayInterval,
    isPaused,
    maxIndex,
  ])

  /* =========================================================
     RENDER
     ========================================================= */

  return (
    <div
      className={`slider ${className}`.trim()}
      style={{
      "--slider-items": visibleCount,
    }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget
          )
        ) {
          setIsPaused(false)
        }
      }}
    >
      <button
        type="button"
        className="slider__arrow"
        onClick={goToPrevious}
        aria-label={previousLabel}
        disabled={maxIndex === 0}
      >
        <LuChevronLeft size={22} />
      </button>

      <div className="slider__viewport">
        <div
          className="slider__track"
          ref={trackRef}
          style={{
            transform: `translateX(-${
              currentIndex * step
            }px)`,
          }}
        >
          {slides.map((child, index) => (
            <div
              className="slider__slide"
              key={child?.key ?? index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="slider__arrow"
        onClick={goToNext}
        aria-label={nextLabel}
        disabled={maxIndex === 0}
      >
        <LuChevronRight size={22} />
      </button>

      <div
        className="slider__pagination"
        aria-label={`${ariaLabel} pagination`}
      >
        {Array.from(
          { length: maxIndex + 1 },
          (_, index) => (
            <button
              key={index}
              type="button"
              className={`slider__dot ${
                currentIndex === index
                  ? "slider__dot--active"
                  : ""
              }`}
              onClick={() =>
                setCurrentIndex(index)
              }
              aria-label={`Go to slide ${index + 1}`}
              aria-current={
                currentIndex === index
                  ? "true"
                  : undefined
              }
            />
          )
        )}
      </div>
    </div>
  )
}