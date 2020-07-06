import React from 'react';
import Button from '../components/button';
import ButtonAction from '../components/buttonAction';
import NameForm from '../components/NameForm'
import { faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

export default function Main() {
    return(
        <div className="main-page">
            <Button title="Create New User" className="button_green"/>
            <Button title="Enable" className="button_transparent border_green br-1"/>
            <Button title="1" className="button_transparent border_green p_pagination"/>
            <Button title="«" className="button_transparent border_green p_pagination disabled"/>
            <ButtonAction title="Bulk Actions " icon={ faChevronDown} className="button_blue"/>
            <Button title="Set Trial Period" className="button_orange" />
            <Button className="button_orange" icon={faEllipsisH} />
            <NameForm label="Search: "/>
        </ div>
    );
}
