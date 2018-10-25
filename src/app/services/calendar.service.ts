import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';


@Injectable()
export class CalendarService {

    // tslint:disable-next-line:max-line-length
    private apiUrl = environment.calendar.url;
    private apiKey = environment.calendar.key;
    private searchParams: HttpParams;

    private nextPageToken;

    private results = new BehaviorSubject([]);
    result = this.results.asObservable();

    constructor(private http: HttpClient) {
        this.searchParams = new HttpParams()
            .set('key', this.apiKey)
            .set('orderBy', 'startTime')
            .set('singleEvents', 'true')
            .set('maxResults', '10')
            .set('timeMin', new Date().toISOString());
    }

    getEvents() {
        this.http.get(this.apiUrl, {
            params: this.searchParams
        }).subscribe(data => {
            this.results.next(data['items']);
            this.nextPageToken = data['nextPageToken'];
        });
    }

    getNext() {
        this.http.get(this.apiUrl, {
            params: this.searchParams
                .set('nextPageToken', this.nextPageToken)
        }).subscribe(data => {
            this.results.next(data['items']);
            this.nextPageToken = data['nextPageToken'];
        })
    }

}

