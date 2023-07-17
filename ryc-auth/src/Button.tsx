import useCount from "./store";

export default function Button() {
  const [state, setState] = useCount();
  return (
    <div>
      Button from Auth Remote updated: {state}
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  );
}
