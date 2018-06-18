<template>
    <button :class="['btn', color, size]"><slot></slot></button>
</template>
<script>
    export default {
        name: 'Button',
        props: {
            color: {
                validator: function (value) {
                    // 这个值必须匹配下列字符串中的一个
                    return ['success', 'primary', 'danger'].indexOf(value) !== -1
                }
            },
            size: {
                validator: function (value) {
                    return ['big', 'middle'].indexOf(value) !== -1
                }
            }
        }
    }
</script>
