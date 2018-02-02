/**
 * Created by lcfevr on 16/8/22.
 */


const routers = [
    {
        path:'/',
        redirect:'/guide'
    },

    {
        path:'/guide',
        name:'guide',
        component:require('./views/guide.vue'),
        meta:{
            title:'guide'
        }
    },
    {
        path:'/ActionSheet',
        name:'ActionSheet',
        component:require('./views/ActionSheet.vue'),
        meta:{
            title:'ActionSheet'
        }
    },
    {
        path:'/Badge',
        name:'Badge',
        component:require('./views/Badge.vue'),
        meta:{
            title:'Badge'
        }
    },
    {
        path:'/Button',
        name:'Button',
        component:require('./views/Button.vue'),
        meta:{
            title:'Button'
        }
    },
    {
        path:'/Card',
        name:'Card',
        component:require('./views/Card.vue'),
        meta:{
            title:'Card'
        }
    },
    {
        path:'/Cell',
        name:'Cell',
        component:require('./views/Cell.vue'),
        meta:{
            title:'Cell'
        }
    },
    {
        path:'/CellSwipe',
        name:'CellSwipe',
        component:require('./views/CellSwipe.vue'),
        meta:{
            title:'CellSwipe'
        }
    },
    {
        path:'/CheckBox',
        name:'CheckBox',
        component:require('./views/CheckBox.vue'),
        meta:{
            title:'CheckBox'
        }
    },
    {
        path:'/Header',
        name:'Header',
        component:require('./views/Header.vue'),
        meta:{
            title:'Header'
        }
    },
    {
        path:'/Indicator',
        name:'Indicator',
        component:require('./views/Indicator.vue'),
        meta:{
            title:'Indicator'
        }
    },
    {
        path:'/LoadMore',
        name:'LoadMore',
        component:require('./views/LoadMore.vue'),
        meta:{
            title:'LoadMore'
        }
    },
    {
        path:'/Message',
        name:'Message',
        component:require('./views/Message.vue'),
        meta:{
            title:'Message'
        }
    },
    {
        path:'/Modal',
        name:'Modal',
        component:require('./views/Modal.vue'),
        meta:{
            title:'Modal'
        }
    },
    {
        path:'/Picker',
        name:'Picker',
        component:require('./views/Picker.vue'),
        meta:{
            title:'Picker'
        }
    },
    {
        path:'/Popup',
        name:'Popup',
        component:require('./views/Popup.vue'),
        meta:{
            title:'Popup'
        }
    },
    {
        path:'/Progress',
        name:'Progress',
        component:require('./views/Progress.vue'),
        meta:{
            title:'Progress'
        }
    },
    {
        path:'/Prompt',
        name:'Prompt',
        component:require('./views/Prompt.vue'),
        meta:{
            title:'Prompt'
        }
    },
    {
        path:'/RadioBox',
        name:'RadioBox',
        component:require('./views/RadioBox.vue'),
        meta:{
            title:'RadioBox'
        }
    },
    {
        path:'/Rater',
        name:'Rater',
        component:require('./views/Rater.vue'),
        meta:{
            title:'Rater'
        }
    },
    {
        path:'/SlideBar',
        name:'SlideBar',
        component:require('./views/SlideBar.vue'),
        meta:{
            title:'SlideBar'
        }
    },
    {
        path:'/Spinner',
        name:'Spinner',
        component:require('./views/Spinner.vue'),
        meta:{
            title:'Spinner'
        }
    },
    {
        path:'/Swipe',
        name:'Swipe',
        component:require('./views/Swipe.vue'),
        meta:{
            title:'Swipe'
        }
    },
    {
        path:'/SwitchBar',
        name:'SwitchBar',
        component:require('./views/SwitchBar.vue'),
        meta:{
            title:'SwitchBar'
        }
    },
    {
        path:'/Tab',
        name:'Tab',
        component:require('./views/Tab.vue'),
        meta:{
            title:'Tab'
        }
    },
    {
        path:'/Text',
        name:'Text',
        component:require('./views/Text.vue'),
        meta:{
            title:'Text'
        }
    },
    {
        path:'/ToTop',
        name:'ToTop',
        component:require('./views/ToTop.vue'),
        meta:{
            title:'ToTop'
        }
    },
    {
        path:'/Upload',
        name:'Upload',
        component:require('./views/Upload.vue'),
        meta:{
            title:'Upload'
        }
    },


]
export default routers;