import React from 'react';
import Button from '../components/button';
import SelectButton from '../components/select';
import Input from '../components/input'
import Radio from '../components/radio';
import Stat from '../components/stat';
import Row from '../components/row';
import Block from '../components/block';
import CustomTable from '../components/table';
import MyCustomTable from '../components/tableCustom';
import { faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default function Main() {
  return (
    <div className="main-page">
      <Button title="Create New User" className="button_green" />
      <Button title="Enable" className="button_transparent border_darkGreen br-1" />
      <Button title="1" className="button_transparent border_darkGreen" />
      <Button title="«" className="button_transparent border_darkGreen disabled" />
      <SelectButton title="Bulk Actions " list={listItems} size="9" value="0" icon={faChevronDown} className="button_blue" />
      <Button title="Set Trial Period" className="button_orange" />
      <Button className="button_red" icon={faEllipsisH} />
      <Input label="Search: " placeholder="Click to Find" />
      <Input label="Name " className="label_right" />
      <SelectButton list={listItemsOther} size="5" value="0" icon={faEllipsisH} className="button_darkGreen" />
      <Radio list={radioItems} title="Enable" value="0" />
      <Stat title="Registered Users" text="0" />
      <Stat title="Total Traffic Used" text="5 GB" />
      <Row title="Users">
        <Radio list={radioItems} title="Enable" value="0" />
        <Button title="Apply" className="button_blue" />
      </Row>
      <Block
        title="Servers"
        blockTitle={
          <>
            <SelectButton 
            title="Bulk Actions " 
            list={listItems} 
            size="9" 
            icon={faChevronDown}
            className="button_blue" />
            <Button title="Create New User" className="button_green" />
            <Button title="Set Trial Period" className="button_orange" />
          </>
        }
        blockMain={
          <CustomTable />
        } />
        <MyCustomTable list={tableRows} thLabel={tableHead} />
    </ div>
  );
}

const radioItems = [
  { title: 'Enabled' },
  { title: 'Disabled' },
  { title: 'Deleted' }
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

function createTableData(id, email, created, timeLeft, expaired, ip, server, trafficUsed, status) {
  return { id, email, created, timeLeft, expaired, ip, server, trafficUsed, status };
}

const tableHead = [
  "ID",
  "Email",
  "Created",
  "Time Left",
  "Expaired",
  "IP",
  "Server",
  "Traffic Used",
  "Status",
]
  


const tableRows = [
  // { 
  //   idLabel: "ID",
  //   emailLabel: "Email",
  //   createdLabel: "Created",
  //   timeLabel: "Time Left",
  //   expairedLabel: "Expaired",
  //   ipLabel: "IP",
  //   serverLabel: "Server",
  //   trafficLabel: "Traffic Used",
  //   statusLabel: "Status",
  // },
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