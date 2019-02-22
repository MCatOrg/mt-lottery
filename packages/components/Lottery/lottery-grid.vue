<style lang="less" scoped>
.lottery{width: 330px; height: 330px; padding-left: 10px; padding-top: 10px; background-color: #CC2510;}
.lottery_item{margin-right: 10px; margin-bottom: 10px;}
.float_left{float: left;}
.float_right{float: right;}
</style>
<template>
    <div class="lottery" :style="cLotteryStyle">
        <div>
            <lottery-item 
                :style="[LotteryItemStyle, itemStyle, index === listIndex ? cItemCurStyle : '']" 
                :size="itemSize" 
                :image="item.image" 
                :class="['lottery_item', 'float_left']" 
                v-for="(item, index) in luckyList.slice(0,3)" 
                :key="index" 
                :label="item.label"
                :imageSize="lotteryImageSize"
                :isUseRem="isUseRem"
            ></lottery-item>
        </div>
        <div>
            <lottery-item 
                :style="[LotteryItemStyle, itemStyle, (index + 3) === listIndex ? cItemCurStyle : '']" 
                :active="(index + 3) === listIndex" 
                :size="itemSize" 
                :image="item.image" 
                :class="['lottery_item', 'float_right']" 
                v-for="(item, index) in luckyList.slice(3,4)" 
                :key="index + 3" 
                :label="item.label"
                :imageSize="lotteryImageSize"
                :isUseRem="isUseRem"
            ></lottery-item>
            <!-- 按钮 -->
            <lottery-go 
                @click.native="onsubmit" 
                :style="[LotteryItemStyle, btnCircle ? {borderRadius: '50%'} : '', btnStyle]" 
                :size="itemSize" 
                :isUseRem="isUseRem"
                :class="['lottery_item', 'float_right']" 
            ></lottery-go>
            <lottery-item 
                :style="[LotteryItemStyle, itemStyle, (index + 7) === listIndex ? cItemCurStyle : '']" 
                :class="['lottery_item', 'float_right']" 
                :image="item.image" 
                :size="itemSize" 
                v-for="(item, index) in luckyList.slice(-1)" 
                :key="index + 7" 
                :label="item.label"
                :imageSize="lotteryImageSize"
                :isUseRem="isUseRem"
            ></lottery-item>
        </div>
        <div>
            <lottery-item 
                :style="[LotteryItemStyle, itemStyle, (index + 4) === listIndex ? cItemCurStyle : '']" 
                :class="['lottery_item', 'float_right']" 
                :image="item.image" 
                :size="itemSize" 
                v-for="(item, index) in luckyList.slice(4,7)" 
                :key="index + 4" 
                :label="item.label"
                :imageSize="lotteryImageSize"
                :isUseRem="isUseRem"
            ></lottery-item>
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
        //补全列表，补全内容：谢谢参与
        luckyList(){
            let list = []
            if(this.list && this.list.length){
                list = JSON.parse(JSON.stringify(this.list))
                let len = list.length
                if(len < 8){
                    for(let i=0; i<8 - len; i++){
                        list.push({
                            label: '谢谢参与',
                            id: i + len + 1,
                            index: i + len
                        })
                    }
                }else if(len > 8){
                    list.splice(8)
                }
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
                height: size,
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
