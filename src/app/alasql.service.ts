import { Injectable } from '@angular/core';
import * as alasql from 'alasql';

// Wrapper around alasql

@Injectable({
    providedIn: 'root'
})
export class AlaSql {

    public async exec (sql: string) {
        let p = new Promise<string>(async (resolve) => {
            // console.log('Sql: ' + sql);
            alasql.promise(sql)
                .then((res) => {
                    // console.log('Result: ' + JSON.stringify(res));
                    resolve(res);
                });
                
        });
        return p;
    }

    public async execSelect (sql: string): Promise<Object[]> {
        let p = new Promise<Object[]>(async (resolve) => {
            // console.log('Sql: ' + sql);
            alasql.promise(sql)
                .then((res) => {
                    // console.log('Result: ' + JSON.stringify(res));
                    resolve(res);
                });
                
        });
        return p;
    }

    // Create a table from a Json object.
    // This is the form that alasql uses natively, so this
    // should be more efficient than repeating insert into calls.
    public async createTable(tableName: string, data: Object[]) {
        let p = new Promise<void>(async (resolve) => {
            let sql = 'create table ' + tableName;
            alasql.promise(sql).then((res) => {
                let a = <any>alasql;
                for (let i = 0; i < Object.keys(a.tables).length; i++) {
                    if (Object.keys(a.tables)[i] === tableName) {
                        let table = <any>Object.values(a.tables)[i];
                        table.data = data;
                        resolve();
                        // console.log('data1: ' + JSON.stringify(table));
                    }
                }
            });
        });
        return p;
    }

    // Returns (presumably by reference) the data used by alasql.
    // As it should just return an existing reference, it isn't async.
    public rawData(tableName: string): Object[] {
        let a = <any>alasql;
        for (let i = 0; i < Object.keys(a.tables).length; i++) {
            if (Object.keys(a.tables)[i] === tableName) {
                let table = <any>Object.values(a.tables)[i];
                return table.data;
            }
        }
        throw new Error('rawData called for invalid tablename ' + tableName);
    }
}
