<script lang="ts">

import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/tasks'

export default {
  data() {
    let store = useTaskStore();
    let { tasks } = storeToRefs(store);
    const confirm = useConfirm();
    const toast = useToast();

    return {
      store,
      tasks,
      confirm,
      toast,
      sort: {
        sortKey: '',
        sortOrder: 0,
        sortField: '',
        sortOptions: [
          { label: 'Time in ascending order', value: '!time' },
          { label: 'Time in descending order', value: 'time' },
        ]

      }
    }


  },
  methods: {
    onSortChange(event: any) {
      // const value = event.value.value;
      // const sortValue = event.value;
      //
      // if (value.indexOf('!') === 0) {
      //   this.sort.sortOrder = -1;
      //   this.sortField = value.substring(1, value.length);
      //   sortKey.value = sortValue;
      // }
      // else {
      //   sortOrder.value = 1;
      //   sortField.value = value;
      //   sortKey.value = sortValue;
      // }
    },

    handleDelete(event: any, idTask: number) {
      console.log(idTask)
      this.confirm.require({
        target: event.currentTarget,
        message: 'Are you sure you want to delete?',
        icon: 'pi pi-exclamation-triangle',
        acceptClass: 'p-button-danger p-button-sm',
        rejectClass: 'p-button-danger p-button-sm p-button-text',
        accept: () => {
          this.store.removeTask(idTask);
          this.toast.add({ severity: 'success', summary: 'Deleted', detail: 'Deleted task successfully!', life: 3000 });
        },
      });
    }

  }
}
</script>


<template>
  <div class="card">
    <DataView :value="tasks" :sortOrder="sort.sortOrder" :sortField="sort.sortField" :data-key="'a'">
      <template #header>
        <Dropdown v-model="sort.sortKey" :options="sort.sortOptions" optionLabel="label" placeholder="Sort By Time"
          @change="onSortChange($event)" />
      </template>
      <template #list="slotProps">
        <div class="grid grid-nogutter">
          <div v-for="(item, index) in slotProps.items" :key="item.id" class="col-12">
            <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"
              :class="{ 'border-top-1 surface-border': index !== 0 }">
              <div
                class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                  <div class="text-2xl font-bold text-900">{{ item.name }}</div>
                  <p>{{ item.description }}</p>
                  <span class="flex align-items-center gap-2">
                    <i class="pi pi-clock"></i>
                    <span class="font-semibold">{{ item.date }}</span>
                  </span>
                </div>
                <ConfirmPopup></ConfirmPopup>
                <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                  <Button icon="pi pi-times" severity="danger" :outlined="true" :rounded="true" :text="true"
                    @click="handleDelete($event, item.id)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<!-- <script setup lang="ts">
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import { ref, onMounted } from "vue";
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/tasks'


const confirm = useConfirm();
const toast = useToast();

const store = useTaskStore();
const {tasks} = storeToRefs(store);
const sortKey = ref();
const sortOrder = ref();
const sortField = ref();
const sortOptions = ref([
  { label: 'Time in ascending order', value: '!time' },
  { label: 'Time in descending order', value: 'time' },
]);
const onSortChange = (event: any) => {
  const value = event.value.value;
  const sortValue = event.value;

  if (value.indexOf('!') === 0) {
    sortOrder.value = -1;
    sortField.value = value.substring(1, value.length);
    sortKey.value = sortValue;
  }
  else {
    sortOrder.value = 1;
    sortField.value = value;
    sortKey.value = sortValue;
  }
};

const handleDelete = (event: any, idTask: number) => {
  console.log(idTask)
    confirm.require({
        target: event.currentTarget,
        message: 'Are you sure you want to delete?',
        icon: 'pi pi-exclamation-triangle',
    acceptClass: 'p-button-danger p-button-sm',
    rejectClass: 'p-button-danger p-button-sm p-button-text',
        accept: () => {
      store.removeTask(idTask);
            toast.add({ severity: 'success', summary: 'Deleted', detail: 'Deleted task successfully!', life: 3000 });
        },
    });
};
</script> -->

