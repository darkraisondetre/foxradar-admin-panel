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

export default function Servers() {
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
          title="Servers"
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
  { id: 'email', label: 'Email', disablePadding: false, numeric: false },
  { id: 'created', label: 'Created', disablePadding: false, numeric: false },
  { id: 'timeLeft', label: 'Time Left', disablePadding: false, numeric: false },
  { id: 'expaired', label: 'Expaired', disablePadding: false, numeric: false },
  { id: 'ip', label: 'IP', disablePadding: false, numeric: false },
  { id: 'server', label: 'Server', disablePadding: false, numeric: false },
  { id: 'trafficUsed', label: 'Traffic Used', disablePadding: false, numeric: false },
  { id: 'status', label: 'Status', disablePadding: false, numeric: false },
]

function createTableData(id, email, created, timeLeft, expaired, ip, server, trafficUsed, status) {
  return { id, email, created, timeLeft, expaired, ip, server, trafficUsed, status };
}

const tableRows = [
  createTableData(0, 'john@gmail.com', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "Offline", "US - New York - 1", "0 GB", "Enabled"),
  createTableData(1, 'john@gmail.com', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "222.222.222.222", "Disconnected", "0 GB", "Disabled"),
  createTableData(2, 'john@gmail.com', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "222.222.222.222", "US - New York - 1", "0 GB", "Disabled"),
  createTableData(3, 'john@gmail.com', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "222.222.222.222", "US - New York - 1", "0 GB", "Enabled"),
  createTableData(4, 'john@gmail.com', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "Offline", "Disconnected", "0 GB", "Enabled"),
  createTableData(5, 'john@gmail.com', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "222.222.222.222", "Disconnected", "0 GB", "Enabled"),
  createTableData(6, 'john@gmail.com', "2020/9/20 8:23", "Never", "2020/9/20 8:23", "222.222.222.222", "US - New York - 1", "0 GB", "Disabled"),
  createTableData(7, 'john@gmail.com', "2020/9/20 8:23", "Never", "2020/9/20 8:23", "222.222.222.222", "US - New York - 1", "0 GB", "Enabled"),
  createTableData(8, 'john@gmail.com', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "222.222.222.222", "US - New York - 1", "0 GB", "Disabled"),
  createTableData(9, 'john@gmail.com', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "222.222.222.222", "US - New York - 1", "0 GB", "Enabled"),
  createTableData(10, 'john@gmail.com', "2020/9/20 8:23", "Never", "2020/9/20 8:23", "222.222.222.222", "US - New York - 1", "0 GB", "Enabled"),
  createTableData(11, 'john@gmail.com', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "222.222.222.222", "US - New York - 1", "0 GB", "Enabled"),
  createTableData(12, 'john@gmail.com', "2020/9/20 8:23", "10d/10h/10m", "2020/9/20 8:23", "222.222.222.222", "US - New York - 1", "0 GB", "Enabled"),
];