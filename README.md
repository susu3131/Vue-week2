# week2

## 功能
1. 登入功能
2. 驗證token -未登入則跳轉至登入頁面
3. 串接api 取得資料
4. 使用者查看產品資料，並點擊查看詳細資訊


### 創建vue
Vue建立
1. 匯入vue cdn ，import {createApp} 輸入網址
2. 創建 Vue起手式 (data、methods)，最後mount('#app')


### 登入 
1. 登入 apiUrl、path 宣告
2. data 創建username、password，v-model 綁定帳號密碼(資料雙向綁定)
3. axios寫post(url，帳號密碼傳輸)，回應正確(then)或錯誤(error提示)，錯誤提示error data message有對應訊息，所以顯示alert 提示錯誤

補充知識: 當成功登入，回傳會得到token金鑰 及expired 有效時間 ，token為驗證用的金鑰，我們可以取出在再使用

4. then 成功接收token 及 expired ，將資料儲存起來 
5. 將token 及expired 儲存到cookie(網路暫存區) 暫放

補充知識:  expires 參數的作用是設定 cookie 的有效期限。
如果沒有額外設定 expires ，當瀏覽器關閉之後，儲存在瀏覽器的 cookie 便會消失，有設定的話會有個有效期限

5. 跳轉畫面(刷新) window.location ='product.html(跳轉頁面)'

###  驗證token - 未登入則跳轉至登入頁面

1. 先取出儲存在cookie的token ，寫在 mounted (生命週期) 
   取出 cookie方法 >　document.cookie.replace　
2. 設定axios 預設請求代入token
   使用 axios.defaults.headers.common['Authorization'] = tokenKey


###  接api - 取得產品資料
1. axios GET資料，取得資料加入data products
2. v-for 表單渲染，要記得加:key="item.id" 綁定產品id
3. 按鈕@click 綁定，讓選擇產品列表(products) 加入臨時產品區(tempProducts)
