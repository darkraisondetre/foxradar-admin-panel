import React from 'react';
import PropTypes from 'prop-types';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Checkbox,
  TableSortLabel,
  Toolbar,
  Typography,
  Tooltip,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import { faTrash, faFilter, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectButton from './select';
import Input from './input';
import Button from './button';

const listOptions = [
  { id: 0, title: 'Details' },
  { id: 1, title: 'Adjust Time' },
  { id: 2, title: 'Disconnect' },
  { id: 3, title: 'Enable' },
  { id: 4, title: 'Delete' },
]

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headCells } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead id="table__head">
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className="hidden">
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell padding="none" />
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  headCells: PropTypes.array.isRequired
};

export default function EnhancedTable(props) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = props.rowCells.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <div id="tableRoot">
      <Paper id="tablePaper">

        <Toolbar id="toolbar">
          {selected.length > 0 ? (
            <Typography id="topography_title" color="inherit" variant="subtitle1" component="div">
              {selected.length} selected
            </Typography>
          ) : (
              <Typography variant="subtitle1" id="tableTitle" component="div">
                <div className="row">
                  Show <TablePagination
                    id="bottomTablePagination"
                    rowsPerPageOptions={[10, 15]}
                    component="div"
                    count={props.rowCells.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  /> entries
                </div>
              </Typography>
            )}
          <Tooltip title="Search">
            <Input label="Search:" />
          </Tooltip>
        </Toolbar>

        <TableContainer id="tableContainer" >
          <Table 
          id="table" 
          aria-labelledby="tableTitle" 
          size={window.innerWidth < 1800 ? "small" : "medium"} 
          aria-label="enhanced table">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={props.rowCells.length}
              headCells={props.headCells}
            />
            <TableBody id="table__body">
              {stableSort(props.rowCells, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, row.id)}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.id}
                      </TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.created}</TableCell>
                      <TableCell>{row.timeLeft}</TableCell>
                      <TableCell>{row.expaired}</TableCell>
                      <TableCell>{row.ip}</TableCell>
                      <TableCell>{row.server}</TableCell>
                      <TableCell>{row.trafficUsed}</TableCell>
                      {row.status === "Enabled"
                        ? (
                          <TableCell>
                            <Button title={row.status}
                              className="button_darkGreen button_table button_transparent br-1" />
                          </TableCell>
                        ) : (
                          <TableCell>
                            <Button title={row.status}
                              className="button_red button_table button_transparent br-1" />
                          </TableCell>
                        )}

                      <TableCell>
                        <SelectButton
                          className="button_text_darkGrey button_table"
                          list={listOptions}
                          size="5"
                          value="0"
                          icon={faEllipsisH} />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="row">
          <div className="paginationInfo">
            {`Showing ${props.rowCells.length === 0
              ? 0
              : page * rowsPerPage + 1}
              to
              ${props.rowCells.length !== -1
                ? Math.min(props.rowCells.length, (page + 1) * rowsPerPage)
                : (page + 1) * rowsPerPage}
               of ${props.rowCells.length} entries`}
          </div>
          <Pagination 
          count={Math.ceil(props.rowCells.length / rowsPerPage)}
          page={page + 1}
          onChange={handleChangePage}
          showFirstButton
          showLastButton
          variant="outlined"
          shape="rounded"
          color="primary"
          size={
            window.innerWidth < 1300 ? "small"
            : window.innerWidth < 1900 ? "medium"
            : "large"} />
        </div>
      </Paper>
    </div>
  );
}