import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    MatExpansionModule,
    MatChipsModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatSnackBarModule,
    MatBadgeModule
  ],
  exports: [
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    MatExpansionModule,
    MatChipsModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatSnackBarModule,
    MatBadgeModule
  ]
})
export class MaterialModule {}
