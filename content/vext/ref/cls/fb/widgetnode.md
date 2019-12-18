---
title: WidgetNode (Frostbite Container)
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| WidgetNode()                                                          | Create a new instance of this container type.                                                               |
| WidgetNode(WidgetNode other)                                          | Create a reference copy of an instance of the same type.                                                    |
| WidgetNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [WidgetNode](WidgetNode).                            |
| WidgetNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WidgetNode](WidgetNode). |

## Properties

| Name             | Type                                                   | Description |
| ---------------- | ------------------------------------------------------ | ----------- |
| widgetAsset      | [UIWidgetAsset](UIWidgetAsset)                         |             |
| focusIndex       | number                                                 |             |
| zDepthLevel      | number                                                 |             |
| verticalAlign    | [WidgetVerticalAlignment](WidgetVerticalAlignment)     |             |
| horisontalAlign  | [WidgetHorisontalAlignment](WidgetHorisontalAlignment) |             |
| dataBinding      | [UIDataBinding](UIDataBinding)                         |             |
| widgetProperties | [UIWidgetProperty](UIWidgetProperty)\[\]               |             |
| instanceName     | string                                                 |             |
| inputs           | [UINodePort](UINodePort)\[\]                           |             |
| outputs          | [UINodePort](UINodePort)\[\]                           |             |
| alwaysInFocus    | bool                                                   |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [WidgetNode](WidgetNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WidgetNode](WidgetNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
