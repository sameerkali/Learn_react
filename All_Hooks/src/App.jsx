// ---------------------------------------------------------- useEffact -------------------------------
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [Count, setCount] = useState(0);
//   const [Counts, setCounts] = useState(0);

//   useEffect(() => {
//     alert("i am clicked"); /* basicully there are three method to run useEffect hook 01: without any paramiters(run everytime with every changes) 02: use [] as a paramiter that means the hook call only once 03: pass the paramiter (pass the useState name inside useEffect paramiter) now every time a perticular paramiter is changes the useEffet call  */
//   },[Count]);

//   const inc = () => {
//     setCount(Count + 1);
//   };

//   const dec = () => {
//     setCount(Count - 1);
//   };



//   const incs = () => {
//     setCounts(Counts + 1);
//   };

//   const decs = () => {
//     setCounts(Counts - 1);
//   };

//   return (
//     <>
//       <button onClick={inc}>mujhe dabao +</button>
//       <h1>{Count}</h1>
//       <button onClick={dec}>mujhe dabao - </button>
//       <br/>
//       <button onClick={incs}>mujhe dabao +</button>
//       <h1>{Counts}</h1>
//       <button onClick={decs}>mujhe dabao - </button>

//     </>
//   );
// };

// export default App;
