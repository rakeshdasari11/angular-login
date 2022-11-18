import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChangecolorDirective } from 'src/app/services/changecolor.directive';
import { StringpipePipe } from 'src/app/pipe/stringpipe.pipe';


@NgModule({
  declarations: [AboutUsComponent,
    ChangecolorDirective,
    StringpipePipe
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    
    ]
})
   
export class AboutUsModule { }
