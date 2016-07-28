import $ from 'jquery';
import {fleet} from './fleet-data.js'
import  {FleetDataService} from './services/fleet-data-service.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';
import {CarsPage} from './cars-page.js';
import {MapPage} from './map-page.js';

export class App extends ApplicationBase{
	constructor(){
		 super('Fleet Manager');
		 this.dataService=new FleetDataService();
		 this.dataService.loadData(fleet);
		 this.addRoute('Home', new HomePage(),true);
		 this.addRoute('Cars', new CarsPage());
	     this.addRoute('Drones',null);
	     this.addRoute('Map',new MapPage());
	}
}

export let application=new App();
application.show($('body'));

// let b=new Button('Click Me');
// b.appendToElement($('body'));

// let i=new Image('../images/drone.jpg');
// i.appendToElement($('body'));

// let tb=new TitleBar('Our Application');
// tb.addLink('Home','');
// tb.addLink('Cars','');
// tb.addLink('Drones','');
// tb.addLink('Map','');
// tb.appendToElement($('body'));

// let headers="license Make Model Miles".split(' ');
// let dataService=new FleetDataService();
// dataService.loadData(fleet);

// let dt=new DataTable(headers, dataService.cars);
// dt.appendToElement($('body'));
// let centerOfMap={lat:40.783661, lng:-73.965883};
// let map=new GoogleMap(centerOfMap, dataService.cars);
// map.appendToElement($('body'));