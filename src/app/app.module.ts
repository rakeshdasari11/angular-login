import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./view/shared/shared.module";
import { AboutUsModule } from "./view/pages/about-us/about-us.module";
import { ContactUsModule } from "./view/pages/contact-us/contact-us.module";
import { HomeModule } from "./view/pages/home/home.module";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
//import { CookieService } from "ngx-cookie-service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { fakeBackendProvider } from "./core/fake.backend";
import { ErrorInterceptor } from "./core/error.interceptor";
import { JwtInterceptor } from "./core/jwt.interceptor";
import { AuthModule } from "./auth/auth.module";
import { ProductModule } from "./view/pages/product/product.module";
import { CategoryModule } from "./view/pages/category/category.module";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDialogModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AboutUsModule,
    ContactUsModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    ProductModule,
    CategoryModule,
    MatSlideToggleModule,
    MatDialogModule,
  ],
  providers: [
   // CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
  

})
export class AppModule {}
