<template>
    <ContentField>
        我的Bot
    </ContentField>
    </template>
    
    <script>
    import ContentField from '../../../components/ContentField.vue'
    import $ from 'jquery';
    import { useStore } from 'vuex';

    export default {
        components: {
            ContentField
        },
        setup() {
            const store = useStore();
            // $.ajax({
            //     url: "http://127.0.0.1:3001/user/bot/add",
            //     type: "post",
            //     data: {
            //         title: "Bot的标题",
            //         description: "Bot的描述",
            //         content: "Bot的代码",
            //     },
            //     headers: {
            //         Authorization: "Bearer " + store.state.user.token,
            //     },
            //     success(resp) {
            //         console.log(resp);
            //     },
            //     error(resp) {
            //         console.log(resp);
            //     },
            // })

            // $.ajax({
            //     url: "http://127.0.0.1:3001/user/bot/remove",
            //     type: "post",
            //     data: {
            //         bot_id : 2,
            //     },
            //     headers: {
            //         Authorization: "Bearer " + store.state.user.token,
            //     },
            //     success(resp) {
            //         console.log(resp);
            //     },
            //     error(resp) {
            //         console.log(resp);
            //     },
            // })

            $.ajax({
                url: "http://127.0.0.1:3001/user/bot/update",
                type: "post",
                data: {
                    bot_id : 3,
                    title: "Bot修改测试",
                    description: "Bot的描述",
                    content: "Bot的代码",
                },
                headers: {
                    Authorization: "Bearer " + store.state.user.token,
                },
                success(resp) {
                    console.log(resp);
                },
                error(resp) {
                    console.log(resp);
                },
            })
        }
    }
    
    </script>
    
    <style scoped>
    
    </style>