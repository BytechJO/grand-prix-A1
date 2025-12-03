import React from 'react'
import Q1 from './Exercise/Q1';
import Q2 from './Exercise/Q2';
import sound1 from '../../../assets/unit1/secA/sounds/11.mp3';
import './page5.css'

const Page5 = ({ bgImage, openPopup }) => {

  return (
    <div
      className="page_1-background"
    >
      <img src={bgImage} />

      <button
        id="u1saq1btn"
        onClick={() =>
          openPopup({
            content: <Q1 />,     // هنا التعديل
            questionText: "This should work now",
            audioSrc: sound1
          })
        }
      >
      </button>

    </div >
  )
}

export default Page5;