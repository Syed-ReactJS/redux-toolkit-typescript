import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../app/features/counterSlice";
import "./Counter.css";
const Counter = () => {
  const select = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  console.log("select :>> ", select);
  return (
    <>
      <h1>Redux App setup</h1>
      <div className='main-conatiner'>
        <p>{select?.value}</p>
        <h1 onClick={() => dispatch(increment(1))}>+</h1>
        <h1 onClick={() => dispatch(decrement())}>-</h1>
      </div>
    </>
  );
};

export default Counter;
