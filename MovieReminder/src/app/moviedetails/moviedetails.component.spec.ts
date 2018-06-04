/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MovieDetailsComponent } from './moviedetails.component';

let component: MovieDetailsComponent;
let fixture: ComponentFixture<MovieDetailsComponent>;

describe('moviedetails component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MovieDetailsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MovieDetailsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
