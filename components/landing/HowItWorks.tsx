'use client'

import { useState } from 'react'

type Tab = 'creator' | 'brand'

interface Step {
  number: number
  icon: string
  title: string
  description: string
}

const creatorSteps: Step[] = [
  {
    number: 1,
    icon: '🎨',
    title: 'Build Your Profile',
    description:
      'Show off your niche, audience stats, rate card, and past collabs. Make brands swipe right.',
  },
  {
    number: 2,
    icon: '🎯',
    title: 'Get Matched',
    description:
      'Browse brand campaigns or let our algorithm match you with brands that fit your vibe.',
  },
  {
    number: 3,
    icon: '💸',
    title: 'Close & Get Paid',
    description:
      'Pitch, negotiate, sign digitally, deliver content, and get paid — all in one place.',
  },
]

const brandSteps: Step[] = [
  {
    number: 1,
    icon: '📋',
    title: 'Post Your Brief',
    description:
      'Tell us your campaign goals, budget, and ideal creator type. Takes 5 minutes.',
  },
  {
    number: 2,
    icon: '🔍',
    title: 'Discover Creators',
    description:
      'Browse vetted UGC creators filtered by niche, audience size, engagement, and location.',
  },
  {
    number: 3,
    icon: '🚀',
    title: 'Launch & Scale',
    description:
      'Approve creators, track deliverables, pay through the platform, and double down on what works.',
  },
]

function StepCard({ step, index, total }: { step: Step; index: number; total: number }) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Dashed connector line between steps — desktop only */}
      {index < total - 1 && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+3.5rem)] right-[calc(-50%+3.5rem)] h-px border-t-2 border-dashed border-violet-200 z-0" />
      )}

      {/* Number circle with gradient */}
      <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 shadow-brand mb-4 group-hover:scale-110 transition-transform duration-300">
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 rounded-full bg-white border-2 border-violet-300 text-xs font-extrabold text-violet-600 shadow-sm">
          {step.number}
        </span>
        <span className="text-3xl leading-none">{step.icon}</span>
      </div>

      {/* Card body */}
      <div className="bg-white rounded-2xl shadow-card px-6 py-5 w-full max-w-xs group-hover:-translate-y-1 group-hover:shadow-card-hover transition-all duration-300">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<Tab>('creator')

  const steps = activeTab === 'creator' ? creatorSteps : brandSteps

  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Closing Deals Has Never Been{' '}
            <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
              This Easy
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            From profile to paycheck in three steps.
          </p>
        </div>

        {/* Tab toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-gray-100 p-1 gap-1">
            {(['creator', 'brand'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-md'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'creator' ? "I'm a Creator" : "I'm a Brand"}
              </button>
            ))}
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
