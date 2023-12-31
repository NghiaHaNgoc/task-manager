<script lang="ts">
export default {
  data() {
    return {
      showAddTask: false,
    };
  },

  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
      this.$emit("toggle-add-task", this.showAddTask);
    }
  },
  emits: ["toggle-add-task"]
};
</script>

<template>
  <div class="grid">
    <div class="col-8">
      <h1>Task tracker</h1>
    </div>
    <div class="col-4 flex justify-content-center align-items-center">
      <Button
        type="button"
        :severity="showAddTask ? 'danger' : ''"
        @click="toggleAddTask"
        :label="showAddTask ? 'Cancel' : 'Add task'"
      />
    </div>
  </div>
</template>

<style scoped></style>
