import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})

export class TestComponent implements OnInit {
    public newtest = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        user: '',
    }

    constructor (
        private testService: TestService,
    ) { }

    ngOnInit() {
        this.newtest.created_by = sessionStorage.getItem('email'); 
    }
}