class ToDo {

    constructor(url) {
        this.url = url || '/data1.json'
        this.container = null
        this.tasks = []

        this.loadTasks()
    }

    loadTasks() {
        return fetchData(this.url)
            .then((data) => {
                const tasks = data && data.tasks
                this.setTasks(tasks || [])
            })
    }

    setTasks(newTasks) {
        this.tasks = newTasks

        // @TODO we cant save items without knowledge about REST API

        this.render()
    }

    deleteTask(indexToDelete) {
        const newTasks = this.tasks.filter((taskData, index) => {
            return index !== indexToDelete
        })
        this.setTasks(newTasks)
    }

    addTask(text) {
        const newTaskData = {
            text: text,
            isCompleted: false,
        }
        const newTasks = this.tasks.concat(newTaskData)
        this.setTasks(newTasks)
    }

    toggleComplete(indexToComplete) {
        const newTasks = this.tasks.map((taskData, index) => {
            if (index !== indexToComplete) return taskData
            return {
                text: taskData.text,
                isCompleted: !taskData.isCompleted
            }
        })
        this.setTasks(newTasks)
    }

    renderTasks() {
        this.tasks.forEach((taskData, index) => {
            const task = new Task(
                taskData,
                () => this.toggleComplete(index),
                () => this.deleteTask(index)
            )
            this.container.appendChild(task.render())
        })
    }

    render() {

        if (this.container === null) {
            this.container = document.createElement('div')
        }

        this.container.innerHTML = ''

        const form = new Form('', (value) => this.addTask(value))

        this.container.appendChild(form.render())

        this.renderTasks()

        return this.container

    }

}