import React from 'react'
import Q1 from './Exercise/Q1';
const Page5 = ({ bgImage, openPopup }) => {

  const handleOpenExercise = () => {
    // 3. استخدم openPopup لفتح التمرين
    openPopup(<Q1 />);
  };


  return (
    <div
      className="page_1-background"
    >
      <img src={bgImage} />

      {/* <button onClick={handleOpenExercise} >
        open
      </button> */}

    </div>
  )
}

export default Page5;