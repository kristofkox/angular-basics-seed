import { Injectable } from '@angular/core';
import {Donut} from "../models/donut.model";

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts: Donut[] =  [
    {
      id: 'xy12yr',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 119,
      promo: 'limited',
      description: 'For the pure chocoholic.',
    },
    {
      id: 'zy19yr',
      name: 'Glazed Fudge',
      icon: 'glazed-fudge',
      price: 129,
      promo: 'new',
      description: 'Sticky perfection.',
    },
    {
      id: 'qy19ya',
      name: 'Caramel Swirl',
      icon: 'caramel-swirl',
      price: 129,
      description: 'Chocolate drizzled with caramel',
    },
    {
      id: '2dfe5',
      name: 'Sour Supreme',
      icon: 'sour-supreme',
      price: 139,
      description: 'For the sour advocate.',
    },
    {
      id: 'a6rfg',
      name: 'Zesty Lemon',
      icon: 'zesty-lemon',
      price: 129,
      description: 'Delicious luscious lemon.',
    }
  ];
  constructor() { }

  read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donut = this.read().find((donut: Donut) => donut.id === id);
    if (donut) {
      return donut;
    }
    return {name: '', icon: '', price: 0, description: ''};
  }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload]
    console.log(this.donuts);
  }
}
