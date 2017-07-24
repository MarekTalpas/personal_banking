import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableFooter,
} from 'material-ui/Table';

import { fetchCandidates } from '../../actions/index';
import CandidatesHeaderRow from './children/candidates_header_row';
import store from '../store/store.json';
import CandidatesBodyRow from './children/candidates_body_row';
import CandidatesPagination from './children/candidates_pagination';
import './candidates_table.css';
// import * as actions from '../../actions/index';
import Modal from '../modal/modal';

const tableStyle = {
  width: 'calc(100% - 410px)',
  backgroundColor: '#FAFAFA',
};

class CandidateTable extends Component {
  componentWillMount() {
    this.props.fetchCandidates();
  }
  renderBodyRows() {
    return store.candidates.map(candidate =>
      <CandidatesBodyRow
        key={candidate.id}
        avatarUrl={candidate.data.avatar_url}
        firstName={candidate.data.firstName}
        lastName={candidate.data.lastName}
        position={candidate.data.position}
        phone={candidate.data.phone}
        email={candidate.data.email}
        status={candidate.interview.status}
      />
    );
  }
  render() {
    console.log('store: ', store);
    return (
      <MuiThemeProvider>
        <div>
          <Table
            fixedHeader={false}
            fixedFooter={false}
            style={tableStyle}
            className="candidates-table"
          >
            <TableHeader className="candidates-table__header">
              <CandidatesHeaderRow />
            </TableHeader>
            <TableBody className="candidates-table__body">
              {this.renderBodyRows()}
            </TableBody>
            <TableFooter
              className="candidates-table__footer"
              style={{ width: '500px' }}
            >
              <CandidatesPagination total={10} display={5} current={1} />
            </TableFooter>
          </Table>
          <Modal />
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapDispacthToProps(dispatch) {
  return bindActionCreators({ fetchCandidates }, dispatch);
}

export default connect(null, mapDispacthToProps)(CandidateTable);