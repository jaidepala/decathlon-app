import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { appRouter } from './app.routing';
import { AppComponent } from './app.component';

// Material 
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { MatToolbarModule } from '@angular/material';
    import { MatButtonModule } from '@angular/material';
    import { MatSidenavModule } from '@angular/material';
    import { MatIconModule } from '@angular/material';
    import { MatListModule } from '@angular/material';
    import { MatCardModule } from '@angular/material';
    import { MatSelectModule } from '@angular/material';
    import { MatMenuModule } from '@angular/material';


// Translate Service
// https://medium.com/letsboot/translate-angular-4-apps-with-ngx-translate-83302fb6c10d
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

// Components

import { NavComponent } from './components/nav/nav.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatSelectModule,
        MatMenuModule,
        // SharedModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        appRouter,
        BrowserAnimationsModule
    ],
    exports: [
        NavComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {}
