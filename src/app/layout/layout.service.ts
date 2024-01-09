import { Injectable } from '@angular/core';
import * as SimpleBar from 'simplebar';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  // @ts-ignore
  scrollbar: SimpleBar;

  constructor() {
  }
}
