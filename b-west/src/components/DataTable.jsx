import React from 'react';
import superagent from "superagent";
import {Table, Cell} from "fixed-data-table-2";
import "fixed-data-table-2/dist/fixed-data-table.css";
import {NavLink} from "react-router-dom";

const getObjectAt = (objectData, index) => {
    if (index < 0 || index > objectData.length) {
        return undefined;
    }
    return objectData[index];
};
const deleteAction = (action_url, action_refresh) => {
    alert(1);
    superagent
        .del(action_url)
        .then((response) => {
            const body = response.body;
            if (body.success) {
                alert("item has ben deleted");
                action_refresh();
            } else {
                alert("Error please try again");
            }

        })
        .catch(err => {
            console.error(err)
        })
}
export const ActionCell = props => {
    const {action, rowIndex, columnKey, data} = props;
    const {action_delete, action_url, refreshData} = action;
    const key = getObjectAt(data, rowIndex)[columnKey];
    const actionView = action_url + '/' + key;
    const actionEdit = action_url + '/' + key + '/edit';
    const actionDelete = action_delete + '/' + key;
    return (
        <Cell {...props}>
            <NavLink to={actionView}>
                <button style={{minWidth: "80px", margin: '10px 10px', display: 'inline-block'}} className="btn">
                    View
                </button>
            </NavLink>
            <NavLink to={actionEdit}>

                <button style={{minWidth: "80px", margin: '10px 10px', display: 'inline-block'}} className="btn">Edit
                </button>
            </NavLink>

            <button onClick={() => {
                deleteAction(actionDelete, refreshData)
            }}
                    style={{minWidth: "80px", margin: '10px 10px', display: 'inline-block'}} className="btn">Delete
            </button>
        </Cell>
    );
};
export const TextCell = props => {
    const {data, rowIndex, columnKey} = props;

    return <Cell {...props}>{getObjectAt(data, rowIndex)[columnKey]}</Cell>;
};
export const ContentCell = props => {
    const {data, rowIndex, columnKey} = props;

    return <Cell {...props}  >
        <div dangerouslySetInnerHTML={{__html: getObjectAt(data, rowIndex)[columnKey]}}/>
    </Cell>;
};

class DataTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tableWidth: 1000,
            tableHeight: 600,
            data: props.data,
            action: props.action,
            rowLength: props.rowsCount,
            containerId: props.containerId
        };
    }

    /**
     * Calculate & Update state of new dimensions
     */

    //
    // updateDimensions() {
    //     const tableContainer = document.getElementById(this.state.containerId);
    //     if (tableContainer) {
    //         if (tableContainer.clientWidth < 500) {
    //             this.setState({tableWidth: 450, tableHeight: 102});
    //         } else {
    //
    //             let update_width = tableContainer.clientWidth - 250;
    //             let update_height = Math.round(update_width / 2.4);
    //             this.setState({tableWidth: update_width, tableHeight: update_height});
    //
    //         }
    //     }
    // }

    /**
     * Add event listener
     */
    //
    //
    // componentDidMount() {
    //     this.updateDimensions();
    //     window.addEventListener("resize", this.updateDimensions.bind(this));
    // }
    //
    // componentWillReceiveProps(props) {
    //     this.updateDimensions();
    //     this.setState(props);
    // }

    /**
     * Remove event listener
     */


    componentWillUnmount() {
        // window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        return (
            <Table
                rowHeight={100}
                headerHeight={50}
                rowsCount={this.state.rowLength}
                width={this.state.tableWidth}
                height={this.state.tableHeight}
                {...this.state}
            >
                {this.props.children}
            </Table>
        );
    }
}

export {DataTable};