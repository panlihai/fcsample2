import { Component} from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
@Component({
  selector: 'TemplatemodaltreeformlistsComponent',
  templateUrl: './templatemodaltreeformlists.component.html',
  styles: [``]
})
export class TemplatemodaltreeformlistsComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('SYSCOMPONENT', mainService);
  }
}