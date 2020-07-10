import React from 'react';
import Button from '../components/button';
import SelectButton from '../components/select';
import Input from '../components/input'
import Radio from '../components/radio';
import Stat from '../components/stat';
import Block from '../components/block';
import CustomTable from '../components/table';

import { faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default function Main() {
  return (
    <div className="main-page">
      <Button title="Create New User" className="button_green" />
      <Button title="Enable" className="button_darkGreen button_transparent br-1" />
      <Button title="«" className="button_darkGreen button_transparent disabled" />
      <SelectButton title="Bulk Actions " list={listItems} size="9" value="0" icon={faChevronDown} className="button_blue" />
      <Button title="Set Trial Period" className="button_orange" />
      <Button className="button_red" icon={faEllipsisH} />
      <Input label="Search: " placeholder="Click to Find" />
      <SelectButton list={listItemsOther} size="5" value="0" icon={faEllipsisH} className="button_darkGreen" />
      <Radio list={radioItems} title="Enable" value="0" />
      <Stat title="Registered Users" text="0" />
      <Stat title="Total Traffic Used" text="5 GB" />
      <div className="row">
        <div className="row__title">Users</div>
        <Radio list={radioItems} title="Enable" value="0" />
        <Button title="Apply" className="button_blue" />
      </div>
      <Block
        title="Users"
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

      <Block title="Adjust Time for john@gmail.com" className="block__title_small block_grey">
        <div className="row row_column row_bBorder">
          <div className="row__title row__title_small">Deposit</div>
          <div className="row row_between">
            <Input label="days" className="label_right small" />
            <Input label="hours" className="label_right small" />
            <Input label="minutes" className="label_right small" />
            <Button title="Apply" className="button_blue" />
          </div>
        </div>
        <div className="row row_column row_bBorder">
          <div className="row__title row__title_small">Reduce</div>
          <div className="row row_between">
            <Input label="days" className="label_right small" />
            <Input label="hours" className="label_right small" />
            <Input label="minutes" className="label_right small" />
            <Button title="Apply" className="button_blue" />
          </div>
        </div>
        <div className="row row_column">
          <div className="row__title row__title_small">Countdown</div>
          <div className="row row_between">
            <Radio list={radioItems2} title="Enable" value="0" />
            <Button title="Apply" className="button_blue" />
          </div>
        </div>
      </Block>

      <Block title="Create New User" className="block__title_small block_grey">
        <Input label="Email" className="label_top label_big" />
        <Input label="Password" className="label_top label_big" />
        <Input label="Repeat Password" className="label_top label_big" />
        <div className="row row_column">
          <div className="row__title row__title_small">Time Left</div>
          <div className="row row_between">
            <Input label="days" className="label_right small" />
            <Input label="hours" className="label_right small" />
            <Input label="minutes" className="label_right small" />
          </div>
        </div>
        <div className="row row_column">
          <div className="row__title row__title_small">Countdown</div>
          <div className="row row_between">
            <Radio list={radioItems2} title="Enable" value="0" />
          </div>
        </div>
        <div className="row row_column">
          <div className="row__title row__title_small">Status</div>
          <div className="row row_between">
            <Radio list={radioItems2} title="Enable" value="0" />
          </div>
        </div>
        <div className="row">
          <Button title="Create" className="button_blue center" />
        </div>
      </Block>

      <Block title="Set Trial Period" className="block__title_small block_grey">
        <div className="row row_between row_bBorder">
          <div className="row__title row__title_small row__title_fwNone">Current Trial Period</div>
          <div>0 days 4 hours 0 minutes</div>
        </div>
        <div className="row row_column row_bBorder">
          <div className="row__title row__title_small row__title_fwNone">New Trial Period</div>
          <div className="row row_between">
            <Input label="days" className="label_right small" />
            <Input label="hours" className="label_right small" />
            <Input label="minutes" className="label_right small" />
            <Button title="Apply" className="button_blue" />
          </div>
        </div>
      </Block>
    </ div>
  );
}

const radioItems = [
  { title: 'Enabled' },
  { title: 'Disabled' },
  { title: 'Deleted' }
]
const radioItems2 = [
  { title: 'Counting' },
  { title: 'Pause' },
]

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