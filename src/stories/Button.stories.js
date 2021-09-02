import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select, text } from "@storybook/addon-knobs";

import Button from "../components/Button";
import StoryContainer from "./StoryContainer";

import AddIcon from "../icons/add.svg";

const getKnobs = () => ({
	size: select(
		"Size",
		{
			Medium: "medium",
			Large: "large",
		},
		"medium"
	),
	intent: select(
		"Intent",
		{
			Primary: "primary",
			Base: "base",
			Outline: "outline",
			Danger: "danger",
			Midnight: "midnight",
		},
		"primary"
	),
	disabled: boolean("Disabled", false),
	isLoading: boolean("Loading", false),
	children: text("Text", "Try me out"),
});

storiesOf("Button", module)
	.add("default", () => (
		<StoryContainer spacing>
			<Button {...getKnobs()} />
		</StoryContainer>
	))
	.add("with icon", () => (
		<StoryContainer spacing>
			<Button icon={AddIcon}>Icon</Button>
		</StoryContainer>
	))
	.add("with intent", () => (
		<StoryContainer spacing>
			<Button intent="primary">Primary</Button>
			<Button intent="base">None</Button>
			<Button intent="outline">Primary</Button>
			<Button intent="danger">Danger</Button>
			<Button intent="midnight">Midnight</Button>
			<Button icon={AddIcon} intent="primary">
				Primary
			</Button>
			<Button icon={AddIcon} intent="danger">
				Danger
			</Button>
			<Button icon={AddIcon} intent="midnight">
				Midnight
			</Button>
		</StoryContainer>
	));
