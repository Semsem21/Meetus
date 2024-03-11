import { useState } from "react";
import AddEditTaskModal from "./AddEditTaskModal";

export default function CreateNewTask() {
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

	return (
		<div className=" flex space-x-4 items-center md:space-x-6 ">
			<button
				className="transition duration-150 ease-in-out py-2 text-base font-semibold text-center border bg-emerald-400 border-emerald-400 text-white hover:bg-emerald-800 hover:border-emerald-800 block xs:py-1 xs:text-sm px-5 rounded-full"
				onClick={() => {
					setIsTaskModalOpen((prevState) => !prevState);
				}}>
				+ Add New Task
			</button>

			{isTaskModalOpen && (
				<AddEditTaskModal
					setIsAddTaskModalOpen={setIsTaskModalOpen}
					type="add"
					device="mobile"
				/>
			)}
		</div>
	);
}
