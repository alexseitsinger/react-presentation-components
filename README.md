# Presentation Components

Some presentation components to make building layouts easier.

## Installation

```bash
yarn add @alexseitsinger/react-presentation-components
```

## Oritentations

#### Column

An element which shares the parent element's width, but occupies 100% of the parent's height.

###### Props

Name                 | Description                                | Default | Required?
---                  | ---                                        | ---     | ---
isMaximized          | Should the column use 100% height?         | false   | no
isVerticallyCentered | Should the content be vertically centered? | false   | no
direction            | Flexbox direction for children to use.     | row     | no

#### Row

An element which shares the parent element's height, but occupies 100% of the parent's width.

###### Props

Name        | Description                                                      | Default | Required?
---         | ---                                                              | ---     | ---
direction   | The direction that children should use.                          | row     | no
isMaximized | Should the row fill 100% width?                                  | true    | no
spacing     | Space within the element.                                        | 0px     | no
ends        | Should the two contained elements grip the left and right sides? | false   | no

---

## Positions

All grips take the following props:

Name           | Description                                 | Default   | Required?
---            | ---                                         | ---       | ---
children       | Elements to render within                   | undefined | yes
containerStyle | Extra css to apply to the container element | undefined | no
isMaximized    | Maximize the primary direction              | undefined | no

#### GripBottom

Positions itself to the bottom edge of the parent element.

#### GripRight

Positions itself to the right edge of the parent element.

---

## Alignments

#### Center

Elements within are both vertically and horizontally centered.

#### Wrapper

A container width a `max-width: 1200px`, and `margin: 0 auto`.

#### VerticalAlign

Uses the flexbox model to vertically align children.

#### VerticallyCenter

Uses the inline-block model to vertically align children.

---

## Lists

All lists use the following props:

Name        | Description                                                                      | Default   | Required?
---         | ---                                                                              | ---       | ---
children    | The elements to render within list items                                         | undefined | if items, no, otherwise yes
spacing     | The padding to apply evenly between list items                                   | undefined | no
renderEach  | Invoked to render each list item with either children or items                   | undefined | if items, yes, else no
renderFirst | Invoked to render a list item before all others                                  | undefined | no
renderLast  | Invoked to render a list item after all others                                   | undefined | no
renderNone  | Invoked to render a list item when no items or children produced any output.     | undefined | no
listStyle   | Extra css to apply to the list element.                                          | undefined | no
itemStyle   | Extra css to apply to each list item element                                     | undefined | no
items       | An optional list of data objects to use with renderEach to render each list item | undefined | If items, yes, else no
isMaximized | Should the list height fill the parent element?                                  | false     | no

#### FlexList

A list of items that span across a single line using all available space.

#### InlineList

A list of items with equal width, that will continue to occupy space on current line, then continue onto the next.

#### VerticalList

A list of items, separated one per line, with each using 100% width of the parent element.

---

## Dividers

#### HorizontalDivider

Displays text in the center, with a pair of horizontal lines on the left and right side which run across the center of the remaining width equally.

###### Props

Name             | Description                                                                 | Default   | Required?
---              | ---                                                                         | ---       | ---
text             | The text to display between the two horizontal lines.                       | undefined | yes
textColor        | The color to display the text in.                                           | undefined | no
textSpacing      | The spacing to apply to the left and right of the text.                     | undefined | no
lineSize         | The height of each left and right line.                                     | 1px       | no
lineColor        | The color of each left and right line.                                      | black     | no
containerSpacing | Additional spacing to apply to the top and bottom of the container element. | undefined | no

#### HorizontalRule

A single horizontal line across the width of the parent element.

###### Props

Name  | Description               | Default | Required?
---   | ---                       | ---     | ---
color | The color of the line.    | black   | no
inset | Should the line be inset? | false   | no
size  | The height of the line.   | 1px     | no

#### RightRule

Renders text followed by a horizontal line across the center of the remaining width.

###### Props

Name       | Description                                | Default   | Required?
---        | ---                                        | ---       | ---
outerStyle | Extra css to apply to the outer container. | {}        | no
innerStyle | Extra css to apply to the inner container. | {}        | no
children   | Elements to render before the line.        | undefined | yes
ruleColor  | Color of the line.                         | black     | no
ruleSize   | The height of the line.                    | 1px no

#### VerticalBuffer

A DOM element, which allows for vertical spacing in multiple of the root font-size.

###### Props

Name | Description                        | Default | Required?
---  | ---                                | ---     | ---
size | The height of the vertical buffer. | 1rem    | no

---

## Misc

#### Menu

A container with button to toggle the menu's list item visibility.

###### Props

Name     | Description                                      | Default   | Required?
onClick  | Toggles the visibility of the menu's list items. | undefined | yes
children | The elements to render within the menu's list.   | undefined | yes

#### Box

An element with equal width and height.

###### Props

Name          | Description                                  | Default   | Required?
---           | ---                                          | ---       | ---
size          | The size(px) to use for the width and height | undefined | yes
children      | Elements to render                           | undefined | yes
isCentered    | Should the box be centered within its parent | undefined | no
containerSyle | Extra css to apply to the container element. | undefined | no
bodyStyle     | Extra css to apply to the body element.      | undefined | no

