import Button from "ryc-auth/Button";
import useCount from "ryc-auth/Store";

function App() {
  const [state, setState] = useCount();
  return (
    <>
      <div>Count: {state}</div>
      <button onClick={() => setState(state + 1)}>+</button>
      <Button />
    </>
  );
}

export default App;
