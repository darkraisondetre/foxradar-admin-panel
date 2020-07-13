import React from 'react';
import Button from '../components/button';
import SelectButton from '../components/select';
import Input from '../components/input'
import Radio from '../components/radio';
import Stat from '../components/stat';
import Block from '../components/block';
import CustomTable from '../components/table';
import Sidebar from '../components/sidebar';

import { faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default function Keys() {
  return (
    <div className="main-page">
      <div className="main-page__sidebar"><Sidebar /></div>
      <div className="main-page__content">
        <div className="row row_between">
          <Stat title="Registered Users" text="0" />
          <Stat title="Logined Users" text="0" />
          <Stat title="Connected Users" text="0" />
          <Stat title="Expired Users" text="0" />
          <Stat title="Disabled Users" text="0" />
          <Stat title="Total Traffic Used" text="0 GB" />
        </div>
        <Block
          title="Keys"
          className="block__main_p0"
          blockTools={
            <div className="row">
              <SelectButton
                title="Bulk Actions "
                list={listItems}
                size="9"
                icon={faChevronDown}
                className="button_blue" />
              <Button title="Create New User" className="button_green" />
              <Button title="Set Trial Period" className="button_orange" />
            </div>
          }>
          <div className="row">
            <CustomTable headCells={tableHead} rowCells={tableRows} />
          </div>
        </Block >
      </div>
    </ div>
  );
}

const listItems = [
  { id: 0, title: 'Adjust Time for All' },
  { id: 1, title: 'Disconnect All Users for All' },
  { id: 2, title: 'Disable All' },
  { id: 3, title: 'Enable All', devider: 1 },
  { id: 4, title: 'Adjust Time for Selected' },
  { id: 5, title: 'Disconnect Selected' },
  { id: 6, title: 'Disable Selected' },
  { id: 7, title: 'Enable Selected' },
  { id: 8, title: 'Delete Selected' },
]

const listItemsOther = [
  { id: 0, title: 'Details' },
  { id: 1, title: 'Adjust Time' },
  { id: 2, title: 'Disconnect' },
  { id: 3, title: 'Enable' },
  { id: 4, title: 'Delete' },
]

const tableHead = [
  { id: 'id', label: 'ID', disablePadding: true, numeric: false },
  { id: 'key', label: 'Email', disablePadding: false, numeric: false },
  { id: 'generated', label: 'Generated', disablePadding: false, numeric: false },
  { id: 'timeContained', label: 'Time Contained', disablePadding: false, numeric: false },
  { id: 'usedDate', label: 'Used Date', disablePadding: false, numeric: false },
  { id: 'usedBy', label: 'Used By', disablePadding: false, numeric: false },
  { id: 'status', label: 'Status', disablePadding: false, numeric: false },
]

function createTableData(id, key, generated, timeContained, usedDate, status) {
  return { id, key, generated, timeContained, usedDate, status };
}

const tableRows = [
  createTableData(0, '10D10H10MKH2J9PC32T6T44D4', "2020/9/20 8:23", "10d/10h/10m", "", "", "Unused"),
  createTableData(1, '10D10H10MKH2J9PC32T6T44D4', "2020/9/20 8:23", "10d/10h/10m", "", "", "Unused"),
  createTableData(2, '10D10H10MKH2J9PC32T6T44D4', "2020/9/20 8:23", "10d/10h/10m", "", "", "Unused"),
  createTableData(3, '10D10H10MKH2J9PC32T6T44D4', "2020/9/20 8:23", "10d/10h/10m", "", "", "Unused"),
  createTableData(4, '10D10H10MKH2J9PC32T6T44D4', "2020/9/20 8:23", "10d/10h/10m", "", "", "Unused"),
  createTableData(5, '10D10H10MKH2J9PC32T6T44D4', "2020/9/20 8:23", "10d/10h/10m", "", "", "Unused"),
  createTableData(6, '10D10H10MKH2J9PC32T6T44D4', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "john@gmail.com", "Unused"),
  createTableData(7, '10D10H10MKH2J9PC32T6T44D4', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "john@gmail.com", "Unused"),
  createTableData(8, '10D10H10MKH2J9PC32T6T44D4', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "john@gmail.com", "Used"),
  createTableData(9, '10D10H10MKH2J9PC32T6T44D4', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "john@gmail.com", "Used"),
  createTableData(10, '10D10H10MKH2J9PC32T6T44D4', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "john@gmail.com", "Used"),
  createTableData(11, '10D10H10MKH2J9PC32T6T44D4', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "john@gmail.com", "Used"),
];