import React, { useState } from "react";
import styled from "styled-components";

const TextCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: purple; */
  height: 50vh;
  & textarea {
    border: 3px solid black;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    font-size: 1rem;
    background-color: #dcd4d4;
    margin: 10px;
  }
  & textarea:nth-child(1) {
    width: 70vw;
  }
  & textarea:nth-child(2) {
    height: 200px;
    width: 70vw;
  }
`;
const Button = styled.button`
  background-color: #fff;
  transition: all 200ms ease-in-out;
  border: transparent;
  cursor: pointer;
  padding: 15px 20px;
  border-radius: 10px;
  color: #000;
  border: 10px solid black;
  &:hover {
    background-color: #e9d758;
  }
  & h3 {
    font-weight: 700;
  }
`;
export const TextArea = ({
  setNoteArr,
  noteArr,
  noteArrLength,
  setNoteArrLength,
}) => {
  const [heading, setHeading] = useState(null);
  const [note, setNote] = useState(null);
  const AddNote = () => {
    if (heading && note) {
      let newNoteArr = [
        ...noteArr,
        { index: noteArr.length++, heading: heading, note: note },
      ];
      setNoteArr(newNoteArr);
      console.log(newNoteArr);
      localStorage.setItem("noteArr", JSON.stringify(newNoteArr));
      setHeading("");
      setNote("");
      // notr;
      setNoteArrLength(noteArr.length++);
    }
  };
  return (
    <TextCont>
      {/* <terxta */}
      <textarea
        placeholder="Enter heading"
        value={heading || ""}
        onChange={(e) => {
          setHeading(e.target.value);
        }}
      />
      <textarea
        placeholder="Enter your note here"
        value={note || ""}
        onChange={(e) => {
          setNote(e.target.value);
        }}
      />
      <br />
      <Button onClick={AddNote}>
        <h3>Add Note</h3>
      </Button>
    </TextCont>
  );
};
