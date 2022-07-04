const app = new Vue({
    el: '#root',
    data: {
        message: 'Photo Viewer',
        imgUrl: 'https://images.unsplash.com/photo-1627222055365-95a68d345df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        newImgUrl: ''
    },

    methods: {
        updateImg() {
            this.imgUrl = this.newImgUrl;
        }
    }

})