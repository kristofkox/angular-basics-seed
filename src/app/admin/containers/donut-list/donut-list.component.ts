import {Component, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

import { Donut } from "../../models/donut.model";
import {DonutService} from "../../services/donut.service";
import {DonutCardComponent} from "../../components/donut-card/donut-card.component";

@Component({
  standalone: true,
  imports: [RouterModule, DonutCardComponent, NgIf, NgForOf],
  selector: 'donut-list',
  template: `
      <div>
          <div class="donut-list-actions">
              <a routerLink="new" class="btn btn--green">
                  New Donut
                  <img src="/assets/img/icon/plus.svg">
              </a>
          </div>
          <ng-container *ngIf="donuts?.length; else nothing">
              <donut-card
                      *ngFor="let donut of donuts; trackBy: trackById;"
                      [donut]="donut">
              </donut-card>
          </ng-container>

          <ng-template #nothing>
              <p>No Donust here..</p>
          </ng-template>
      </div>
  `,
  styles: [`
    .donut-list {
      &-actions {
        margin-bottom: 10px;
      }
    }
  `,
  ],
})
export class DonutListComponent implements OnInit {
  // Declaratie hier maar vullen in ngOnInit()
  donuts!: Donut[];

  constructor(private donutService: DonutService) {}
  ngOnInit(): void {
    this.donutService
      .read()
      .subscribe((donuts: Donut[]) => (this.donuts = donuts));
  }

  trackById(index: number, value: Donut) {
    return value.id;

  }
}
