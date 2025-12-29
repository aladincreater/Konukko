import { useEffect, useRef, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { SearchBar } from './searchBar';

export const TypeWriter = (props) => {
  const [cycle, setCycle] = useState(0);

  const messages = props.messages;
  return (
    <h1 style={{ textAlign: "center", marginTop: "50px" }}>
      <Typewriter
        words={messages}
        loop={false} // print all messages once cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
        onLoopDone={() => {
          // after all messages are printed, clear and restart
          setCycle(cycle + 1);
        }}
      />
    </h1>

  );
};
