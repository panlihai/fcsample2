import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
@Component({
  selector: 'adcarousel',
  templateUrl: './adcarousel.component.html',
  styles: [``]
})
export class AdcarouselComponent extends ComponentParent {
   //基础js
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'carousel',
     templateUrl: './carousel.component.html',
     styleUrl:'./carousel.component.css'
   })
   export class CarouselComponent{
    CarouselOptions = { 
      fcEffect:'scollx',
      fcDots:true,
      fcVertical:false,
      fcAutoPlay:true,
      fcAutoPlaySpeed:2000,
      fcPauseOnHover:true
    }
    carouselData: any[] = [
      {
        label: "1",
        src: "assets/img/fc1.jpg"
      }, {
        label: "2",
        src: "assets/img/fc2.jpg"
      }, {
        label: "3",
        src: "assets/img/fc3.jpg"
      }, {
        label: "4",
        src: "assets/img/fc4.jpg"
      }
    ]
   }
   `
   //verticaljs
   verticaljs : string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'carousel',
     templateUrl: './carousel.component.html',
     styleUrl:'./carousel.component.css'
   })
   export class CarouselComponent{
    CarouselOptions = {
      fcEffect:'scollx',
      fcDots:true,
      fcVertical:false,
      fcAutoPlay:true,
      fcAutoPlaySpeed:2000,
      fcPauseOnHover:true
    }
    carouselData: any[] = [
      {
        label: "1",
        src: "assets/img/fc1.jpg"
      }, {
        label: "2",
        src: "assets/img/fc2.jpg"
      }, {
        label: "3",
        src: "assets/img/fc3.jpg"
      }, {
        label: "4",
        src: "assets/img/fc4.jpg"
      }
    ]
   }
   //垂直配置
   verticalOption: CarouselOptions = {
    fcVertical: true
   }
   `
   //自动播放js
   autoplayjs : string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'carousel',
     templateUrl: './carousel.component.html',
     styleUrl:'./carousel.component.css'
   })
   export class CarouselComponent{
    CarouselOptions = {
      fcEffect:'scollx',
      fcDots:true,
      fcVertical:false,
      fcAutoPlay:true,
      fcAutoPlaySpeed:2000,
      fcPauseOnHover:true
    }
    carouselData: any[] = [
      {
        label: "1",
        src: "assets/img/fc1.jpg"
      }, {
        label: "2",
        src: "assets/img/fc2.jpg"
      }, {
        label: "3",
        src: "assets/img/fc3.jpg"
      }, {
        label: "4",
        src: "assets/img/fc4.jpg"
      }
    ]
   }
   //自动播放
   autoplayData: CarouselOptions = {
     fcAutoPlay:false
   }
   `
     //hoverjs
     hoverjs : string = `
     import { Component, OnInit } from '@angular/core';
     @Component({
       selector: 'carousel',
       templateUrl: './carousel.component.html',
       styleUrl:'./carousel.component.css'
     })
     export class CarouselComponent{
      CarouselOptions = {
        fcEffect:'scollx',
        fcDots:true,
        fcVertical:false,
        fcAutoPlay:true,
        fcAutoPlaySpeed:2000,
        fcPauseOnHover:true
      }
      carouselData: any[] = [
        {
          label: "1",
          src: "assets/img/fc1.jpg"
        }, {
          label: "2",
          src: "assets/img/fc2.jpg"
        }, {
          label: "3",
          src: "assets/img/fc3.jpg"
        }, {
          label: "4",
          src: "assets/img/fc4.jpg"
        }
      ]
     }
     //鼠标悬停暂停
     pauseonhoverData : CarouselOptions = {
       fcPauseOnHover: true
     }
     `
      //speedjs
      speedjs : string = `
      import { Component, OnInit } from '@angular/core';
      @Component({
        selector: 'carousel',
        templateUrl: './carousel.component.html',
        styleUrl:'./carousel.component.css'
      })
      export class CarouselComponent{
       CarouselOptions = {
         fcEffect:'scollx',
         fcDots:true,
         fcVertical:false,
         fcAutoPlay:true,
         fcAutoPlaySpeed:2000,
         fcPauseOnHover:true
       }
       carouselData: any[] = [
         {
           label: "1",
           src: "assets/img/fc1.jpg"
         }, {
           label: "2",
           src: "assets/img/fc2.jpg"
         }, {
           label: "3",
           src: "assets/img/fc3.jpg"
         }, {
           label: "4",
           src: "assets/img/fc4.jpg"
         }
       ]
      }
       //播放速度
      autoplayspeedData: CarouselOptions = {
        fcAutoPlaySpeed : 5000
      } 
      `
  //fadejs
       fadejs : string = `
       import { Component, OnInit } from '@angular/core';
       @Component({
         selector: 'carousel',
         templateUrl: './carousel.component.html',
         styleUrl:'./carousel.component.css'
       })
       export class CarouselComponent{
        CarouselOptions = {
          fcEffect:'scollx',
          fcDots:true,
          fcVertical:false,
          fcAutoPlay:true,
          fcAutoPlaySpeed:2000,
          fcPauseOnHover:true
        }
        carouselData: any[] = [
          {
            label: "1",
            src: "assets/img/fc1.jpg"
          }, {
            label: "2",
            src: "assets/img/fc2.jpg"
          }, {
            label: "3",
            src: "assets/img/fc3.jpg"
          }, {
            label: "4",
            src: "assets/img/fc4.jpg"
          }
        ]
       }
       //动画效果effect
       effectData: CarouselOptions = {
         fcEffect:'scollx'
       }
       `
  //轮播图渲染
  carouselData: any[] = [
    {
      label: "1",
      src: "assets/img/fc1.jpg"
    }, {
      label: "2",
      src: "assets/img/fc2.jpg"
    }, {
      label: "3",
      src: "assets/img/fc3.jpg"
    }, {
      label: "4",
      src: "assets/img/fc4.jpg"
    }
  ]
  //上传
  fcOption = { FILETYPE: 'PIC', SOURCEID: 'dd90c093667947c4a4265e001602b9cd', SOURCEAID: 'SYSAPP', 'SOURCEFIELD': 'APPURL', 'RESTITLE': '' }
  constructor(public mainService: ComponentService) {
    super('FCADCAROUSEL', mainService);

  }
}

