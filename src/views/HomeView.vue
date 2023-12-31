<script lang="ts">
import HeaderCard from "@/components/task-card/HeaderCard.vue"
import AddTaskForm from "@/components/task-card/AddTaskForm.vue"
import TaskList from "@/components/task-card/TaskList.vue"
export default {
  data() {
    return {
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask(show: boolean) {
      this.showAddTask = show
    }
  },
  components: {
    HeaderCard,
    AddTaskForm,
    TaskList
  }
}
</script>

<template>
  <div class="container">
    <div class="flex justify-content-center mt-5 mb-5">
      <!-- <div class="card col-md-8 p-3"> -->
      <!--   <HeaderCard @toggle-add-task="toggleAddTask" /> -->
      <!--   <AddTaskForm :collapse-show="showAddTask" /> -->
      <!-- </div> -->
      <Card class="xl:col-6 lg:col-8 md:col-10">
    <template #title>
          <HeaderCard @toggle-add-task="toggleAddTask"/>
        </template>
<template #subtitle>
          <AddTaskForm v-show="showAddTask"/>
        </template>
    <template #content>
          <TaskList/>
    </template>
</Card>

    </div>
  </div>
</template>

<style scoped>
</style>
