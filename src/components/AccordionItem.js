import { useRef } from "react";

const AccordionItem = ({ faq, active, onToggle }) => {
  const { question, answer } = faq;

  const contentEl = useRef();

  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <p className="button" onClick={onToggle}>
        {question}
        <i className={ active ? "fa-solid fa-lg fa-caret-up" : "fa-solid fa-lg fa-caret-down"}></i>
      </p>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;