import React from 'react'

import {removeFlattie, updateEmail} from '../actions'

const SettingItems = (props) => {
  return (
    <tr>
      <td>{ props.users.name }</td>
      <td>{ props.users.email }</td>
      <td>
        <input type="text" id={props.id} placeholder="New Email"></input>
        <button onClick={() => (updateEmail(props.id, document.getElementById(props.id).value))}>Update</button>
      </td>
      <td><button onClick={() => (removeFlattie(props.users.email))}>Remove Flattie</button></td>
    </tr>
  )
}

export default SettingItems