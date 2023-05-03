import { defineStore } from 'pinia';

export const useAddStoreCart = defineStore('pratos', {
  state: () => ({
    pratos: [] as string[],
  }),
  getters: {},
  actions: {
    Add(item: any) {
      this.pratos.push(item);
    },

    AddItem(item: any) {
      item.qtd++;
    },

    RemoveItem(item: any) {
      item.qtd--;
    },
    deleteItem(item: any) {
      this.pratos = this.pratos.filter((prato) => prato !== item);
    },
  },
});
