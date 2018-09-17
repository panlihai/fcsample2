import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvidersService } from 'fccore2';
import { environment } from '../../../environments/environment';
@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    styles: [
        `
    .logo-txt {
        background-color: transparent !important;
    }
    .sigin-wrap {
        width: 100%;
        height: 100%;
        position:absolute;
        overflow:auto;
        background-color: #373d41;
    }

    .sigin {
        width: 100%;
        height: 100%;
        background-color: #1F2325;  
    }

    .navbar-brand>img {
        position: absolute;
        top: 0;
        left: 0;
    }

    .sigin-body {
        padding: 74px 0 118px;
        text-align: center;
        background-image: url(assets/img/login_bg.jpg);
        background-size: 100% 100%;
    }

    .sigin-body .sigin-error {
        width: 100%;
        margin-bottom: 30px;
        line-height: 24px;
        box-sizing: border-box;
        font-size: 14px;
        margin-top:20px;
    }
    .sigin-error-in {
        background: #FEEEEB;
        border: 1px solid #F15532;
        color: #F15533;
        text-align: left;
        padding:3px 6px;
    }
    .sigin-body .sigin-body-box {
        width: 990px;
        margin: auto;
        position: relative;
        height: 388px;
    }

    .sigin-body .sigin-body-box .sigin-body-txt-box {
        text-align: left;
        position: absolute;
        left: 0;
        top: 0;
        color: #ffffff;
    }

    .sigin-body .sigin-body-box .sigin-body-txt-box .start-button {
        margin-top: 20px;
    }

    .sigin-body .sigin-body-box .sigin-body-txt-box .start-button .start-button-last {
        margin-left: 20px;
    }

    .sigin-body .sigin-body-box .sigin-module {
        width: 350px;
        padding: 30px 20px 40px;
        background: #0175e1;
        position: absolute;
        right: 0;
        top:30px;
        opacity: 0.7;
    }
    .sigin-module h2{
        color:#fff;
    }
    .sigin-body .sigin-body-box .sigin-form .form-group {
        margin-bottom: 20px;
    }

    .sigin-body .sigin-body-box .sigin-form .sigin-submit {
        margin-top: 30px;
    }
    .sigin-body .sigin-body-box .sigin-other {
        width: 100%;
        text-align: right;
        margin-top: 10px;
    }

    .sigin-body .sigin-body-box .sigin-other .sigin-other-link {
        font-size: 12px;
        color: #fff;
        margin-left: 15px;
    }
    .fc-copyright {
        padding: 20px;
    }
    .fc-copyright .fc-copyright-in {
        width: 100%;
        max-width: 1200px;
        color: #73777a;
        font-size: 14px;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
    }

    .fc-copyright .fc-copyright-in .big a {
        font-size: 16px;
        color: #9b9ea0;
        margin-right: 35px;
    }

    .fc-copyright .fc-copyright-in .big a:hover {
        color: #108ee9;
    }

    .fc-copyright .fc-copyright-in .link-wrap {
        padding-top: 32px;
    }

    .fc-copyright .fc-copyright-in .link-wrap .link-item {
        display: inline-block;
        font-size: 14px;
        color: #73777a;
        margin-right: 10px;
        margin-top: 10px;
    }

    .fc-copyright .fc-copyright-in .link-wrap .link-item:hover {
        color: #108ee9;
    }

    .fc-copyright .fc-copyright-in .copyright {
        color: #73777a;
        font-size: 14px;
        margin-top: 10px;
    }
    .login-p{
        color:#fff;
        text-align:center;
        letter-spacing:1px;
    }
  `
    ]
})
export class SigninComponent implements OnInit {
    hasError: boolean = false;
    msg: string = "";
    userId: string = "";
    password: string = "";
    _projectName = environment.projectName;
    constructor(private router: Router, private providers: ProvidersService) { }
    ngOnInit() {
        if (this.providers.userService.getUserInfo()) {
            this.router.navigate(['/' + environment.pid.toLocaleLowerCase() + '/home']);
        }
    }
    /**
     * 根据用户密码登录，并存储当前用户的相关信息
     */
    login() {
        this.providers.logService.debug({u:this.userId,p:this.password});
        this.providers.userService.login(this.userId, this.password).subscribe(result => {
            if (result.CODE === '0') {
                this.hasError = false;
                this.providers.userService.storeUserInfo(result);
                this.router.navigate(['/' + environment.pid.toLocaleLowerCase() + '/home']);
            } else {
                this.hasError = true;
                this.msg = result.MSG;
            }
        });
    }

}
