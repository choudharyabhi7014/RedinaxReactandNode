import React from 'react';

const DataTable = () => {
    const data = [
        { id: 1, name: 'Item 1', value: 30 },
        { id: 2, name: 'Item 2', value: 25 },
        { id: 3, name: 'Item 3', value: 18 },
        { id: 4, name: 'Item 4', value: 15 },
        { id: 4, name: 'Item 5', value: 10},
        
    ];

    return (
        <div className="card">
            <div className="card-body">
                <h4>Data Table</h4>
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;

