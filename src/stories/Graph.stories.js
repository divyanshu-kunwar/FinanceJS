import React from 'react'
import {storiesOf} from '@storybook/react'

import { Graph } from '../components/Graph';

const stories = storiesOf('App test' , module);

stories.add('App' , ()=>{
    return ( < Graph />)
})