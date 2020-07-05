import React from 'react';
import Button from '../components/button';
import ButtonAction from '../components/buttonAction';
import NameForm from '../components/NameForm'
import { faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

export default function Main() {
    return(
        <div className="main">
            <div className="title">FOXRADIO</div>
            <Button title="Create New User" className="button button_green br-3"/>
            <Button title="Enable" className="button button_transparent border_green br-10"/>
            <Button title="1" className="button button_transparent border_green br-3"/>
            <Button title="«" className="button button_transparent border_green br-3"/>
            <ButtonAction title="Bulk Actions " icon={faChevronDown} className="button button_blue br-3"/>
            <Button title="Set Trial Period" className="button button_orange br-3" />
            <Button lclassName="button button_orange br-3" icon={faEllipsisH} />
            <NameForm label="Search: "/>
        </ div>
    );
}
