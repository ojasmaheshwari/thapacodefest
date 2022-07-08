import { CurrencyDollarIcon, ClockIcon, AcademicCapIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import Navbar, { navigation } from '../Navbar'

const features = [
  {
    name: 'Both free and premium classes are available!',
    description:
      'We have both free and paid classes available at Edulantis. You can watch recorded lectures for free or can enroll in live courses and bootcamps for very cheap prices.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Over 10000+ hours of content available and still growing!',
    description:
      'Our community is very big. Over 6000 hours of free content is already made available at our site. You will never fall short of things to learn.',
    icon: ClockIcon,
  },
  {
    name: 'Learn from professional teachers from around the world!',
    description:
      'Learn from trained professionals and entrepreneurs. Hundreds of teachers and artists from world-famous universities teach at Edulantis.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Both live and recorded classes available!',
    description:
      'Bored of recorded classes, want a live class? Do not worry, we have got you covered!',
    icon: EmojiHappyIcon,
  },
]

export default function Example() {
  navigation.forEach(element => {
    element.current = false
  });
  navigation[1].current = true
  return (
    <>
      <Navbar />
      <div className="py-12 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Edulantis</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Source For Online Education
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Edulantis provides the following benefits and features for the learner.
              These are some highly advantageous offers!
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
