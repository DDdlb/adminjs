/**
 *  storage 封装
 */
// 使用命名空间，防止不同项目变量覆盖
// import config from '../config/index'
const namespace = 'admin_js'
export const storage = {
    setItem(key, val){
        let storage = this.getStorage();
        storage[key] = val;
        window.localStorage.setItem(namespace, JSON.stringify(storage));
    },
    getItem(key){
        return this.getStorage()[key];
    },
    getStorage(){
        return JSON.parse(window.localStorage.getItem(namespace) || "{}");
    },
    clearItem(key){
        let storage = this.getStorage();
        delete storage[key];
        window.localStorage.setItem(namespace, JSON.stringify(storage));
    },
    clearAll(){
        window.localStorage.clear()
    }
}