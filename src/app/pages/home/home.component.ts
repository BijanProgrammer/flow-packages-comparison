import {Component} from '@angular/core';

enum Score {
    GOOD = 'good',
    OK = 'ok',
    BAD = 'bad',
}

interface Row {
    name: string;
    url: string;
    angularSupport: Score;
    documents: Score;
    customizableNodes: Score;
    customizableEdges: Score;
    animation: Score;
    ui: Score;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public rows: Row[] = [
        {
            name: 'Package',
            url: 'https://www.totaljs.com/',
            angularSupport: Score.GOOD,
            documents: Score.OK,
            customizableNodes: Score.BAD,
            customizableEdges: Score.OK,
            animation: Score.OK,
            ui: Score.OK,
        },
    ];
}
