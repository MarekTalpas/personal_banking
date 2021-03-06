// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaEdit from 'react-icons/lib/fa/edit';
import Avatar from 'material-ui/Avatar';
import './candidates_body_row.css';

type CandidateType = {
  firstName: string,
  lastName: string,
  position: string,
  phone: number,
  email: string,
  status: string,
}

const CandidatesRow = ({
  avatarUrl,
  firstName,
  lastName,
  position,
  phone,
  email,
  status,
  handleOpen,
  handleClick
}: CandidateType) =>
  <TableRow className="table-row">
    <TableRowColumn
      className="table-row__column"
      style={{ width: '10%', borderBottom: '1px solid #fafafa' }}
    >
      <Avatar
        className="table-row__avatar"
        src={avatarUrl}
        alt="avatar"
        size={60}
      />
    </TableRowColumn>
    <TableRowColumn
      className="table-row__column open-modal"
      style={{ width: '20%', height: '80px', fontSize: '1rem' }}
      onTouchTap={handleOpen}
    >
      <strong>{firstName} {lastName}</strong>
      <br />
      {position}
    </TableRowColumn>
    <TableRowColumn
      className="table-row__column"
      style={{ width: '20%', fontSize: '1rem' }}
    >
      {phone}
    </TableRowColumn>
    <TableRowColumn
      className="table-row__column"
      style={{ width: '25%', fontSize: '1rem' }}
    >
      {email}
    </TableRowColumn>
    <TableRowColumn
      className="table-row__column"
      style={{ width: '15%', fontSize: '1rem' }}
    >
      {status}
    </TableRowColumn>
    <TableRowColumn
      className="table-row__column"
      style={{ width: '10%', fontSize: '1rem' }}
    >
      <Link
        to='/newInterviews'
        onTouchTap={() => (handleClick('Edit Interview'))}
      >
        <FaEdit
          className="table-row__icon--edit" size={24} color="#616161"
        />
      </Link>
      <FaTrashO className="table-row__icon--trash" size={24} color="#616161" />
    </TableRowColumn>
  </TableRow>;

export default CandidatesRow;
