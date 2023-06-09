import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

export const UserStore = defineStore('User', {
  state: () => ({
    user: {} as User,
  }),
  getters: {
    isAuth: (state) => !(Object.keys(state.user).length == 0),
  },
  actions: {
    async login(data: any) {
      try {
        await api
          .get('auth/session', data)
          .then((res) => {
            res.data = this.user;
          })
          .catch((err) => console.log(err));
      } catch (e) {
        console.log(e);
      }
    },
  },
  persist: true,
});
