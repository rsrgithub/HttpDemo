import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../remote.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  users$: Observable<any>;

  constructor(private _service: RemoteService) { }

  ngOnInit() {

    this.users$ = this._service.getUsers();
  }

}
