import {
    Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, OnChanges, DoCheck, SimpleChanges,
    AfterViewInit, HostListener, OnDestroy
} from '@angular/core';
import {TestingServiceService} from '../../testing-service.service';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-server',
  // selector: '[app-server]',
  // selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ServerComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy  {
    @Input('srvElement') element: String;
    data: String = '';
    isData: Boolean = true;
    value: Number = 5;
    myCustomeObservable: Subscription;
    @ViewChild('intputTest2') inputTest2: ElementRef; // to select Component, pass Component type/class name in ViewChild argument
    @ViewChild('heading') header: ElementRef;
    constructor(public testingService: TestingServiceService) { }

    // @HostListener('mouseenter') mouseover(eventData: Event) {
    //     console.log('mouseenter');
    // }
    //
    // @HostListener('mouseleave') mouseleave(eventData: Event) {
    //     console.log('mouseleave');
    // }

    ngOnChanges(changes: SimpleChanges) { // Call whenever @Input() changes
        console.log('ngOnChanges');
        console.log(changes);
    }

    ngOnInit() {
        console.log('ngOnInit ServerComponent');
        this.testingService.getCounter();
        this.testingService.changeCounter();
        this.testingService.changeCounter();
        this.testingService.changeCounter();
        this.testingService.getCounter();
        console.log(this.header.nativeElement.textContent);


        const myObservable = Observable.create((observer: Observer<String>) => {
            setTimeout(() => {
                observer.next('first package');
            }, 2000);
            setTimeout(() => {
                observer.next('second package');
                // observer.complete();
            }, 4000);
            setTimeout(() => {
                observer.error('This is an Error Message');
            }, 5000);
            setTimeout(() => {
                observer.next('third package');
            }, 6000);
        });
        this.myCustomeObservable = myObservable.subscribe((data: string) => {
            console.log(data);
        },
        (error) => {
            console.log(error);
        },
        () => {
            console.log('Finish Observing');
        });
    }

    ngOnDestroy () {
        this.myCustomeObservable.unsubscribe();
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        console.log(this.header.nativeElement.textContent);
    }

    ngDoCheck() { // Call whenever template changes
        // console.log('ngDoCheck');
    }

    onDataClicked(event: any) {
        this.isData = !this.isData;
        console.log(event);
    }

    onUpdateData(event: any) {
        this.data = event.target.value;
        console.log(event.target.value);
    }

    onGetValueClicked1(intputTest1: HTMLInputElement) {
        console.log(intputTest1);
        console.log(intputTest1.type);
        console.log(intputTest1.value);
    }

    onGetValueClicked2() {
        console.log(this.inputTest2);
        console.log(this.inputTest2.nativeElement.value);
    }


}
