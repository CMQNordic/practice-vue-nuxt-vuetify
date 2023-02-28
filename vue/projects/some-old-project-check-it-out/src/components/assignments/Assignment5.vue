<template>
    <base-assignment>
        <template #title> Section 3. Assignment 5 </template>
        <template #description>
            Add unique items to list and delete, preserving state. | v-for="(task, index) in tasks" :key="task.id">| id:
            Date.now() + Math.random()
        </template>
        <template #content>
            <!-- 1) Add code to manage a list of tasks in a Vue app -->
            <!-- When clicking button "Add Task" a new task with the entered text should be added.  -->
            <!-- 1a) Also update the button caption -->
            <!-- 2) Output the list of tasks here -->
            <!-- 3) When the show/hide button is pressed, the list should be shown or hidden -->
            <!-- 4) add button to remove a task -->

            <div>
                <label>Define a unique task:<input type="text" v-model="taskInput" /></label>
                <button @click="addTask()">Add</button>
            </div>
            <button @click="toggleTasksVisibility()">{{ buttonStatusText }}</button>

            <ul v-if="!doHideTasks">
                <li v-for="(task, index) in tasks" :key="task.id">
                    <div>
                        index {{ index }}: <b>{{ task.title }} </b>
                        <input type="text" placeholder="add a note..." />
                        <button @click="removeThisTask(task)">Remove this task"</button>
                    </div>
                </li>
            </ul>
        </template>
    </base-assignment>
</template>

<script>
export default {
    data() {
        return {
            tasks: [],
            doHideTasks: false,
            taskInput: ''
        };
    },
    methods: {
        addTask() {
            if (this.taskInput) {
                this.tasks.push({
                    title: this.taskInput,
                    id: Date.now() + Math.random()
                });

                this.taskInput = '';
            } else {
                alert('Nothing to add...');
            }
        },
        toggleTasksVisibility() {
            this.doHideTasks = !this.doHideTasks;
        },
        removeThisTask(task) {
            this.tasks = this.tasks.filter((value) => value.id != task.id);
        }
    },
    computed: {
        buttonStatusText() {
            return this.doHideTasks ? 'SHOW TASKS' : 'HIDE TASKS';
        }
    }
};
</script>
