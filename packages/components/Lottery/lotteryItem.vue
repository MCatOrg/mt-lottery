<style lang="less" scoped>
@import './lottery.less';
.item{width: 100px; height: 100px; box-sizing: border-box; box-shadow: 0 0 6px #ccc; background-color: white; font-size: 14px; line-height: 20px; transition: all .1s;}
.item_image{width: 60px; height: 60px;}
</style>
<template>
    <div :style="style" :class="['item', 'lottery_flex-center', 'lottery_column', 'lottery_shrink']">
        <img class="item_image" :style="itemImageStyle" v-if="image" :src="image" alt="">
        <span v-if="label">{{label}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    props: {
        label: {
            type: String,
            default: '谢谢参与'
        },
        image: {
            type: String,
        },
        size: {
            type: Number,
            default: 200,
        },
        imageSize: {
            type: Number,
            default: 50,
        },
        isUseRem:{
            type: Boolean,
            default: false,
        },
    },
    computed: {
        style(){
            let size = this.isUseRem ? this.size / 100 + 'rem' : this.size + 'px'
            let style = {
                width: size,
                height: size,
            }
            return style
        },
        itemImageStyle(){
            let size = this.isUseRem ? this.imageSize / 100 + 'rem' : this.imageSize + 'px'
            let style = {
                width: size,
                height: size,
            }
            return style
        }
    }
}
</script>

