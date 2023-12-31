import { defineStore } from "pinia";

export const useTaskStore = defineStore("counter", {
  state: () => ({ tasks: [] as Task[], name: "Task Manager" }),
  getters: {
    doubleCount: (state) => state,
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task);
    },
    removeTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id != id);
    },
  },
});
