<style lang="less" scoped>
.lottery{margin: 0 auto; border-radius: 8px;}
</style>

<template>
    <div>
        <!-- 默认 -->
        <h1>默认</h1>
        <Lottery ref="mtLottery1" @onend="onend" :list="list" @onsubmit="request('mtLottery1')" class="lottery"></Lottery>

        <!-- 配置 -->
        <h1>配置</h1>
        <Lottery ref="mtLottery2" @onend="onend" :list="list" v-bind="lotteryOption" @onsubmit="request('mtLottery2')" class="lottery"></Lottery>
    </div>
</template>
<script>
import logo from '../assets/logo.png'
export default {
    data(){
        return {
            //注意：list不满8个会自动补全8个，内容：谢谢参与，超过8个会截取前8个
            list: [
                {
                    label: '一等奖',
                    image: logo,
                },{
                    label: '二等奖',
                },{
                    label: '三等奖',
                    image: logo,
                },{
                    label: '四等奖',
                },{
                    label: '五等奖',
                },{ 
                    label: '六等奖',
                },{
                    label: '7等奖',
                },{
                    label: '8等奖',
                },{
                    label: '9等奖',
                }
            ],
            lotteryOption: {
                padding: 10,                 //每个块的间隔 默认：4 单位：px
                radius: 8,                  //每个块的圆角值 默认：8 单位：px
                btnCircle: false,           //中间抽奖按钮是否是圆形，默认否 false
                circleTimes: 3,             //转圈动画次数 Number 默认：3 单位：次
                defaultLuckyIndex: 7,       //默认中奖位置，默认：7，最后一个
                forLucky: false,            //是否采用前端随机抽奖，默认否 false （不安全，不建议使用，优先级比onend函数传入的值高）
                size: 200,                  //每个块的大小，默认：100，单位：px，最小：80
                velocity: 'speed',          //抽奖跳动动画：speed:慢-快-慢；invariance:匀速
                lotteryBg: 'aqua',          //背景图
                itemStyle: {                //小块的样式，Object 默认不传
                    backgroundColor: 'antiquewhite',
                },
                itemCurStyle: {             //cur状态下的item样式，Object 默认不传
                    backgroundColor: 'aqua',
                },
                lotteryImageSize: 80
                // btnStyle: '',            //中间抽奖按钮的样式，Object 默认不传
            }
        }
    },
    methods: {
        request(name){
            //模拟抽奖请求
            setTimeout(()=>{
                let luckyIndex = Math.rndNum(0,7)
                console.log(luckyIndex)
                this.$refs[name].go(luckyIndex)
            }, 100)
        },
        //抽奖动画结束
        onend(data){
            console.log('抽奖结果回调：',data)
            alert('恭喜您获得：' + data.label)
        }
    }
}
</script>
