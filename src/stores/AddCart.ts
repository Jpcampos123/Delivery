import { defineStore } from 'pinia';
interface pratos {
  id: number;
  qtd: number;
  seqno: number;
  name: string;
  img: string;
  price: number;
  serve: number;
  details: string;
  like: boolean;
}
export const useAddStoreCart = defineStore('pratos', {
  state: () => ({
    pratos: [] as pratos[],
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
