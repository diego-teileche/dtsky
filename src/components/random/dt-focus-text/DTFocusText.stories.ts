import type { Meta, StoryObj } from "@storybook/react"
import { DTFocusText } from "./DTFocusText"

const meta = {
	title: "Random/DTFocusText",
	component: DTFocusText,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTFocusText>

export default meta
type Story = StoryObj<typeof meta>

export const FocusText: Story = {
	args: {
		text: "Diego",
	},
}
