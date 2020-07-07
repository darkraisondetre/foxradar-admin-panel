import React from 'react';
import Button from '../components/button';
import SelectButton from '../components/select';
import Input from '../components/input'
import { faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

export default function Main() {
  return (
    <div className="main-page">
      <Button title="Create New User" className="button_green" />
      <Button title="Enable" className="button_transparent border_darkGreen br-1" />
      <Button title="1" className="button_transparent border_darkGreen" />
      <Button title="«" className="button_transparent border_darkGreen disabled" />
      <SelectButton title="Bulk Actions " listItems={listItems} size="9" icon={faChevronDown} className="button_blue" />
      <Button title="Set Trial Period" className="button_orange" />
      <Button className="button_red" icon={faEllipsisH} />
      <Input label="Search: " placeholder="Click to Find" />
      <Input label="Name " placeholder="Name" className="label_right" />
      <SelectButton listItems={listItemsOther} size="5" icon={faEllipsisH} className="button_darkGreen" />
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