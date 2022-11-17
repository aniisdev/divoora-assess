export default{
    storage:window.localStorage,
    getItem(item){
        return item != undefined ? JSON.parse(this.storage.getItem(item)) : -1;
    },
    setItem(item){
        this.storage.setItem(item);
    },
    deleteItem(item){
        this.storage.removeItem(item);
    }
}