// import React, { useState } from 'react'
// import Question from './Question'
// import Answer from './Answer'

// const FAQs = () => {

//     const [index,SetIndex] = useState(0);

//     const {Question,Answer} = tracks[index];



//   return (


//     <div style={{width:'20',display:'flex',flexDirection:'column',alignItems:'center',}}>
      
//       <h1 >FAQs</h1>
//      <div style={{display:'flex',flexDirection:'row'}}>
//      <div className="questionColumn">
//         <Question/>
//         <Question/>
//         <Question/>
//         <Question/>
//         <Question/>
//         <Question/> 
//       </div>
//       <div>
//         <Answer/>
//       </div>
//         </div> 
      
//     </div>
//   )
// }

// export default FAQs


import React, { useState } from 'react';
import '../styles/Ap.css'; // Import your CSS file for styling

const FAQs = () => {
     
    const Answers =  [
     
        {
            Answer: 'one ipsum, dolor sit amet consectetur adipisicing elit. Commodi, veniam.',
            
          
        },
        {
            // img_src: YosemiteImg,
            Answer: 'two ipsum, dolor sit amet consectetur adipisicing elit. Commodi, veniam.',

    

        },

        {
            // img_src: AudioImg,
            Answer: 'three ipsum, dolor sit amet consectetur adipisicing elit. Commodi, veniam.',

        },
        {
            Answer: 'four ipsum, dolor sit amet consectetur adipisicing elit. Commodi, veniam.',

            // img_src: LazarusImg,
            // src: Lazarus,
        },
        {
            Answer: 'five ipsum, dolor sit amet consectetur adipisicing elit. Commodi, veniam.',

        },
    ]
    const questions = [
        'Question 1',
        'Question 2',
        'Question 3',
        'Question 4',
        'Question 5',
      ];
    
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [answer, setAnswer] = useState(`${Answers[0].Answer}`);

 
  const handleQuestionClick = (index) => {
    setSelectedQuestion(index);
    // You can set the answer content based on the selected question index or any logic you prefer
    setAnswer(`${Answers[index].Answer}`);
  };

  return (
    <div style={{width:'100vw',display:'flex',fontFamily: 'Grtsk',flexDirection:'column',alignItems:'center'}}>
  <div className="FAQ" style={{width:'61.5vw',textAlign:'start',display:'flex',textAlign:'start',fontSize:'60px',fontWeight:'bold'}}>
    FAQs
  </div>

    <div className="app-container">
      <div className="question-container">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`question-box ${selectedQuestion === index ? 'selected' : ''}`}
            onClick={() => handleQuestionClick(index)}
          >
          {index+1}. {question}
          </div>
        ))}
      </div>
      <div className="answer-box" style={{ background: '#9779F5'}}>
        {selectedQuestion !== null && <p>{answer}</p>}
      </div>
    </div>
  




    </div>
  )
}

export default FAQs
