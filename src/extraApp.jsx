import { useEffect, useState } from "react";
import styled from "styled-components";
import "@theme-toggles/react/css/Classic.css";

import { Classic } from "@theme-toggles/react";

import "./App.css";

function App() {
  const [heading, setHeading] = useState(null);
  const [note, setNote] = useState(null);
  const [noteArr, setNoteArr] = useState([]);
  const [theme, setTheme] = useState({
    backgroundColor: "#242424",
    color: "white",
  });
  // const [noteArr, setNoteArr] = useState(
  //   localStorage.getItem("noteArr")? () => {
  //                  const arr= localStorage.getItem("noteArr")
  //                 //  arr.map(()=>{
  //                   // });

  //       }
  //     : []
  // );
  const [isToggled, setToggle] = useState(true);

  const themeChanger = () => {
    console.log(isToggled);
    setToggle(!isToggled);
    if (isToggled)
      setTheme({
        backgroundColor: "#ffff",
        color: "#000",
      });
    else
    setTheme({
      backgroundColor: "#242424",
      color: "#fff",
    });
  };
  const AddNote = () => {
    if (heading && note) {
      let newNoteArr = [...noteArr, { heading: heading, note: note }];
      setNoteArr(newNoteArr);
      console.log(newNoteArr);
      localStorage.setItem("noteArr", [{ heading, note }]);
      setHeading("");
      setNote("");
    }
  };
  useEffect(() => {
    console.log("new note...");
  }, [noteArr]);
  return (
    <div className="App}" >
      <MainContainer style={theme}>
        <Toggle toggled={isToggled} toggle={() => themeChanger()} />
        <h2>Notes App</h2>
        <h4>By Rudransh</h4>
        <Container>
          <textarea
            rows="7"
            cols="50"
            value={heading || ""}
            onChange={(e) => {
              setHeading(e.target.value);
            }}
            placeholder="Heading....."
          />
          <textarea
            rows="12"
            cols="50"
            value={note || ""}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            placeholder="Your note....."
          />
          <br />
          <Button onClick={AddNote}>Add Note</Button>
        </Container>
        <NoteArea>
          {noteArr.length > 0 ? (
            noteArr.map((indNote) => (
              <Note key={indNote.heading}>
                <h2>{indNote.heading}</h2>
                <h3>{indNote.note}</h3>
              </Note>
            ))
          ) : (
            <h2>EMPTY</h2>
          )}
        </NoteArea>
      </MainContainer>
    </div>
  );
}
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* Colors string mein nhi hone hn */
  /* background-color: blanchedalmond; */
  /* color: textColor; */
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: green; */
  min-width: 50vw;
  width: 60vw;
  /* align-items: center; */
  /* justify-content: c; */

  textarea {
    /* color:black; */
    padding: 5px;
    margin: 10px;
    border: 3px solid white;
    font-size: 1.2rem;
  }
  textarea:nth-child(1) {
    /* background-color: #f12074; */
  }
  textarea:nth-child(2) {
    /* background-color: blue; */
  }
`;
const Note = styled.div`
  background-color: yellow;
  /* color: #000; */
  font-weight: bold;
  height: 200px;
  /* min-height: 200px; */
  width: 400px;
  display: flex;
  /* justify-content: space-around; */
  flex-direction: column;
  align-items: center;
  margin: 10px;
  overflow-y: scroll;
`;
const Button = styled.button`
  background-color: #00000084;
  transition: all 250ms ease-in-out;
  border: transparent;
  font-weight: bold;
  &:hover {
    background-color: #0000004c;
  }
`;
const Toggle = styled(Classic)`
  background-color: red;
  padding: 10px 20px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  font-size: 50px;
  color: #000;
`;
const NoteArea = styled.div`
  margin-top: 20px;
  background-color: #ff0000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export default App;

// https://toggles.dev/

//TODO:Components mein todna h.
