import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const signUrl ="https://vue3-course-api.hexschool.io/v2/admin/signin"

createApp({
  data(){
    return{
      username: "",
      password: "",
    }
  },

  methods:{
    login(){
      axios.post(signUrl,{
        username:this.username,
        password:this.password
      })
        .then((res)=> {
          alert(res.data.message);
          const { token , expired} = res.data;
          document.cookie = `hexToken=${token};expired=${expired}`;
          window.location ='product.html'
        })
        .catch((error)=>alert(error.data.message))
    }
  },
  
}).mount('#app')







