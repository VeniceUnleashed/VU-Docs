---
title: WidgetNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| WidgetNode()                                                          | Create a new instance of this container type.                                                               |
| WidgetNode(WidgetNode other)                                          | Create a reference copy of an instance of the same type.                                                    |
| WidgetNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [WidgetNode](/vext/ref/fb/widgetnode/).                            |
| WidgetNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WidgetNode](/vext/ref/fb/widgetnode/). |

## Properties

| Name             | Type                                                   | Description |
| ---------------- | ------------------------------------------------------ | ----------- |
| widgetAsset      | [UIWidgetAsset](/vext/ref/fb/uiwidgetasset/)                         |             |
| focusIndex       | number                                                 |             |
| zDepthLevel      | number                                                 |             |
| verticalAlign    | [WidgetVerticalAlignment](/vext/ref/fb/widgetverticalalignment/)     |             |
| horisontalAlign  | [WidgetHorisontalAlignment](/vext/ref/fb/widgethorisontalalignment/) |             |
| dataBinding      | [UIDataBinding](/vext/ref/fb/uidatabinding/)                         |             |
| widgetProperties | [UIWidgetProperty](/vext/ref/fb/uiwidgetproperty/)\[\]               |             |
| instanceName     | string                                                 |             |
| inputs           | [UINodePort](/vext/ref/fb/uinodeport/)\[\]                           |             |
| outputs          | [UINodePort](/vext/ref/fb/uinodeport/)\[\]                           |             |
| alwaysInFocus    | bool                                                   |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [WidgetNode](/vext/ref/fb/widgetnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WidgetNode](/vext/ref/fb/widgetnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
