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
            alasql.promise(sql)
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
            alasql.promise(sql)
                .then((res) => {
                    console.log('Result: ' + JSON.stringify(res));
                    resolve(res);
                });
                
        });
        return p;
    }

    // Create a table from a Json object
    public async createTable(tableName: string, data: Object[]) {
        let p = new Promise<string>(async (resolve) => {
            let sql = 'create table ' + tableName;
            alasql.promise(sql).then((res1) => {
                for (let row of data) {
                    let sql2 = 'insert into ' + tableName 
                    + ' values ' + JSON.stringify(row);
                    alasql.promise(sql2).then((res2) => {
                        // console.log('Result: ' + JSON.stringify(res));
                        resolve(res2);
                    });
                }
            });
        });
        return p;
    }
}
