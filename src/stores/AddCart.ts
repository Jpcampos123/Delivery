import { defineStore } from 'pinia';
export interface pratos {
  id: number;
  qtd: number;
  seqno: number;
  name: string;
  banner: string;
  price: number;
  serve: number;
  details: string;
  like: boolean;
  total: number;
}
export const useAddStoreCart = defineStore('pratos', {
  state: () => ({
    pratos: [] as pratos[],
    totalItemsPrice: 0 as number | string,
    PaymentId: '' as string,
  }),
  getters: {},
  actions: {
    Add(item: pratos) {
      this.pratos.push(item);
    },

    AddItem(item: pratos) {
      item.qtd++;
    },

    ItemQtd(item: pratos) {
      item.total = item.qtd * item.price;
    },

    RemoveItem(item: pratos) {
      item.qtd--;
    },
    deleteItem(item: pratos) {
      this.pratos = this.pratos.filter((prato) => prato !== item);
    },
  },
  persist: true,
});
