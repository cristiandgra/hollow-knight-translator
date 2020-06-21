import React, { Component } from 'react'

import Flag from './flag'

export default class Flags extends Component {
  render() {
    const { onSelect } = this.props
    const langs = [
      'JP',
      'FR',
      'RU',
      'PT',
      'SC',
      'ES',
      'KO',
      'IT',
      'JA',
      'DE',
      'EN',
      'BP',
      'ZH',
    ]
    langs.sort()
    return (
      <div className="flex flex-row flex-wrap w-full justify-start flex-wrap py-2">
        {langs.map(k => (
          <Flag key={k} value={k} onSelect={onSelect} />
        ))}
      </div>
    )
  }
}
