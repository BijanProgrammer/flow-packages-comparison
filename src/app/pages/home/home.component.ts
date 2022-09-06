import {Component} from '@angular/core';

enum Score {
    GOOD = 'good',
    OK = 'ok',
    BAD = 'bad',
}

enum Bool {
    TRUE = 'true',
    NA = 'na',
    FALSE = 'false',
}

interface Row {
    name: string;
    url: string;
    isFree: Bool;
    angularSupport: Score;
    documents: Score;
    community: Score;
    easyToUse: Bool;
    eventHanding: Score;
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
            name: 'GoJS',
            url: 'https://gojs.net/',
            isFree: Bool.FALSE,
            angularSupport: Score.GOOD,
            documents: Score.BAD,
            community: Score.OK,
            easyToUse: Bool.FALSE,
            eventHanding: Score.OK,
            customizableNodes: Score.OK,
            customizableEdges: Score.OK,
            animation: Score.GOOD,
            ui: Score.BAD,
        },
        {
            name: 'Basic Primitives',
            url: 'https://www.basicprimitives.com/',
            isFree: Bool.FALSE,
            angularSupport: Score.GOOD,
            documents: Score.BAD,
            community: Score.BAD,
            easyToUse: Bool.FALSE,
            eventHanding: Score.OK,
            customizableNodes: Score.BAD,
            customizableEdges: Score.BAD,
            animation: Score.BAD,
            ui: Score.BAD,
        },
        {
            name: 'AntV X6',
            url: 'https://x6.antv.vision/en',
            isFree: Bool.TRUE,
            angularSupport: Score.GOOD,
            documents: Score.OK,
            community: Score.OK,
            easyToUse: Bool.TRUE,
            eventHanding: Score.GOOD,
            customizableNodes: Score.GOOD,
            customizableEdges: Score.GOOD,
            animation: Score.GOOD,
            ui: Score.GOOD,
        },
    ];
}
