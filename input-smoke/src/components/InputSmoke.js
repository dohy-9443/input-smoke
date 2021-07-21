import React, { useState, useEffect } from "react";
import "./InputSmoke.scss";

const InputSmoke = () => {
  const [names, setNames] = useState([
    { id: 1, text: "No pain No gain" },
    { id: 2, text: "Don't dream it, be it" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(3);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const namesList = names.map((name) => <p key={name.id}>{name.text}</p>);

  useEffect(() => {
    const ps = document.querySelectorAll("p");

    ps.forEach((p) => {
      p.innerHTML = p.textContent.replace(/\S/g, "<span>$&</span>");
    });
    const letters = document.querySelectorAll("span");
    for (let i = 0; i < letters.length; i++) {
      letters[i].addEventListener("mouseover", () => {
        letters[i].classList.add("active");
      });
    }
  }, [inputText]);

  return (
    <div>
      <div className="section">
        <h2>문장을 입력 후 마우스로 올려보세요!</h2>
        <input
          value={inputText}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder="문장을 입력하세요."
        />
        <button onClick={onClick}>추가</button>
        <div className="p-list">{namesList}</div>
      </div>
    </div>
  );
};

export default InputSmoke;
