import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsModule } from './benefits/benefits.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, BenefitsModule], // configure benefits module
  exports: [],
  providers: [],
})
export class ComponentsModule {}
