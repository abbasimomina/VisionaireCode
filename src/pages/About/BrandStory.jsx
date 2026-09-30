import { useState } from "react"
import {
  motion as Motion,
  AnimatePresence,
} from "framer-motion"

import { LuCompass } from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"

const storyChapters = [
  {
    number: "01",
    title: "The Idea",
    text:
      "Software is more than code. It combines clear thinking, purposeful design, sound engineering, and an understanding of the people who use it.",
  },
  {
    number: "02",
    title: "The Motivation",
    text:
      "The focus is on solving real problems and creating digital solutions that are useful in practice, rather than technology for technology's sake.",
  },
  {
    number: "03",
    title: "The Beginning",
    text:
      "Visionaire Code grew through hands-on projects, continuous learning, experimentation, and the process of turning ideas into working software.",
  },
  {
    number: "04",
    title: "The Present",
    text:
      "Today, the focus is on modern websites, web applications, dashboards, and stronger foundations in engineering, product thinking, and user-centered design.",
  },
  {
    number: "05",
    title: "The Direction Ahead",
    text:
      "The direction is toward meaningful software products built from experience, with a continuous focus on usefulness, reliability, and purpose.",
  },
]

export function BrandStory() {
  const [activeChapter, setActiveChapter] = useState(3)

  const activeStory = storyChapters[activeChapter]

  return (
    <section
      className="brand-story background-primary"
      aria-labelledby="brand-story-heading"
    >
      <Container>
        <header className="brand-story__header">
          <div className="brand-story__heading">
            <p className="brand-story__eyebrow">
              The Story
            </p>

            <h2
              id="brand-story-heading"
              className="brand-story__title"
            >
              Built through ideas, experience, and direction.
            </h2>
          </div>

          <div className="brand-story__introduction">
            <p>
              Visionaire Code is part of a broader journey toward
              building useful, thoughtful, and well-engineered
              digital products.
            </p>
          </div>
        </header>

        <div className="brand-story__journey">
          <div className="brand-story__timeline">
            <div
              className="brand-story__timeline-line"
              aria-hidden="true"
            />

            <Motion.div
              className="brand-story__timeline-progress"
              aria-hidden="true"
              animate={{
                width: `${(activeChapter / 4) * 100}%`,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            />

            <div className="brand-story__timeline-items">
              {storyChapters.map((chapter, index) => {
                const isActive = index === activeChapter

                return (
                  <button
                    type="button"
                    key={chapter.number}
                    className={`brand-story__timeline-item ${
                      isActive ? "is-active" : ""
                    }`}
                    onClick={() => setActiveChapter(index)}
                    aria-label={`View ${chapter.title}`}
                    aria-pressed={isActive}
                  >
                    <span
                      className="brand-story__timeline-dot"
                      aria-hidden="true"
                    />

                    <span className="brand-story__timeline-number">
                      {chapter.number}
                    </span>

                    <span className="brand-story__timeline-title">
                      {chapter.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="brand-story__story">
            <div
              className="brand-story__story-visual"
              aria-hidden="true"
            >
              <LuCompass strokeWidth={1} />
            </div>

            <AnimatePresence mode="wait">
              <Motion.div
                key={activeStory.number}
                className="brand-story__story-content"
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
              >
                <span className="brand-story__story-state">
                  {activeStory.number}
                </span>

                <h3>{activeStory.title}</h3>

                <p>{activeStory.text}</p>
              </Motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}