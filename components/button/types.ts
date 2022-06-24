import { Colors, Sizes } from "../../utils/types"

export type ButtonColor = typeof Colors[number]

export type ButtonSize = typeof Sizes[number]


const Types = ['link', 'button'] as const;
export type ButtonType = typeof Types[number];

const Shapes = ['circle', 'square'] as const;
export type ButtonShape = typeof Shapes[number];