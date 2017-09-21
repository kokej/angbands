import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { BandService }        from './services/band.service';
import { YoutubeService }     from './services/youtube.service';
import { BandComponent }      from './components/band/band.component';
 

 
@NgModule({
  imports:      [ CommonModule, HttpModule, JsonpModule],
  declarations: [ BandComponent ],
  exports:      [ BandComponent ],
  providers:    [ BandService, YoutubeService ]
})
export class BandModule { }