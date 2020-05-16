<template>
    <div>
        <button @click="testtest">test</button>
        <div style="margin:40px;">
            <label for="">帳號</label>
            <input type="text" placeholder="帳號"></br>
            <label for="">密碼</label>
            <input type="password" placeholder="帳號">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            datas:{}
        }
    },
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        console.log({isDev, route, store, env, params, query, req, res, redirect, error})
    },
    mounted() {
        
    },
    methods: {
        async testtest(){
            try{
                let res = await this.$axios.get(`/novelSearchApi?name=盜墓筆記`)
                console.log(res,'res')
            }
            catch(e){
                console.log(e)
            }
        }
    },
}
</script>