import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispath = useAppDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 rounded-md p-10 bg-slate-50">
        <button
          onClick={() => dispath(increment(1))}
          className="px-3 py-2 text-xl text-white font-semibold rounded-md bg-green-500"
        >
          Increment
        </button>
        <button
          onClick={() => dispath(incrementByValue(5))}
          className="ml-5 px-3 py-2 text-xl text-white font-semibold rounded-md bg-green-500"
        >
          Increment By 5
        </button>
        <h1 className="mx-10 text-3xl">{count}</h1>
        <button
          onClick={() => dispath(decrement(1))}
          className="px-3 py-2 text-xl text-white font-semibold rounded-md bg-red-500"
        >
          Decrement
        </button>
        <button
          onClick={() => dispath(decrementByValue(5))}
          className="ml-5 px-3 py-2 text-xl text-white font-semibold rounded-md bg-red-500"
        >
          Decrement By 5
        </button>
      </div>
    </div>
  );
}

export default App;
