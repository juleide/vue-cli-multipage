<template>
    <div class="info">
        <mt-header fixed title="标题"></mt-header>
        <span>{{ msg }}</span>
        <mt-button @click="openDatePicker" size="small">时间选择</mt-button>
        <div class="swipe-wrap">
            <mt-swipe :auto="4000">
                <mt-swipe-item class="item">1</mt-swipe-item>
                <mt-swipe-item class="item">2</mt-swipe-item>
                <mt-swipe-item class="item">3</mt-swipe-item>
            </mt-swipe>
        </div> 
        <div class="date-picker">
            <mt-datetime-picker
                ref="picker"
                v-model="pickerVisible"
                type="date"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日">
            </mt-datetime-picker>
        </div>
    </div>
</template>

<script>

export default {
    name: 'info',
    data() {
        return {
            msg: 'this is info page'
        }
    },
    mounted() {
        this.$nextTick(() => {
            console.log(window.location.search, 'window.location.search')
        })
    },
    methods: {
        openDatePicker() {
            this.$refs.picker.open();
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.info{
    padding-top: 40px;
}
.swipe-wrap{
    width: 100%;
    height: 250px;
    .item {
        background: #ddd;
    }
}
</style>
