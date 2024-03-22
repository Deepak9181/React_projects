import React, { useState } from "react";

export default function About() {
  const [mystyle, setmystyle] = useState({
    background: "white",
    color: "black",
    border: "2px solid black",
  });

  const [mybtn, setmybtn] = useState("Enable Dark mode");

  const ChangeMode = () => {
    if (mystyle.background === "white") {
      setmystyle({
        color: "white",
        background: "black",
        border: "2px solid white",
      });
      setmybtn("Enable light mode");
    } else {
      setmystyle({
        border: "2px solid black",
        background: "white",
        color: "black",
      });
      setmybtn("Enable Dark mode");
    }
  };

  return (
    <div className="container">
      <div className="container" style={mystyle}>
        There are important differences between plain text (created and edited
        by text editors) and rich text (such as that created by word processors
        or desktop publishing software). Plain text exclusively consists of
        character representation. Each character is represented by a
        fixed-length sequence of one, two, or four bytes, or as a
        variable-length sequence of one to four bytes, in accordance to specific
        character encoding conventions, such as ASCII, ISO/IEC 2022, Shift JIS,
        UTF-8, or UTF-16. These conventions define many printable characters,
        but also non-printing characters that control the flow of the text, such
        as space, line break, and page break. Plain text contains no other
        information about the text itself, not even the character encoding
        convention employed. Plain text is stored in text files, although text
        files do not exclusively store plain text. Since the early days of
        computers, plain text was (once by necessity and now by convention)
        generally displayed using a monospace font, such that horizontal
        alignment and columnar formatting were sometimes done using whitespace
        characters. Rich text, on the other hand, may contain metadata,
        character formatting data (e.g. typeface, size, weight and style),
        paragraph formatting data (e.g. indentation, alignment, letter and word
        distribution, and space between lines or other paragraphs), and page
        specification data (e.g. size, margin and reading direction). Rich text
        can be very complex. Rich text can be saved in binary format (e.g. DOC),
        text files adhering to a markup language (e.g. RTF or HTML), or in a
        hybrid form of both (e.g. Office Open XML). Text editors are intended to
        open and save text files containing either plain text or anything that
        can be interpreted as plain text, including the markup for rich text or
        the markup for something else (e.g. SVG).
      </div>

      <div className="container">
        <button className="btn btn-primary my-3" onClick={ChangeMode}>
          {mybtn}
        </button>
      </div>
    </div>
  );
}
