<style lang="less" scoped>
@import './lottery.less';
.item{width: 100px; height: 100px; box-sizing: border-box; box-shadow: 0 0 6px #ccc; background-color: #FAD800; color: #CC2510; font-size: 36px;}
</style>
<template>
    <div :style="style" class="item lottery_flex-center lottery_column lottery_shrink lottery_pointer">
        <span>{{label}}</span>
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
            default: 'GO!'
        },
        size: {
            type: Number,
            default: 200,
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
        }
    }
}
</script>
