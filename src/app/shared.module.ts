import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';

import { FormsModule } from '@angular/forms';
import { OverlaySpinnerComponent } from './components/overlay-spinner/overlay-spinner.component';
// import { NewItemDirective } from './new-item.directive';
// import { OrdersPipe } from './orders.pipe';

import { ApiService } from './services/api.service';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        TranslateModule
    ],
    declarations: [
        OverlaySpinnerComponent,
        // NewItemDirective, 
        // OrdersPipe
    ],
    providers: [
        ApiService
    ],
    exports: [
        OverlaySpinnerComponent,
        // NewItemDirective, 
        // OrdersPipe,
        CommonModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        FormsModule,
        TranslateModule
    ],
    entryComponents: [
        OverlaySpinnerComponent
    ]
})
export class SharedModule {}
