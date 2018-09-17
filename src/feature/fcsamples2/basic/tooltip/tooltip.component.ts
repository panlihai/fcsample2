import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styles: [`
  .badgecontent{
    display:inline-block;
    cursor:pointer;
  }`]
})
export class TooltipComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCTOOLTIP', mainService);
  }
}
