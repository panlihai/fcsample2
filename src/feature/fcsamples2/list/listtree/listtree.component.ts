import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'listtree',
  templateUrl: './listtree.component.html',
  styles: [``]
})
export class ListtreeComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCLISTTREE', mainService);
  }
}