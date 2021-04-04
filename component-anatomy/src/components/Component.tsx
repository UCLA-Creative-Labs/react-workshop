import React, { useState, useEffect } from 'react';

function Component(props: { title: string }): JSX.Element {
  /*        +------ The state value
   *        |                 +---- A function to modify the state
   *        |                 |
   *        |                 |                        +-- The default value
   *        |                 |                        |
   *        V                 V                        V                      */
  const [ counter,       setCounter ]       = useState(0);
  const [ statusMessage, setStatusMessage ] = useState("");

  /* A function that updates the `counter` variable */
  const updateCounter = () => { setCounter(oldValue => oldValue + 1) };

  useEffect(() => {
    setStatusMessage("Hello there!");
  }, []);
  /*  \---------- An empty dependency list means this will only be
  *               triggered on the initial render                   */

  useEffect(() => {
    switch(counter % 3) {
      case 0:
        setStatusMessage("I am the 1st message");
        break;
      case 1:
        setStatusMessage("I am the 2nd message");
        break;
      case 2:
        setStatusMessage("I am the 3rd message");
        break;
    }
  }, [ counter ]);
  /*      \------------ This hook will be triggered whenever the `counter`
   *                    state variable changes                             */

  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{counter}</h2>
      <h2>{statusMessage}</h2>

      <button onClick={updateCounter}>Click me!</button>
    </div>
  );
}

export default Component;
