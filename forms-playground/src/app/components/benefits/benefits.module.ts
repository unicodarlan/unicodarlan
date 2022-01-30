import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsComponent } from './benefits.component';
import { CardsComponent } from './cards/cards.component';
import { ManualComponent } from './manual/manual.component';
import { RoutersComponent } from './routers/routers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'benefits', pathMatch: 'full' },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'benefits/:cards', component: CardsComponent },
  { path: 'benefits/:manual', component: ManualComponent },
];


@NgModule({
  declarations: [
    BenefitsComponent,
    CardsComponent,
    ManualComponent,
    RoutersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    BenefitsComponent,
    CardsComponent,
    ManualComponent,
    RoutersComponent
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BenefitsModule {}
