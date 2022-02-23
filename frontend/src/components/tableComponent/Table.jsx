import * as React from 'react';
import MaterialTable from 'material-table';
import { useState, useEffect } from 'react';
import Navbar from '../navbarComponent/Navbar';

export default function Table() {
    const [data, setData] = useState([
        {
            id: 1,
            user_id: 1,
            category_id: 1,
            payee_id: 1,
            account_id: 1,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 100,
            inflow: 0,
            note: '',
        },
        {
            id: 2,
            user_id: 2,
            category_id: 4,
            payee_id: 3,
            account_id: 2,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 890,
            inflow: 0,
            note: '',
        },
        {
            id: 3,
            user_id: 3,
            category_id: 5,
            payee_id: 5,
            account_id: 3,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 200,
            inflow: 0,
            note: '',
        },
        {
            id: 4,
            user_id: 4,
            category_id: 6,
            payee_id: 7,
            account_id: 4,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 10,
            inflow: 0,
            note: '',
        },
        {
            id: 5,
            user_id: 5,
            category_id: 8,
            payee_id: 9,
            account_id: 5,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 1300,
            inflow: 0,
            note: '',
        },
        {
            id: 6,
            user_id: 6,
            category_id: 10,
            payee_id: 11,
            account_id: 6,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 10,
            inflow: 0,
            note: '',
        },
        {
            id: 7,
            user_id: 1,
            category_id: 2,
            payee_id: 2,
            account_id: 1,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 50,
            inflow: 0,
            note: '',
        },
        {
            id: 8,
            user_id: 2,
            category_id: 3,
            payee_id: 4,
            account_id: 2,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 124,
            inflow: 0,
            note: '',
        },
        {
            id: 9,
            user_id: 3,
            category_id: 5,
            payee_id: 6,
            account_id: 3,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 100,
            inflow: 0,
            note: '',
        },
        {
            id: 10,
            user_id: 4,
            category_id: 7,
            payee_id: 8,
            account_id: 4,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 20,
            inflow: 0,
            note: '',
        },
        {
            id: 11,
            user_id: 5,
            category_id: 9,
            payee_id: 10,
            account_id: 5,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 103,
            inflow: 0,
            note: '',
        },
        {
            id: 12,
            user_id: 6,
            category_id: 11,
            payee_id: 12,
            account_id: 6,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 145,
            inflow: 0,
            note: '',
        },
        {
            id: 13,
            user_id: 1,
            category_id: 2,
            payee_id: 1,
            account_id: 1,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 23,
            inflow: 0,
            note: '',
        },
        {
            id: 14,
            user_id: 2,
            category_id: 4,
            payee_id: 3,
            account_id: 2,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 1000,
            inflow: 0,
            note: '',
        },
        {
            id: 15,
            user_id: 3,
            category_id: 12,
            payee_id: 5,
            account_id: 3,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 12,
            inflow: 0,
            note: '',
        },
        {
            id: 16,
            user_id: 4,
            category_id: 6,
            payee_id: 7,
            account_id: 4,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 460,
            inflow: 0,
            note: '',
        },
        {
            id: 17,
            user_id: 5,
            category_id: 8,
            payee_id: 9,
            account_id: 5,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 123,
            inflow: 0,
            note: '',
        },
        {
            id: 18,
            user_id: 6,
            category_id: 10,
            payee_id: 11,
            account_id: 6,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 200,
            inflow: 0,
            note: '',
        },
        {
            id: 19,
            user_id: 1,
            category_id: 1,
            payee_id: 2,
            account_id: 1,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 45,
            inflow: 0,
            note: '',
        },
        {
            id: 20,
            user_id: 2,
            category_id: 3,
            payee_id: 4,
            account_id: 2,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 100,
            inflow: 0,
            note: '',
        },
        {
            id: 21,
            user_id: 3,
            category_id: 12,
            payee_id: 6,
            account_id: 3,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 345,
            inflow: 0,
            note: '',
        },
        {
            id: 22,
            user_id: 4,
            category_id: 7,
            payee_id: 8,
            account_id: 4,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 100,
            inflow: 0,
            note: '',
        },
        {
            id: 23,
            user_id: 5,
            category_id: 9,
            payee_id: 10,
            account_id: 5,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 1234,
            inflow: 0,
            note: '',
        },
        {
            id: 24,
            user_id: 6,
            category_id: 11,
            payee_id: 12,
            account_id: 6,
            date: 'Thu Feb 17 2022 11:07:42',
            outflow: 100,
            inflow: 0,
            note: '',
        },
    ]);

    return (
        <>
            {/* <Navbar /> */}
            <MaterialTable
                title="Transactions"
                columns={[
                    { title: 'Name', field: 'user_id' },
                    { title: 'Payee', field: 'payee_id' },
                    { title: 'Category', field: 'category_id' },
                    { title: 'Account', field: 'account_id' },
                    { title: 'Date', field: 'date', type: 'date' },
                    { title: 'Outflow', field: 'outflow', type: 'currency' },
                    { title: 'Inflow', field: 'inflow', type: 'currency' },
                    { title: 'Note', field: 'note' },
                ]}
                //should be const data passed in instead of all of this dummy data
                data={data}
                options={{
                    pageSizeOptions: [5, 10, 25, 50],
                    pageSize: 10,
                    columnsButton: true,
                    rowStyle: (data, index) =>
                        index % 2 === 0
                            ? {
                                  background: '#f5f5f5',
                                  color: '#001F29',
                                  height: '.5rem',
                              }
                            : {
                                  background: 'white',
                                  color: '#001F29',
                                  height: '.5rem',
                              },
                    grouping: true,
                    actionsColumnIndex: -1,
                    headerStyle: {
                        backgroundColor: '#003459',
                        color: '#F5F5F5',
                        fontStyle: 'italic',
                    },
                }}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setData([...data, newData]);

                                resolve();
                            }, 1000);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setData([...dataUpdate]);

                                resolve();
                            }, 1000);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setData([...dataDelete]);

                                resolve();
                            }, 1000);
                        }),
                }}
            />
        </>
    );
}