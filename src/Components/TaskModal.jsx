import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import elipsis from "../assets/icon-vertical-ellipsis.svg";
import ElipsisMenu from "./ElipsisMenu";
import DeleteModal from "./DeleteModal";
import AddEditTaskModal from "./AddEditTaskModal";
import boardsSlice from "../redux/boardsSlice";

function TaskModal({ taskIndex, colIndex, setIsTaskModalOpen }) {
	const dispatch = useDispatch();
	const boards = useSelector((state) => state.boards);
	const board = boards.find((board) => board.isActive === true);
	const col = board.columns.find((col, i) => i === colIndex);
	const task = col.tasks.find((task, i) => i === taskIndex);

	const [isElipsisMenuOpen, setIsElipsisMenuOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	let completed = 0;
	task.subtasks.forEach((subtask) => {
		if (subtask.isCompleted) {
			completed++;
		}
	});

	const [status, setStatus] = useState(task.status);
	const [newColIndex, setNewColIndex] = useState(board.columns.indexOf(col));
	const onChange = (e) => {
		setStatus(e.target.value);
		setNewColIndex(e.target.selectedIndex);
	};

	const onClose = (e) => {
		if (e.target !== e.currentTarget) {
			return;
		}
		dispatch(
			boardsSlice.actions.setTaskStatus({
				taskIndex,
				colIndex,
				newColIndex,
				status,
			})
		);
		setIsTaskModalOpen(false);
	};

	const onDeleteBtnClick = (e) => {
		if (e.target.textContent === "Delete") {
			dispatch(boardsSlice.actions.deleteTask({ taskIndex, colIndex }));
			setIsTaskModalOpen(false);
			setIsDeleteModalOpen(false);
		} else {
			setIsDeleteModalOpen(false);
		}
	};

	const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

	const setOpenEditModal = () => {
		setIsAddTaskModalOpen(true);
		setIsElipsisMenuOpen(false);
	};

	const setOpenDeleteModal = () => {
		setIsElipsisMenuOpen(false);
		setIsDeleteModalOpen(true);
	};

	return (
		<div
			onClick={onClose}
			className=" fixed right-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide  z-50 left-0 bottom-0 justify-center items-center flex dropdown ">
			{/* ===================== MODAL SECTION ===================== */}

			<div className=" scrollbar-hide overflow-y-scroll max-h-[95vh]  my-auto  bg-white text-black  font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto w-full px-8 py-8 rounded-xl">
				<div className=" relative flex justify-between w-full items-center">
					<h1 className=" text-lg text-center relative left-[15%] ">
						{task.title}
					</h1>

					<img
						onClick={() => {
							setIsElipsisMenuOpen((prevState) => !prevState);
						}}
						src={elipsis}
						alt="elipsis"
						className="cursor-pointer h-6"
					/>
					{isElipsisMenuOpen && (
						<ElipsisMenu
							setOpenEditModal={setOpenEditModal}
							setOpenDeleteModal={setOpenDeleteModal}
							type="Task"
						/>
					)}
				</div>
				<p className=" text-gray-500 font-[600] tracking-wide text-xs pt-6">
					{task.description}
				</p>

				<p className=" pt-6 text-gray-500 tracking-widest text-sm">
					Subtasks ({completed} of {task.subtasks.length})
				</p>

				{/* ===================== subtasks section ===================== */}

				<div className=" mt-3 space-y-2">
					{task.subtasks.map((subtask, index) => {
						return (
							<div
								className=" w-full flex hover:bg-[#635fc740] rounded-md relative items-center justify-start p-3 gap-4 bg-[#f4f7fd]"
								key={index}>
								<input
									className=" w-4 h-4 accent-[#635fc7] cursor-pointer "
									type="checkbox"
									checked={
										task.subtasks.find((subtask, i) => i === index)
											.isCompleted
									}
									onChange={() => {
										dispatch(
											boardsSlice.actions.setSubtaskCompleted({
												index,
												taskIndex,
												colIndex,
											})
										);
									}}
								/>
								<p
									className={
										task.subtasks.find((subtask, i) => i === index)
											.isCompleted && " line-through opacity-30 "
									}>
									{
										task.subtasks.find((subtask, i) => i === index)
											.title
									}
								</p>
							</div>
						);
					})}
				</div>

				{/* ===================== Current Status Section ===================== */}

				<div className="mt-8 flex flex-col space-y-3">
					<label className="text-sm text-gray-500">Current Status</label>
					<select
						className="select-status flex-grow px-4 py-2 rounded-md text-sm bg-transparent focus:border-0  border-[1px] border-gray-300 focus:outline-[#635fc7] outline-none"
						value={status}
						onChange={onChange}>
						{board.columns.map((col, index) => (
							<option className="status-options" key={index}>
								{col.name}
							</option>
						))}
					</select>
				</div>
			</div>
			{isDeleteModalOpen && (
				<DeleteModal
					onDeleteBtnClick={onDeleteBtnClick}
					type="task"
					title={task.title}
				/>
			)}

			{isAddTaskModalOpen && (
				<AddEditTaskModal
					setIsAddTaskModalOpen={setIsAddTaskModalOpen}
					setIsTaskModalOpen={setIsTaskModalOpen}
					type="edit"
					taskIndex={taskIndex}
					prevColIndex={colIndex}
				/>
			)}
		</div>
	);
}

export default TaskModal;
