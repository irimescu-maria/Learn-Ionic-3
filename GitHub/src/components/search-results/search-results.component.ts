import { Component, Input } from '@angular/core';
import { User } from '../../models/user.interface';

/**
 * Generated class for the SearchResultsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-results',
  templateUrl: 'search-results.component.html'
})
export class SearchResultsComponent {
  /**
   * We can pass the user through to the search component from within our 
   * results page
   */
  @Input() user: User;

}
