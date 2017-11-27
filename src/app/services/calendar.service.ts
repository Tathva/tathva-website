import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CalendarService {

    // tslint:disable-next-line:max-line-length
    private apiUrl = 'https://www.googleapis.com/calendar/v3/calendars/tathva.ed.jp_lnve0qnfanvii5altu43t35o2o@group.calendar.google.com/events';
    private apiKey = 'AIzaSyDymbthdVcOVn-5iUMerSJxmzmlgzi7JH4';
    private searchParams: HttpParams;

    private nextPageToken;

    private results = new BehaviorSubject([]);
    result = this.results.asObservable();

    constructor(private http: HttpClient) {
        this.searchParams = new HttpParams()
            .set('key', this.apiKey)
            .set('orderBy', 'startTime')
            .set('singleEvents', 'true')
            .set('timeMin', new Date().toISOString());
    }

    getEvents() {
        this.http.get(this.apiUrl, {
            params: this.searchParams
                .set('maxResults', '9')
        }).subscribe(data => {
            this.results.next(data['items']);
            this.nextPageToken = data['nextPageToken'];
        });
    }

    getNext() {
        this.http.get(this.apiUrl, {
            params: this.searchParams
                .set('maxResults', '1')
                .set('nextPageToken', this.nextPageToken)
        }).subscribe(data => {
            this.results.next(data['items']);
            this.nextPageToken = data['nextPageToken'];
        })
    }

}

