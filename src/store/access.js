import { defineStore } from 'pinia'

export const useAccessStore = defineStore('access', {
  state: () => ({
    access_token: "",
  }),
  persist: [
    {
      paths: ['oauthAccessToken'],
      storage: localStorage,
    }
  ]
})

