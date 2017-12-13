import { Component } from '@angular/core';
import {ToolsLoadingService} from "../../lib/src/tools-loading/tools-loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private loading:ToolsLoadingService){

  }



}
