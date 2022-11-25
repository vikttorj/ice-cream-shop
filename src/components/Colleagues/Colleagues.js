import React, { Component } from "react";

import Panel from "../Panel/Panel";

import "./Colleagues.css";

const handleClickCollage = () => {
  let element = document.getElementById("customer-name");
  var rect = element.getBoundingClientRect();

  let elementMove = document.querySelector("tr.colleague");
  var rect2 = elementMove.getBoundingClientRect();

  const newspaperSpinning = [
    {
      transform: "scale(1)",
      background: "pink",
      position: "absolute",
      top: rect2.top + "px",
      left: rect2.left + "px",
      opacity: 1,
    },
    {
      transform: "scale(0.3)",
      position: "absolute",
      top: rect.top + "px",
      left: rect.left + "px",
      opcaity: 0,
    },
  ];

  const newspaperTiming = {
    duration: 400,
    iterations: 1,
  };
  setTimeout(() => {
    elementMove.animate(newspaperSpinning, newspaperTiming);
  }, 200);
  setTimeout(() => {
    // SET STORE
    console.log('set store college')
  }, 600);
};

const Colleague = ({ photo, name, status }) => (
  <tr className='colleague' onClick={handleClickCollage}>
    <td>
      <img className='colleague__photo' src={photo} alt={name} />
    </td>
    <td className='colleague__info'>
      <div className='colleague__name'>{name}</div>
      <div className='colleague__status'>{status}</div>
    </td>
  </tr>
);

class Colleagues extends Component {
  render() {
    return (
      <Panel title='Colleagues'>
        <table className='colleagues-table'>
          <colgroup>
            <col width='0' />
            <col width='100%' />
          </colgroup>
          <tbody>
            <Colleague
              photo='https://randomuser.me/api/portraits/women/36.jpg'
              name='Victoria'
              status='Checked in'
            />
          </tbody>
        </table>
      </Panel>
    );
  }
}

export default Colleagues;
