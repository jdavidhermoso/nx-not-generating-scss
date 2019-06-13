import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MyComponentNameComponent } from './my-component-name/my-component-name.component';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [AppComponent, MyComponentNameComponent, MyComponentComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
