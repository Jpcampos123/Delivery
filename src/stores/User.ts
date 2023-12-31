import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

interface User {
  id: string;
  name: string;
  email: string;
  token: string;
  phone: string;
  photo: string;
}

export const UserStore = defineStore('User', {
  state: () => ({
    user: null as any | User,
    // authUser: null,
  }),
  getters: {
    isAuth: (state) => !(Object.keys(state.user).length == 0),

    // user: (state) => state.authUser,
  },
  actions: {
    async login(data: any) {
      try {
        await api
          .get('auth/session', data)
          .then((res) => {
            // res.data = this.authUser;
            this.user = res.data;
          })
          .catch((err) => console.log(err));
      } catch (e) {
        console.log(e);
      }
    },

    // async logout(){
    //   this.user = null
    // }
  },
  persist: true,
});
