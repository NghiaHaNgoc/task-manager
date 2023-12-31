<script lang="ts">
import { useTaskStore } from "@/stores/tasks";
import { useToast } from "primevue/usetoast";

export default {
  components: {},
  data() {
    let store = useTaskStore();
    let currentTask = {
      name: "",
      description: "",
      date: "",
    };
    return {
      store,
      counter: 0,
      currentTask,
      toast: useToast(),
    };
  },
  methods: {
    addTask() {
      let { name, description, date } = this.currentTask;
      let task: Task = {
        id: this.counter++,
        name,
        description,
        date,
      };
      this.store.addTask(task);
      console.log(this.store.tasks);
      this.toast.add({
        severity: "success",
        summary: "Sucess",
        detail: "Add task successfully!",
        life: 3000,
      });
    },
  },
};
</script>

<template>
  <div>
    <Toast />
    <form @submit.prevent="addTask">
      <div class="formgrid grid">
        <div class="field col-12 md:col-8 mb-5">
          <span class="p-float-label">
            <InputText
              id="taskname"
              v-model="currentTask.name"
              class="w-full"
            />
            <label for="taskname">Task name</label>
          </span>
        </div>
        <div class="field col-12 md:col-4 mb-5">
          <span class="p-float-label">
            <Calendar
              class="w-full"
              v-model="currentTask.date"
              inputId="remind_date"
              :show-icon="true"
              :show-time="true"
            />
            <label for="remind_date">Date remind</label>
          </span>
        </div>
      </div>
      <div class="field">
        <span class="p-float-label">
          <Textarea
            v-model="currentTask.description"
            rows="2"
            :auto-resize="true"
            :style="{ width: '100%' }"
          />
          <label>Description</label>
        </span>
      </div>
      <div class="mb-5 flex justify-content-center">
        <Button type="submit" label="Add" />
      </div>
    </form>
  </div>
</template>

<style></style>
