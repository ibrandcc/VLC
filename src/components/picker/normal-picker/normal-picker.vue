<template>
    <div :class="classes">
        <div class="header">
            <div class="left" @click="cancle">取消</div>
            <div class="right" @click="sure">确定</div>
        </div>
        <div class="main">
            <template v-if="shadowList.length">
                <picker-slot v-for="(item,key) in shadowList" :target="item.target" :init-item="initItems[key]" :key="item.target" :list="item.list" @change="change"></picker-slot>
            </template>

        </div>
    </div>
</template>

<script>
    import Emitter from '../../../mixin/emitter'
    import PickerSlot from '../picker-slot.vue'
    import props from './props'
    const prefixCls = 'vlc-normal-picker'
    export default {
        name:'NormalPicker',
        mixins:[Emitter,props],
        data(){
            return {
                initItems:!!this.initArr.length ? this.initArr : this.list.map((item)=>{return item.list[0].code}),
                normal:{}
            }


        },
        methods:{
            cancle(){
                this.dispatch('Picker', 'fail');
            },
            sure(){
                this.dispatch('Picker', 'ok',this.normal);
            },
            change(target,current){
                this.$nextTick(()=>{
                    for(let i = 0;i < this.shadowList.length;i++) {

                        if(this.shadowList[i].target == target) {

                            for (let j = 0;i<this.shadowList[i].length;j++) {

                                if (current.code == this.shadowList[i].list[j].code) {
                                    this.$set(this.initItems,i,this.shadowList[i].list[j].code)
                                    break;
                                }
                            }
                        }
                    }
                    this.normal = Object.assign({},this.normal,{[target]:current})


                    this.dispatch('Picker','scroll',current)
                })

            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`
                ]
            },
            shadowList(){
                let list = this.list;
                for (let i = 0,listLength = list.length;i < listLength ;i++) {

                    if (list[i].hasOwnProperty('list') && list[i].list.length) {

                        for (let j = 0,childLength = list[i].list.length;j < childLength;j++) {

                            if (!list[i].list[j].hasOwnProperty('value')) return [];

                            if(!list[i].list[j].hasOwnProperty('code')) {
                                list[i].list[j].code = list[i].list[j].value
                            }



                            if(!list[i].list[j].hasOwnProperty('target')) {
                                list[i].list[j].target = list[i].target
                            }

                            list[i].list[j].index = j

                        }
                    }
                }

                return list
            }
        },

        components:{
            PickerSlot
        },
        watch:{
            initArr(val){
                this.initItems = !!this.initArr.length ? this.initArr : this.list.map((item)=>{return item.list[0].value})
            },
        }
    }
</script>