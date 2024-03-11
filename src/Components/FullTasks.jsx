import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import boardsSlice from "../redux/boardsSlice";
import CreateNewTask from "./CreateNewTask";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

export default function FullTasks() {
	const boards = useSelector((state) => state.boards);
	const dispatch = useDispatch();
	const board = boards.find((board) => board.isActive === true);

	const handleLogout = async () => {
		await signOut(auth);
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		navigate("/");
	};

	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem("user"));

	return (
		<main className="bg-[#f4f7fd] scrollbar-hide min-h-dvh overflow-x-scroll">
			<section className="flex flex-col justify-center items-center">
				<h2 className=" block text-center relative left-8 mt-[20px] text-lg  ">
					Welcome, &quot;
					<span className=" text-cyan-400 font-bold">
						{user && user.email}
					</span>
					&quot; <br />
					<span className=" animate-bounce inline-block text-2xl font-bold">
						Enjoy
					</span>
				</h2>

				<section className=" flex justify-center items-center mt-[20px] gap-[300px]">
					<CreateNewTask />

					<button
						onClick={handleLogout}
						className="transition duration-150 ease-in-out py-2 text-base font-semibold text-center border bg-red-400 border-red-400 text-white hover:bg-red-800 hover:border-red-800 block xs:py-1 xs:text-sm px-5 rounded-full">
						LogOut
					</button>
				</section>
			</section>
			<div className="flex gap-6 justify-center">
				{board.columns.map((col, colIndex) => (
					<div
						key={colIndex}
						onDrop={(e) => {
							const { prevColIndex, taskIndex } = JSON.parse(
								e.dataTransfer.getData("text")
							);

							if (colIndex !== prevColIndex) {
								dispatch(
									boardsSlice.actions.dragTask({
										colIndex,
										prevColIndex,
										taskIndex,
									})
								);
							}
						}}
						onDragOver={(e) => {
							e.preventDefault();
						}}
						className="scrollbar-hide mx-5 pt-[30px] min-w-[280px] text-center">
						<p className=" font-semibold flex  items-center justify-center gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
							(
							{
								boards
									.find((board) => board.isActive === true)
									.columns.find((col, i) => i === colIndex).name
							}
							) (
							{
								boards
									.find((board) => board.isActive === true)
									.columns.find((col, i) => i === colIndex).tasks
									.length
							}
							)
						</p>

						{boards
							.find((board) => board.isActive === true)
							.columns.find((col, i) => i === colIndex)
							.tasks.map((task, ind) => (
								<Task key={ind} taskIndex={ind} colIndex={colIndex} />
							))}
					</div>
				))}
			</div>
		</main>
	);
}
