import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingStatusService {

  constructor() {

  }

  onStatusSortig = (selectedSortinh: string) => {
    console.log(selectedSortinh)
  }
}
