import { Injectable } from '@angular/core';
import * as alasql from 'alasql';

// Wrapper around alasql

@Injectable({
    providedIn: 'root'
})
export class AlaSql {

    public async exec (sql: string) {
        let p = new Promise<string>(async (resolve) => {
            console.log('Sql: ' + sql);
            await alasql.promise(sql)
                .then((res) => {
                    console.log('Result: ' + JSON.stringify(res));
                    resolve(res);
                });
                
        });
        return p;
    }

    public async execSelect (sql: string): Promise<Object[]> {
        let p = new Promise<Object[]>(async (resolve) => {
            console.log('Sql: ' + sql);
            await alasql.promise(sql)
                .then((res) => {
                    console.log('Result: ' + JSON.stringify(res));
                    resolve(res);
                });
                
        });
        return p;
    }
}
