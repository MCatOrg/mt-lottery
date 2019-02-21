# 配置参数

## 参数预览

```javascript

    padding: 10,                //每个块的间隔 默认：4 单位：px
    radius: 8,                  //每个块的圆角值 默认：8 单位：px
    btnCircle: false,           //中间抽奖按钮是否是圆形，九宫格grid默认否 false，列表list默认为true
    circleTimes: 3,             //转圈动画次数 Number 默认：3 单位：次
    forLucky: false,            //是否采用前端随机抽奖，默认否 false （不安全，不建议使用，优先级比onend函数传入的值高）
    size: 200,                  //每个块的大小，默认：100，单位：px，最小：80
    velocity: 'speed',          //抽奖跳动动画：speed:慢-快-慢；invariance:匀速
    lotteryStyle: {             //列表盒子的样式
        backgroundColor: 'aqua',
    },
    itemStyle: {                //小块的样式，Object 默认不传
        backgroundColor: 'antiquewhite',
    },
    itemCurStyle: {             //cur状态下的item样式，Object 默认不传
        backgroundColor: 'aqua',
    },
    // btnStyle: '',            //中间抽奖按钮的样式，Object 默认不传

```

## 奖品（list）

list奖品列表，不满8个会自动填满8个，内容是：谢谢参与；超过8个会截取前8个

允许传入图片

```html
    <template>
        <div>
            <Lottery 
                ref="mtlottery" 
                v-on:onsubmit="onsubmit" 
                v-on:onend="onend" 
                v-bind:list="list"
            ></Lottery>
        </div>
    </template>
```
```javascript
    export default {
        data () {
            return {
                //list奖品列表，不满8个会自动填满8个，内容是：谢谢参与；超过8个会截取前8个
                //允许传入图片
                list: [
                    {
                        label: '一等奖',
                        image: 'https://cn.vuejs.org/images/logo.png',
                    },{
                        label: '二等奖',
                        image: 'https://cn.vuejs.org/images/logo.png',
                    },{
                        label: '三等奖',
                        image: 'https://cn.vuejs.org/images/logo.png',
                    },
                ]
            }
        },
        methods: {
            onsubmit(){
                //开始抽奖，传参为中间的索引值（list索引值/下标）
                this.$refs.mtlottery.go(5)
            },
            onend(data){
                console.log('抽奖结果回调：',data)
            }
        }
    }
```

## 间距（padding）

每个块的间隔 默认：4 单位：px

```html
    <template>
        <div>
            <Lottery 
                ref="mtlottery" 
                v-on:onsubmit="onsubmit" 
                v-on:onend="onend" 
                v-bind:list="list"
                v-bind:padding="4"
            ></Lottery>
        </div>
    </template>
```

## 大小（size）

每个块的大小，默认：100，单位：px，最小：80

```html
    <template>
        <div>
            <Lottery 
                ref="mtlottery" 
                v-on:onsubmit="onsubmit" 
                v-on:onend="onend" 
                v-bind:list="list"
                v-bind:size="80"
            ></Lottery>
        </div>
    </template>
```