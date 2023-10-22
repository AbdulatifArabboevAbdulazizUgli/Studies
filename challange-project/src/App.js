import "./App.css";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: 2,
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: 3,
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

// function Question1() {
//   // let i = 1;

//   const [selectedId, setSelectedId] = useState(null);

//   const handleClick = (id) => {
//     setSelectedId(id !== selectedId ? id : null);
//   };
//   return (
//     <div>
//       {faqs.map((question, i) => (
//         <div
//           key={question.id}
//           className={question.id === selectedId ? "item open" : "item"}
//         >
//           <div className="number">{`0${i + 1}`}</div>
//           <div className="title" onClick={() => handleClick(question.id)}>
//             {question.title}
//           </div>
//           <span className="icon">{question.id === selectedId ? "-" : "+"}</span>

//           {question.id === selectedId ? (
//             <div className="content-box">{question.text}</div>
//           ) : (
//             ""
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// function QuestionList1() {
//   return (
//     <div className="accordion">
//       <Question1 />
//     </div>
//   );
// }

function Question({ numQuestion, question, setSelectedId, selectedId }) {
  const { id, title, text } = question;

  function handleId() {
    setSelectedId(selectedId === id ? null : id);
  }

  return (
    <div className={selectedId === id ? "item open" : "item"}>
      <div className="number">0{numQuestion}</div>
      <div className="title" onClick={handleId}>
        {title}
      </div>

      <span className="icon">{id === selectedId ? "-" : "+"}</span>

      {id === selectedId ? <div className="content-box">{text}</div> : null}
    </div>
  );
}

function QuestionList() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((question, i) => (
        <Question
          setSelectedId={setSelectedId}
          selectedId={selectedId}
          key={question.id}
          numQuestion={i + 1}
          // id={question.id}
          // answer={question.text}
          // children={question.title}
          question={question}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      {/* <QuestionList1 /> */}
      <QuestionList />
    </div>
  );
}

export default App;
