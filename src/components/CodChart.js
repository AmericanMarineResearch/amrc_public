// CodChart.js
// Yuan Wang

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { Black, darkBlue, lightBlue, lightGreen, lightRed, White } from '../global/Colors.js'
import NavHeader from '../components/NavHeader.js'
import Footer from '../components/Footer.js'
import BackgroundImage from '../components/BackgroundImage.js'
import SectionHeader from '../components/SectionHeader.js'
import HLine from '../components/HLine.js'
import NavFooter from '../components/NavFooter.js'
import { Bounce, Zoom, Fade, Slide as SlideReveal} from 'react-reveal';
import NextSectionCue from '../components/NextSectionCue.js'
import HBar from '../components/HBar.js'

import { LineChart, 
  Line, 
  AreaChart, 
  ComposedChart,
  Area, 
  Brush, 
  Legend,
  BarChart, 
  Tooltip, 
  CartesianGrid,
  ResponsiveContainer,
  XAxis, 
  YAxis, 
  Bar } from 'recharts'

const __COD_SERIES__ = require('../data/codseries.json')


export default class CodChart extends Component {
  constructor(props) {
    super(props)
    this.sources = {
      abundance: <Area
                    key='abundance'
                    name="Abundance (millions)" 
                    type='monotone' 
                    dataKey='abundance' 
                    strokeWidth={1}
                    stroke={White(1)}
                    fillOpacity={0.3}
                    fill={White(1)} />, 
      recruits: <Area 
                  key='recruits'
                  name="Recruits, Age 2+ (millions)"
                  type='monotone' 
                  dataKey='recruits' 
                  strokeWidth={3}
                  stroke={lightGreen(1)}
                  fillOpacity={0.5}
                  fill={lightGreen(1)} />, 
      biomass: <Area 
                  key='biomass'
                  name="Spawning Stock Biomass (1000 t)"
                  type='monotone' 
                  dataKey='ssb' 
                  strokeWidth={3}
                  stroke={lightBlue(1)}
                  fillOpacity={0.5}
                  fill={lightBlue(1)} />, 
      landings: <Line 
                  key='landings'
                  yAxisId="right"
                  dot={false}
                  name="Landings (1000 metric tons)"
                  type='monotone' 
                  dataKey='landings' 
                  strokeWidth={3}
                  stroke={lightRed(1)}
                  fillOpacity={1}
                  fill={lightRed(1)} />
    }
  }

  render() {
    var sources = []
    for (var i = 0; i < this.props.keys.length; i++) {
      sources.push(this.sources[this.props.keys[i]])
    }

    return (

        <ResponsiveContainer 
          minWidth={'100%'}
          minHeight={this.props.minHeight}
          debounce={1}
          style={{margin: 0, padding: 0}}
          width="100%">
          <ComposedChart 
            data={this.props.data} 
            syncId={this.props.syncId}
                margin={{
                  top: 10, 
                  right: 30, 
                  left: 0, 
                  bottom: 0
                }}>
            <XAxis 
              stroke={White(0.8)}
              dataKey="year"
              strokeWidth={2}
            />
            <YAxis 
              yAxisId="left"
              stroke={White(0.8)}
              strokeWidth={2}
            />

            <YAxis 
              orientation="right"
              yAxisId="right"
              stroke={lightRed(1)}
              strokeWidth={2}
            />

            { sources }

            <YAxis 
              stroke={White(0.8)}
              strokeWidth={2}
            />
            <CartesianGrid 
              stroke={White(1)}
              strokeDasharray="3 3"
              strokeWidth={1}
            />
            <Tooltip
              stroke={White(1)}
              wrapperStyle={{ 
                alignItems: 'flex-start',
                textAlign: 'start',
                backgroundColor: White(0.1)
              }}
            />

            <Legend 
              stroke={White(1)}
              iconSize={20}
              style={{ color: White(1) }}
              margin={{bottom: 30}}
              verticalAlign="top" 
              height={36}/>
            <Brush 
              height={28}
              style={{margin: 10}}
              stroke={White(1)}
              fill={White(0.5)} />

            <Brush />
            />
          </ComposedChart>
        </ResponsiveContainer>
    )
  }
}

CodChart.defaultProps = {
  syncId: "sync",
  keys: ['abundance', 'biomass', 'recruits', 'landings'],
  data: __COD_SERIES__,
  minHeight: '50vh'
}
