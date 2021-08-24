import layfoot from '@/components/layout/layfoot.vue'
// 轮播
import { Swipe, SwipeItem } from 'mint-ui';
// 按钮
import { Button } from 'mint-ui';
// 导航栏
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
// 底部导航栏
import { Tabbar } from 'mint-ui';
export default (Vue) => {
    Vue.component('layfoot', layfoot)
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    Vue.component(Button.name, Button);
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);
    Vue.component(TabContainer.name, TabContainer);
    Vue.component(TabContainerItem.name, TabContainerItem);
    Vue.component(Tabbar.name, Tabbar);
}