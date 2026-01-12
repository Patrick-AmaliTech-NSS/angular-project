import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' // scope
})
export class LoggerService {
    logstore: string[] = [];

    log(message: string) {
        this.logstore.push(message);
        console.log(message);
    }
}