import React from 'react';
import {NavLink} from "react-router-dom";
import {ActionCell, DataTable, TextCell} from '../components/DataTable'
import {Cell, Column} from "fixed-data-table-2";

class UsersAdminPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            ...props,
            users: []
        }
    }

    componentDidMount() {
        this.state.getUsersData();
    }


    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
        // this.state.getUsersData();
    }

    render() {
        const {users, refreshData} = this.state;
        return (
            <div id={'table-container'}>
                <div className="row">
                    <h2 className="col-sm-6 col-sm-push-3">Users</h2>

                </div>

                <NavLink to={'/admin/users/create'}>
                    <button className={'btn'}>Add New User</button>
                </NavLink>
                <DataTable rowsCount={users.length} containerId={'table-container'}>

                    <Column
                        columnKey="username"
                        cell={<TextCell data={users}/>}
                        header={<Cell>Username</Cell>}
                        fixed={true}
                        width={200}
                        flexGrow={2}
                    />
                    <Column
                        columnKey="email"
                        cell={<TextCell data={users}/>}
                        header={<Cell>Email</Cell>}
                        width={200}
                        flexGrow={2}
                    />

                    <Column
                        columnKey={"_id"}
                        header={<Cell>Action</Cell>}
                        cell={<ActionCell data={users} action={{
                            refreshData,
                            action_delete: '/api/users',
                            action_url: '/admin/users',
                            token: this.state.auth.token
                        }}
                        />}
                        fixed={true}

                        width={300}
                        flexGrow={1}
                    />

                </DataTable>
            </div>)
    }
}

export {UsersAdminPage};