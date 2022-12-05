import React, { useState } from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const NotesList = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Note = styled.div`
  position: relative;
  padding: 5px;
  /* background-color: #000; */
  font-weight: bold;
  height: 200px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 10px;
  overflow: auto;
  border-radius: 10px;

  @media (max-width: 786px) {
    width: 200px;
    height: 150px;
    padding: 1px;
  }
  & h2 {
    border-bottom: 3px solid red;
    @media (max-width: 768px) {
      font-size: 17px;
    }
  }
  & h4 {
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;
const Button = styled.button`
  position: absolute;
  bottom: 0;
  /* top:100%; */
  background-color: #190e7e;
  border: none;
  padding: 4px 9px;
  /* border-radius: 2px; */
  width: 100%;
  cursor: pointer;
  transition: all 250ms ease;
  color: #fff;
  font-size: 1rem;
  &:hover {
    background-color: #202896;
  }
`;
const Heading2 = styled.h2`
  font-size: 2.5rem;
  border-radius: 5px;
  border-bottom: 5px solid purple;
  margin: 10px;
`;
export const AllNotes = ({ noteArr, isToggled, DeleteNote }) => {
  let inStyle;
  if (isToggled) {
    inStyle = {
      backgroundColor: "#ffff",
      color: "#000",
    };
  } else {
    inStyle = {
      backgroundColor: "#242424",
      color: "#ffff",
    };
  }

  return (
    <Cont>
      <Heading2>Notes List</Heading2>
      <NotesList>
        {noteArr.length > 0 ? (
          noteArr.map((indNote, idx) => (
            <Note key={idx} style={inStyle}>
              <h2>{indNote.heading}</h2>
              <h3>{indNote.note}</h3>
              <Button onClick={() => DeleteNote(indNote.index, idx)}>
                Delete Note
              </Button>
            </Note>
          ))
        ) : (
          <h2>EMPTY</h2>
        )}
      </NotesList>
    </Cont>
  );
};
