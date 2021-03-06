import axios from 'axios'
import qs from 'qs'
const http = axios.create({
  baseURL:"http://219.233.18.245:8081/",
  timeout:30000,
  //withCredentials: true
})
http.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    // 若是有做鉴权token , 就给头部带上token
      //config.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
      //console.log('我带了token了')
    if (
      config.method === "post"
    ) {
      // 序列化
      config.data = qs.stringify(config.data); // ***** 这里转义
    }
    return config;
  }, err =>{
  return Promise.reject(err)
  })
 //拦截器(返回拦截)
http.interceptors.response.use(res => {
  // console.log(res);
  if (res.data.result==0){
    return res.data.data;
  }else{
    console.log(res);
    return Promise.reject(res.data.message)
  }
},(err)=>{
  return Promise.reject(err)
})
export default http
