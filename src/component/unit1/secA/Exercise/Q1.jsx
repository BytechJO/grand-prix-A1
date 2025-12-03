import React, { useState, useRef } from 'react';
import './Q1.css';
import ValidationAlert from "../../../Popup/ValidationAlert";


import img1 from '../../../../assets/unit1/secA/page45/1.svg';
import img2 from '../../../../assets/unit1/secA/page45/2.svg';
import img3 from '../../../../assets/unit1/secA/page45/3.svg';
import img4 from '../../../../assets/unit1/secA/page45/4.svg';
const Q1 = () => {
  const [images, setImages] = useState([
    { id: 1, src: img1, label: '1', correctOrder: 1 },
    { id: 2, src: img2, label: '2', correctOrder: 2 },
    { id: 3, src: img3, label: '3', correctOrder: 3 },
    { id: 4, src: img4, label: '4', correctOrder: 4 },
  ]);

  const [orderedImages, setOrderedImages] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);


  const showCorrectAnswer = () => {
    const sorted = [...images].sort((a, b) => a.correctOrder - b.correctOrder);
    setOrderedImages(sorted);
  };


  const handleDragStart = (e, image) => {
    setDraggedItem(image);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedItem && !orderedImages.find(img => img.id === draggedItem.id)) {
      const newOrder = [...orderedImages, draggedItem];
      setOrderedImages(newOrder);
      setDraggedItem(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const removeImage = (id) => {
    setOrderedImages(orderedImages.filter(img => img.id !== id));
  };

  const checkOrder = () => {
  // عدد الإجابات الصحيحة
  const correctCount = orderedImages.filter((img, index) => img.correctOrder === index + 1).length;

  // هل هناك أي إجابات لم يتم وضعها؟
  const hasEmpty = orderedImages.length < images.length;

  if (hasEmpty) {
    // إذا في إجابات فاضية
    ValidationAlert.info(
      "Incomplete",
      "Some answers are missing.",
      `${orderedImages.length}/${images.length}`
    );
  } else {
    // كل الإجابات موجودة، تحقق من الصح والخطأ
    const isOrderCorrect = correctCount === images.length;

    if (isOrderCorrect) {
      ValidationAlert.success(
        "Good Job!",
        "You got all answers right!",
        `${correctCount}/${images.length}`
      );
    } else {
      ValidationAlert.error(
        "Try Again!",
        "Some answers are incorrect.",
        `${correctCount}/${images.length}`
      );
    }
  }
};



  const resetExercise = () => {
    setOrderedImages([]);
    setShowFeedback(false);
    setIsCorrect(false);
    setCurrentSegment(0);
  };

  return (
    <div className="listening-exercise">

      <div className="q1-exercise-container">

        <div className="images-section">



          <div className="available-images">
            {images.map(image => (
              <div
                key={image.id}
                className={`image-card ${draggedItem?.id === image.id ? 'dragging' : ''} ${orderedImages.find(img => img.id === image.id) ? 'used' : ''}`}
                draggable={!orderedImages.find(img => img.id === image.id)}
                onDragStart={(e) => handleDragStart(e, image)}
              >
                <img src={image.src} alt={image.label} />
                <p>{image.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="drop-zone-section">
          <div
            className="drop-zone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {orderedImages.length === 0 ? (
              <p className="drop-hint">drop here:</p>
            ) : (
              <div className="ordered-images">
                {orderedImages.map((image, index) => (
                  <div key={image.id} className="ordered-image-item">
                    <div className="order-number">{index + 1}</div>
                    <img src={image.src} alt={image.label} />
                    <button
                      className="btn-remove"
                      onClick={() => removeImage(image.id)}
                      title="remove"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="popup-buttons">

          <button onClick={checkOrder} className="show-answer-btn">
            Check
          </button>

          <button onClick={resetExercise} className="try-again-button">
            Reset
          </button>

          <button onClick={showCorrectAnswer} className="check-button2">
            Show Answer
          </button>


        </div>


      </div>
    </div>
  );
};

export default Q1;
