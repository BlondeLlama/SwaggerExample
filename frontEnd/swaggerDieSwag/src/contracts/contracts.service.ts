import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ContractsService {

    constructor(private http: Http) {

    }
    
    GetContract() {
        return this.http
            .get('http://localhost:16938/swagger/v1/swagger.json')
            .subscribe(resp => resp.text);
    }
}