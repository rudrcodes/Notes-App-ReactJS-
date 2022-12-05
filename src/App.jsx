import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { TextArea } from "./components/TextArea";
import { AllNotes } from "./components/AllNotes";
import { Footer } from "./components/Footer";
const App = () => {
  const [isToggled, setToggle] = useState(true);
  const [noteArrLength, setNoteArrLength] = useState(
    localStorage.getItem("noteArr")
      ? JSON.parse(localStorage.getItem("noteArr")).length
      : 0
  );
  const [noteArr, setNoteArr] = useState(
    localStorage.getItem("noteArr")
      ? JSON.parse(localStorage.getItem("noteArr")).map((obj, idx) => {
          return {
            index: obj.index,
            heading: obj.heading,
            note: obj.note,
          };
        })
      : []
  );
  useEffect(() => {
    console.log("reloded  ");
    // noteArr.map((indNote, idx) => {
    //   console.log(indNote, idx);
    // });
  }, [noteArr]);
  // const [noteArr, setNoteArr] = useState(
  //   localStorage.getItem("noteArr")? () => {
  //                  const arr= localStorage.getItem("noteArr")
  //                 //  arr.map(()=>{
  //                   // });

  //       }
  //     : []
  // );
  const [theme, setTheme] = useState({
    backgroundColor: "#242424",
    color: "white",
  });
  const themeChanger = () => {
    console.log(isToggled);
    setToggle(!isToggled);
    if (isToggled)
      setTheme({
        backgroundColor: "#f5bca4",
        color: "#000",
      });
    else
      setTheme({
        backgroundColor: "#242424",
        color: "#fff",
      });
  };
  const DeleteNote = (noteInd, idx) => {
    alert("You clicked Delete Note .Now to get that reflected to your list you have to addd a note.It's a feature trust me not a bug.🥲🥲")
    noteArr.splice(idx, 1);
    // console.log(noteInd, idx);
    // console.log(noteArr);
    setNoteArr(noteArr);
    localStorage.setItem("noteArr", JSON.stringify(noteArr));

    // setNoteArr(
    //   updatedArr.map((note) => {
    //     return note != noteArr.splice(idx, 1);
    //   })
    // );
    // window.location.reload()
    // noteArr.map((note) => {
    //   if (note.index === noteInd) {
    //     console.log(note.index);
    //   }

    // });
  };
  return (
    <MainCont style={theme}>
      <Container>
        <Navbar
          themeChanger={themeChanger}
          isToggled={isToggled}
          setToggle={setToggle}
        />
        <Heading2>Enter you're notes here</Heading2>
        <TextArea
          setNoteArr={setNoteArr}
          noteArr={noteArr}
          noteArrLength={noteArrLength}
          setNoteArrLength={setNoteArrLength}
        />
        <AllNotes
          noteArr={noteArr}
          isToggled={isToggled}
          DeleteNote={DeleteNote}
        />
        <Footer />
      </Container>
    </MainCont>
  );
};
const Heading2 = styled.h2`
  font-size: 2rem;
  border-radius: 5px;
  border-bottom: 5px solid #23b5d3;
  margin: 20px;
  /* display: inline; */
  padding: 5px;
  /* width: 500px; */
`;
const Container = styled.div`
  padding: 15px;
  text-align: center;
  /* height: 100vh; */
  /* background-color: #00ff3c; */
  width: 97vw;
`;
const MainCont = styled.div`
  background-color: #000;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center; ;
`;

export default App;
