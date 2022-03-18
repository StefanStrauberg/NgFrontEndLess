import { Component } from '@angular/core'; // Import Decorator

// Decorator
@Component({
    // Required property
    selector: 'app-post',
    templateUrl: './post.component.html',
    // The minimum number of component properties is given above
    styleUrls: ['./post.component.scss']
})

// We have to import our new component into app.module.ts in massive declaretions
export class PostComponent{

}