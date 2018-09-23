import React from 'react';
import { selectV2 as select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SwipeToRevealList from '../src/components/SwipeToRevealList';
// import '../src/css/style.css';
import '../src/css/swipe-to-reveal-options.css';





const component = () => {

  var items = [
    {
      leftOptions: [{
        label: 'Trash',
        class: 'trash'
      }],
      rightOptions: [{
        label: 'Move',
        class: 'move',
      },{
        label: 'Archive',
        class: 'archive',
      }],
      content: "Mail from Mathieu",
      callActionWhenSwipingFarLeft: true,
      callActionWhenSwipingFarRight: true
    },
    {
      leftOptions: [{
        label: 'Trash',
        class: 'trash'
      }],
      rightOptions: [{
        label: 'Move',
        class: 'move',
      },{
        label: 'Archive',
        class: 'archive',
      }],
      content: "Mail from Arseny",
      callActionWhenSwipingFarRight: true,
      callActionWhenSwipingFarLeft: false
    },
    {
      leftOptions: [{
        label: 'Trash',
        class: 'trash'
      }],
      rightOptions: [{
        label: 'Move',
        class: 'move',
      },{
        label: 'Archive',
        class: 'archive',
      }],
      content: "Mail from Bruno",
      callActionWhenSwipingFarRight: false,
      callActionWhenSwipingFarLeft: false
    }
  ];
      return (
        <div>
            

        <SwipeToRevealList items={items}/>
        </div>
);}

export default component;
