/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MoviesComponent } from './movies.component';

let component: MoviesComponent;
let fixture: ComponentFixture<MoviesComponent>;

describe('movies component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MoviesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MoviesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});