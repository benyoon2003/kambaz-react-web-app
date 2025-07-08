import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      Jiwoo Yoon
      Section 1
      <br></br>
      <a href="https://github.com/benyoon2003/kambaz-react-web-app" id="wd-github">click here </a>
      to go to the github<br />
      <a href="visionary-taiyaki-9e7215.netlify.app" id="wd-app">click here </a>
      to go to the application<br />
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
