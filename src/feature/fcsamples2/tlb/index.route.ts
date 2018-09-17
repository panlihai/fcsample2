import { Routes } from '@angular/router';
import { TlbformComponent } from './tlbform/tlbform.component';
import { TlblistComponent } from './tlblist/tlblist.component';
import { TlblistitemComponent } from './tlblistitem/tlblistitem.component';
export const tlbRouters: Routes = [
    {
        path:'system/fctlbformList',//表单
        component: TlbformComponent
    }, {
        path:'system/fctlblistList',//列表
        component: TlblistComponent
    }, {
        path:'system/fctlblistitemList',//子列表
        component: TlblistitemComponent
    }
];
