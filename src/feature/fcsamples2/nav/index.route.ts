import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { NavsideComponent } from './navside/navside.component';
import { NavtabComponent } from './navtab/navtab.component';
export const navRouters: Routes = [
    {
        path:'system/fcnavbarList',//导航栏
        component: NavbarComponent
    }, {
        path:'system/fcnavmenuList',//菜单
        component: NavmenuComponent
    }, {
        path:'system/fcnavsideList',//侧边框
        component: NavsideComponent
    }, {
        path:'system/fcnavtabList',//选项卡
        component: NavtabComponent
    }
];
