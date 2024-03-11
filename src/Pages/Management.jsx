import { useDispatch, useSelector } from "react-redux";
import FullTasks from "../Components/FullTasks";
import boardsSlice from "../redux/boardsSlice";

export default function Management() {
	const dispatch = useDispatch();
	const boards = useSelector((state) => state.boards);
	const activeBoard = boards.find((board) => board.isActive);
	if (!activeBoard && boards.length > 0)
		dispatch(boardsSlice.actions.setBoardActive({ index: 0 }));

	return (
		<div className="overflow-hidden overflow-x-scroll scrollbar-hide ">
			<FullTasks />
		</div>
	);
}
