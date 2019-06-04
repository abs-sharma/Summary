import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent 
{
  Quarter = ["Q1","Q2","Q3","Q4"];

  share() {
    window.alert('The product has been shared!');
  }

}