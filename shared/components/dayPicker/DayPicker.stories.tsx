import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { DayPickerProps } from '@/shared/components/dayPicker/DayPicker'

import s from './DayPicker.module.scss'

import { DayPicker } from './'

const meta = {
  argTypes: {},
  component: DayPicker,
  tags: ['autodocs'],
  title: 'Components/dayPicker',
} satisfies Meta<typeof DayPicker>

export default meta
type Story = StoryObj<typeof meta>

const renderDayPicker = (errorText?: string, label?: string) => (args: DayPickerProps) => {
  const [selected, setSelected] = useState<string>('')

  return (
    <div className={s.inputSingleContainer}>
      <DayPicker
        errorText={errorText}
        label={label}
        setSelected={setSelected}
        selected={selected}
      />
    </div>
  )
}

const commonArgs = {
  setSelected: (selected: string) => {},
  selected: '',
}

export const DayPickerSingle: Story = {
  args: commonArgs,
  render: renderDayPicker(),
}

export const DayPickerCustomError: Story = {
  args: commonArgs,
  render: renderDayPicker('A user under 13 cannot create a profile. Privacy Policy'),
}

export const DayPickerWithLabel: Story = {
  args: commonArgs,
  render: renderDayPicker('', 'Date select'),
}
