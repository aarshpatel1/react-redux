import { useDispatch, useSelector } from "react-redux";
import { incremented, decremented, reseted } from "../Application/counterSlice";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

function Counter() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<div className="d-flex flex-column align-items-center justify-content-center vh-100">
				<h1>Counter: {count}</h1>
				<div className="d-flex align-items-center justify-content-center mt-3">
					<button
						onClick={() => dispatch(incremented())}
						className="btn btn-secondary mx-1"
					>
						<FaPlus />
					</button>
					<button
						onClick={() => dispatch(decremented())}
						className="btn btn-secondary mx-1"
					>
						<FaMinus />
					</button>
					<button
						onClick={() => dispatch(reseted())}
						className="btn btn-secondary mx-1"
					>
						<GrPowerReset />
					</button>
				</div>
			</div>
		</>
	);
}

export default Counter;
