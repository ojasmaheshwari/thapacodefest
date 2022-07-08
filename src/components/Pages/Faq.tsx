import React from 'react';
import Qas from '../MiniComponents/Qas';
import Navbar, { navigation } from '../Navbar';

interface IQuestions {
  id: number
  question: string
  askedBy: string
  askedByName: string
}

interface IAnswer {
  aid: number
  answer: string
  answeredBy: string
  answeredByName: string
}

const Questions: IQuestions[] = [
  {
    id: 1,
    question: "Are there individual 1v1 classes available for students",
    askedBy: "https://randomuser.me/api/portraits/men/3.jpg",
    askedByName: 'Stephen Garza'
  },
  {
    id: 2,
    question: "Are F2F class timings adjustable across different time zones",
    askedBy: "https://randomuser.me/api/portraits/women/96.jpg",
    askedByName: 'Miriam Rose'
  },
  {
    id: 3,
    question: "How much does a premium Edulanta account cost",
    askedBy: "https://randomuser.me/api/portraits/men/52.jpg",
    askedByName: 'Albert Hoffman'
  }
]

const Answers: IAnswer[] = [
  {
    aid: 1,
    answer: "Yes, Individual 1v1 classes are available for students offered by trained, certified professionals.",
    answeredBy: "https://randomuser.me/api/portraits/men/31.jpg",
    answeredByName: 'Jack Synder'
  },
  {
    aid: 2,
    answer: "Yes, Edulanta provided the learners freedom to choose their individual timings if they have a premium account.",
    answeredBy: "https://randomuser.me/api/portraits/men/31.jpg",
    answeredByName: 'Jack Synder'
  },
  {
    aid: 3,
    answer: "Edulanta premium account has different sub-categories which you can check at Pricing section. The lowest one costs 400 INR per month",
    answeredBy: "https://randomuser.me/api/portraits/men/31.jpg",
    answeredByName: 'Jack Synder'
  }
]

const Faq: () => JSX.Element = () => {
  navigation.forEach(element => {
    element.current = false
  });
  navigation[3].current = true
  return (
    <>
      <Navbar />
      <div className='relative min-h-screen bg-gray-200'>
        <h1 className="text-4xl sm:text-5xl text-black text-center
        px-1 py-2">Frequently Asked Questions</h1>
        <div className='flex flex-col items-center gap-10 pt-10 pb-32'>
          {
            Questions.map((q: IQuestions, i: number) => {
              let answerObj: IAnswer = Answers[i]
              return (<Qas {...q} {...answerObj} key={q.id} />)
            })
          }
        </div>
      </div>
    </>)
}

export default Faq
