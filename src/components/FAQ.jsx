export const FAQ = ({ curData, isActive, onToggle }) => {
  const { question, answer } = curData;

  return (
    <>
      <style>
        {`
        li {
          list-style: none;
          margin-bottom: 12px;
        }

        .accordion-container {
          display: grid;
          grid-template-rows: auto;
          gap: 0px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color:rgb(70, 68, 68);
          overflow: hidden;
        }

        .accordion-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background-color:rgb(60, 56, 56);
          cursor: pointer;
        }

        .accordion-question {
          font-weight: 600;
          font-size: 1rem;
          margin: 0;
          flex: 1;
        }

        .accordion-btn {
          padding: 6px 12px;
          font-size: 0.9rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .accordion-btn:hover {
          background-color: #0056b3;
        }

        .active-btn {
          background-color: #28a745;
        }

        .accordion-answer {
          display: block;
          padding: 12px 16px;
          background-color: #fafafa;
          border-top: 1px solid #e0e0e0;
          font-size: 0.95rem;
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}
      </style>
      <li>
        <div className=" accordion-grid  ">
          <p className="accordion-question">{question}</p>
          {isActive && <p> {answer} </p>}
          <button onClick={onToggle} className={isActive ? "active-btn" : ""}>
            {isActive ? "close" : "show"}{" "}
          </button>
        </div>
      </li>
    </>
  );
};
