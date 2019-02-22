<style lang="less" scoped>
@import './lottery.less';
.lottery__box{display: inline-block;}
.lottery{width: 330px; padding-left: 10px; padding-top: 10px; overflow: hidden;}
.lottery_item{margin-right: 10px; margin-bottom: 10px;}
.float_left{float: left;}
.float_right{float: right;}

.lottery_btn{width: 100%; margin-top: .3rem;}
</style>
<template>
    <div class="lottery__box">
        <div class="lottery" :style="cLotteryStyle">
            <lottery-item 
                :style="[LotteryItemStyle, itemStyle, index === listIndex ? cItemCurStyle : '']" 
                :size="itemSize" 
                :image="item.image" 
                :class="['lottery_item', 'float_left']" 
                v-for="(item, index) in luckyList" 
                :key="index" 
                :label="item.label"
                :isUseRem="isUseRem"
            ></lottery-item>
        </div>
        <div class="lottery_btn lottery_flex-center">
            <!-- 按钮 -->
            <lottery-go 
                @click.native="onsubmit" 
                :style="[LotteryItemStyle, btnCircle ? {borderRadius: '50%'} : '', btnStyle]" 
                :size="itemSize" 
                :class="['lottery_item', 'float_right', 'lottery_btn-btn']" 
            ></lottery-go>
        </div>
    </div>
</template>
<script>
import lotteryItem from './lotteryItem.vue'
import lotteryGo from './lotteryGo.vue'

import mixin from '../../mixins/lottery/publish.js'

export default {
    components: {
        lotteryItem,
        lotteryGo,
    },
    mixins: [mixin],
    computed: {
        luckyList(){
            let list = []
            if(this.list && this.list.length){
                list = JSON.parse(JSON.stringify(this.list))
            } else {
                console.error('????????list???Array')
            }
            return list
        },
        cLotteryStyle(){
            let pad = this.isUseRem ? this.pad / 100 + 'rem' : this.pad + 'px'
            let size = this.isUseRem ? 3 * (this.itemSize + this.pad) / 100 + 'rem' : 3 * (this.itemSize + this.pad) + 'px'
            let style = {
                paddingLeft: pad,
                paddingTop: pad,
                width: size,
                backgroundColor: this.lotteryBg
            }
            if(Object.prototype.toString.call(this.lotteryStyle) === '[object Object]') {
                style = Object.assign(style, this.lotteryStyle)
            }
            return style
        },
    },
}
</script>
