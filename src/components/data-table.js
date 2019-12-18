import React from "react";

export default function DataTable(props) {
    return(
        <div className='container dt-table'>
            <table className="table table-bordered">
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Symbol</th>
                <th onClick={()=> props.sortBy('price_usd')} >
                   Price {props.direction['price_usd']==='asc' ? <span>↓</span> : <span>↑</span>}
                </th>
                <th>
                    <button onClick={()=> props.sortBy('percent_change_1h')}>%hours</button> {props.direction['percent_change_1h']==='asc' ? <span>↓</span> : <span>↑</span>}
                </th>
                <th>
                    <button onClick={()=> props.sortBy('percent_change_24h')}>%day</button>
                </th>
                <th>
                    <button onClick={()=> props.sortBy('percent_change_7d')}>%week </button>
                </th>
            </tr>
            </thead>
            <tbody>
            {
                props.data.map(list => (
                    <tr key={list.id}>
                        <td>{list.rank}</td>
                        <td>{list.name}</td>
                        <td>{list.symbol}</td>
                        <td>{list.price_usd}</td>
                        <td>{list.percent_change_1h}</td>
                        <td>{list.percent_change_24h}</td>
                        <td>{list.percent_change_7d}</td>
                    </tr>
                ))
            }


            </tbody>
        </table>
        </div>
    )
}