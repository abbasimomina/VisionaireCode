import { useState } from "react"
import { motion as Motion, AnimatePresence } from "framer-motion"
import { LuCompass } from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../components/ui/Card.jsx"

const ecosystemItems = [
  {
    title: "Visionaire Studio",
    description: "The broader creative and product direction.",
  },
  {
    title: "Visionaire Code",
    description: "The software engineering and digital product space.",
    active: true,
  },
  {
    title: "Software Projects",
    description: "Practical work used to learn, build, and experiment.",
  },
  {
    title: "Future Products",
    description: "A direction toward meaningful software products.",
  },
]

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
    current: true,
  },
  {
    number: "05",
    title: "The Direction Ahead",
    text:
      "The direction is toward meaningful software products built from experience, with a continuous focus on usefulness, reliability, and purpose.",
    future: true,
  },
]

export function BrandStory() {
  const [activeChapter, setActiveChapter] = useState(3)

  const activeStory = storyChapters[activeChapter]

  return (
    <section
      className="brand-story"
      aria-labelledby="brand-story-heading"
    >
      <Container>
        {/* Header */}
        <header className="brand-story__header">
          <div className="brand-story__header-content">
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

        {/* Main Content */}
        <div className="brand-story__body">
          {/* Ecosystem */}
          <aside
            className="brand-story__ecosystem"
            aria-labelledby="brand-story-ecosystem"
          >
            <span
              id="brand-story-ecosystem"
              className="brand-story__label"
            >
              Ecosystem
            </span>

            <div className="brand-story__ecosystem-list">
              {ecosystemItems.map((item) => (
                <div
                  key={item.title}
                  className={`brand-story__ecosystem-item ${
                    item.active ? "is-active" : ""
                  }`}
                >
                  <span
                    className="brand-story__ecosystem-indicator"
                    aria-hidden="true"
                  />

                  <div className="brand-story__ecosystem-content">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Story Journey */}
          <div className="brand-story__journey">
            <div className="brand-story__journey-header">
              <span className="brand-story__label">
                Journey
              </span>

              <span className="brand-story__journey-hint">
                Explore the chapters
              </span>
            </div>

            <nav
              className="brand-story__timeline"
              aria-label="Story chapters"
            >
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

                      <span className="brand-story__timeline-title">
                        {chapter.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </nav>

            {/* Active Story */}
            <AnimatePresence mode="wait">
              <Motion.div
                key={activeStory.number}
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
                <Card
                  variant="default"
                  padding="default"
                  className="brand-story__story"
                >
                  <CardHeader className="brand-story__story-header">
                    <span
                      className="brand-story__story-icon"
                      aria-hidden="true"
                    >
                      <LuCompass
                        size={20}
                        strokeWidth={1.8}
                      />
                    </span>

                    <span className="brand-story__story-state">
                      {activeStory.current
                        ? "Current"
                        : activeStory.future
                          ? "Ahead"
                          : "Chapter"}
                    </span>
                  </CardHeader>

                  <CardContent className="brand-story__story-content">
                    <h3>{activeStory.title}</h3>

                    <p>{activeStory.text}</p>
                  </CardContent>

                  <CardFooter className="brand-story__story-footer">
                    <span className="brand-story__story-line" />

                    <span
                      className="brand-story__story-mark"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </CardFooter>
                </Card>
              </Motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}