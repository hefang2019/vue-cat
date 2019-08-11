import Vue from 'vue'
import {
    //搜索组件
    Search,
    //图标
    Icon,
    //tab标签
    Tab,
    Tabs,
    //轮播图
    Swipe,
    SwipeItem,
    //footer
    Tabbar,
    TabbarItem,
    // 筛选
    DropdownMenu,
    DropdownItem,
    //登录
    Field,
    //按钮
    Button,
    //步进器
    Stepper,
    // 加入购物车
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    //商品信息
    Card,
    //结算
    SubmitBar,
    // 复选框
    Checkbox,
    CheckboxGroup,
    //单元格
    Cell,
    CellGroup
} from 'vant';



export default () => {
    Vue.use(Search);
    Vue.use(Icon);
    Vue.use(Tab).use(Tabs);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Field);
    Vue.use(Button);
    Vue.use(Stepper);
    Vue.use(GoodsAction);
    Vue.use(GoodsActionIcon);
    Vue.use(GoodsActionButton);
    Vue.use(Card);
    Vue.use(SubmitBar);
    Vue.use(Checkbox).use(CheckboxGroup);
    Vue.use(Cell).use(CellGroup);

}