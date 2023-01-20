import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const apiPath= "susu3131"
const signCheckUrl ="https://vue3-course-api.hexschool.io/v2/api/user/check"
const productUrl = `https://vue3-course-api.hexschool.io/v2/api/${apiPath}/admin/products/all`


createApp({
  data(){
    return{
      products:[],
      tempProduct: {}, //放入臨時產品，當點擊按鈕時將所選產品加入此暫放
    }
  },

  methods:{
    checkLogin(){
      axios.post(signCheckUrl)
      .then(res=>console.log(res))
      .catch(err=>{
        alert(err.data.message);
        window.location ='index.html'
      });
    },
    getData(){
      axios.get(productUrl)
        .then(res => {
          this.products = res.data.products
          // console.log(this.products); //查看取得是否成功
        })
        .catch(err=> console.log(err))
    }

  },

  mounted() {
    //取出cookie的token
    const tokenKey = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    //將驗證預設代入token
    axios.defaults.headers.common['Authorization'] = tokenKey;
    this.checkLogin()
    this.getData();
  }

}).mount('#app')

