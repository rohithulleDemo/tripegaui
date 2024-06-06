import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'tripegaui';
  northStates: string[] =[];
  southStates: string[] =[];
  eastStates: string[] =[];
  westStates: string[] =[];
  utStates: string[] =[];

  ngOnInit(){
    this.northStates = ['Jammu & Kashmir', 'Himachal Pradesh', 'Punjab', 'Uttarakhand', 'Haryana', 'Delhi', 'Rajasthan', 'Uttar Pradesh'];
    this.southStates = ['Andhra Pradesh', 'Karnataka', 'Kerala', 'Tamil Nadu', 'Telangana'];
    this.eastStates = ['Arunachal Pradesh', 'Assam', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim', 'Tripura','Bihar', 'Jharkhand', 'Odisha', 'West Bengal'];
    this.westStates = ['Gujarat', 'Madhya Pradesh', 'Maharashtra', 'Goa'];
    this.utStates = ['Andaman and Nicobar', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'];
  }
}
