document.addEventListener("DOMContentLoaded", () => {
	
	/********** DOM Elements **********/
	const taskForm = document.querySelector("#create-task-form")
	const taskList = document.querySelector("#tasks")

	/********** Event Listeners **********/
	taskForm.addEventListener("submit", handleTaskFormSubmit)

	/********** Event Handlers **********/
	function handleTaskFormSubmit(event) {
		event.preventDefault()

		const taskDesc = event.target.querySelector("[name='new-task-description']").value

		renderOneTask(taskDesc)

		event.target.reset()
	}

	/********** Render Functions **********/
	function renderOneTask(taskDesc) {
		const task = document.createElement("li")
		task.className = "task"
		task.innerText = taskDesc
		taskList.append(task)
	}

});