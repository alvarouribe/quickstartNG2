import {Component} from 'angular2/core';

export class Hero {
  id: number;
  name: string;
  description: string;
}

@Component({
    selector: 'my-app',

    // let’s take advantage of the template strings feature in ES2015 and TypeScript to maintain our sanity.
    // template: '<h1> {{ title }} </h1>'
    // 				 	+'<h2> {{hero.name}} details!</h2>'
    // 				 	+'<p>{{hero.description}}</p>'
    // 				 	+'<div><label>id: </label>{{hero.id}}</div>'
		// 		 			+'<div> <label>name: </label>'
		// 		 		  +'<input [(ngModel)]="hero.name" placeholder="name">'
		// 		 	    +'</div>'

    template:`<h1> {{ title }} </h1>
  			  	 	<h2> {{hero.name}} details! </h2>
				 	 		<p> {{hero.description}} </p>
  				 	 	<div>
  				 	 		<label>id: </label>{{hero.id}}
  				 	 	</div>
		 			   	
		 			   	<div>
						    <label>name: </label>
						    <input [(ngModel)]="hero.name" placeholder="name">
						  </div>`


    // {{}} The double curly braces tell our app to read the title and hero properties from the component 
    // and render them. This is the "interpolation" form of one-way data binding. 

})

export class AppComponent {
	title = 'Tour of Heroes';
	hero: Hero = {
	  id: 1,
	  name: 'Alfie',
		description: 'The power of self inflict selfies'
	};

}


// import {Component} from 'angular2/core';
// export class Hero {
//   id: number;
//   name: string;
// }
// @Component({
//   selector: 'my-app',
//   template:`
//     <h1>{{title}}</h1>
//     <h2>{{hero.name}} details!</h2>
//     <div><label>id: </label>{{hero.id}}</div>
//     <div>
//       <label>name: </label>
//       <input [(ngModel)]="hero.name" placeholder="name">
//     </div>
//     `
// })
// export class AppComponent {
//   title = 'Tour of Heroes';
//   hero: Hero = {
//     id: 1,
//     name: 'Windstorm'
//   };
// }