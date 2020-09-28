import * as Hammer from 'hammerjs';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriasComponent } from './categorias/categorias.component';
import { TableroComponent } from './tablero/tablero.component';
import { PictogramasComponent } from './pictogramas/pictogramas.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


export class HammerConfig extends HammerGestureConfig {
  overrides = <any> {
      // I will only use the swap gesture so 
      // I will deactivate the others to avoid overlaps
      'pinch': { enable: true },
      'rotate': { enable: true },
       swipe: { direction: Hammer.DIRECTION_ALL },
      
  }
}


@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    TableroComponent,
    PictogramasComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    NgbModule,
    HammerModule
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
