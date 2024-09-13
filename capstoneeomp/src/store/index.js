import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'
import { applyToken } from '../service/AuthenticatedUser.js'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const apiURL = 'https://capstoneeomp-7898.onrender.com/'

// Apply token from cookies if available
applyToken(cookies.get('LegitUser')?.token)
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    recentProducts: null,
    product: null,
    maleProducts: [],
    femaleProducts: [],
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setRecentProducts(state, value) {
      state.recentProducts = value
    },
    setProduct(state, value) {
      state.product = value
    },
    setDeleteP(state, data){
      state.products = data
    },

    SET_MALE_PRODUCTS(state, products) {
      state.maleProducts = products;
    },
    SET_FEMALE_PRODUCTS(state, products) {
      state.femaleProducts = products;
    },
  },
  actions: {
    // ==== User ========
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${apiURL}users`)
        if (data) {
          context.commit('setUsers', data)
        } else {
          toast.error(`Oooops something went wrong`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchUser(context, id) {
      try {
        console.log(id)
        const {result, msg} = await ( await axios.get(`${apiURL}users/${id}`)).data
        if (result) {
          context.commit('setUser', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async register(context, payload) {
      try {
        const { msg, err, token } = await (await axios.post(`${apiURL}users/register`, payload)).data
        if (token) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
          router.push({ name: 'login' })
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },

    async updateUser(context, payload) {
      try {
        const { msg, err } = await (await axios.patch(`${apiURL}users/${payload.userID}`, payload)).data
        if (msg) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },

    async deleteUser(context, id) {
      try {
        const { msg, err } = await (await axios.delete(`${apiURL}users/${id}`)).data
        if (msg) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },

    // ===== LOGIN =======
    async login(context, payload) {
      try {
        const { msg, result, token } = await (await axios.post(`${apiURL}users/login`, payload)).data
        if (result) {
          toast.success(`${msg}:sunglasses:`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
          context.commit('setUser', {
            msg,
            result
          })
          cookies.set('LegitUser', { token, msg, result })
          applyToken(token)
          router.push({ name: 'products' })
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },

    // ==== Product =====
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${apiURL}products`)
        console.log('Fetched products data:', data)
    
        if (data && data.results.length > 0) {
          context.commit('setProducts', data.results) // Commit the results array from the API
        } else {
          console.error('No products found in the response')
          toast.error('No products found', {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          })
        }
      } catch (e) {
        console.error('Error fetching products:', e)
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        })
      }
    },

    async fetchMaleProducts({ commit }) {
      try {
        const response = await axios.get('/api/male-products');
        commit('SET_MALE_PRODUCTS', response.data);
      } catch (error) {
        console.error('Error fetching male products:', error);
      }
    },
    async fetchFemaleProducts({ commit }) {
      try {
        const response = await axios.get('/api/female-products');
        commit('SET_FEMALE_PRODUCTS', response.data);
      } catch (error) {
        console.error('Error fetching female products:', error);
      }
    },

    async recentProducts(context) {
      try {
        const { results, msg } = await (await axios.get(`${apiURL}products/recent`)).data
        if (results) {
          context.commit('setRecentProducts', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchProduct(context, id) {
      
      try {
        console.log(id)
        const  {result, msg}  = await (await axios.get(`${apiURL}products/${id}`)).data
        if (result) {
          context.commit('setProduct', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async addAProduct(context, payload) {
      try {
        const { msg } = await (await axios.post(`${apiURL}products/add`, payload)).data
        if (msg) {
          context.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async updateProduct(context, payload) {
      console.log(payload)
      try {
        const  msg  = await (await axios.patch(`${apiURL}products/${payload.prodID}`, payload)).data
        console.log(msg)
        if (msg) {
          context.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
  
    async deleteProduct(context, prodID){
      try {
        const {data} = await axios.delete(`${apiURL}products/${prodID}`)
        // console.log(response.data)
        console.log(data)
        // context.commit('setDeleteP', response)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },
  },
})
