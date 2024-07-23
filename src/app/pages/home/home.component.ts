import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  northStates: string[] = [];
  southStates: string[] = [];
  eastStates: string[] = [];
  westStates: string[] = [];
  utStates: string[] = [];
  groupStates: string[] = [];
  selectedGroupIndex = 0;
  activeStateList = "";
  isNorthList: boolean = true;
  isSouthList: boolean = false;
  isEastList: boolean = false;
  isWestList: boolean = false;
  isUTList: boolean = false;

  ngOnInit() {
    this.northStates = ['Jammu & Kashmir', 'Himachal Pradesh', 'Punjab', 'Uttarakhand', 'Haryana', 'Delhi', 'Rajasthan', 'Uttar Pradesh'];
    this.southStates = ['Andhra Pradesh', 'Karnataka', 'Kerala', 'Tamil Nadu', 'Telangana'];
    this.eastStates = ['Arunachal Pradesh', 'Assam', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim', 'Tripura', 'Bihar', 'Jharkhand', 'Odisha', 'West Bengal'];
    this.westStates = ['Gujarat', 'Madhya Pradesh', 'Maharashtra', 'Goa'];
    this.utStates = ['Andaman and Nicobar', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'];
    this.groupStates = ['North India', 'South India', 'West India', 'East India','Union Territories'];
    this.activeStateList = this.groupStates[0];
  }
  activateClass(index: number) {
    this.selectedGroupIndex = index;
  }

  enableStateList(stateName: string) {
    this.activeStateList = stateName;
    this.isNorthList = false;
    this.isSouthList = false;
    this.isWestList = false;
    this.isEastList = false;
    this.isUTList = false;
    if(stateName.includes('North')){
      this.isNorthList = true;
    }
    else if(stateName.includes('South')){
      this.isSouthList = true;
    }
    else if(stateName.includes('West')){
      this.isWestList = true;
    }
    else if(stateName.includes('East')){
      this.isEastList = true;
    }
    else if(stateName.includes('Union')){
      this.isUTList = true;
    }
  }


onStateClick(state: string) {
  throw new Error('Method not implemented.');
  }

}
