---
title: DialogNode
---
### Base Classes

[StateNode](/vext/ref/fb/statenode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| DialogNode()                                                          | Create a new instance of this container type.                                                               |
| DialogNode(DialogNode other)                                          | Create a reference copy of an instance of the same type.                                                    |
| DialogNode([StateNode](/vext/ref/fb/statenode/) other)                              | Upcast an instance of type [StateNode](/vext/ref/fb/statenode/) to [DialogNode](/vext/ref/fb/dialognode/).                              |
| DialogNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [DialogNode](/vext/ref/fb/dialognode/).                            |
| DialogNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DialogNode](/vext/ref/fb/dialognode/). |

## Properties

| Name        | Type                               | Description |
| ----------- | ---------------------------------- | ----------- |
| dialogTitle | string                             |             |
| dialogText  | string                             |             |
| buttons     | [UIPopupButton](/vext/ref/fb/uipopupbutton/)\[\] |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [DialogNode](/vext/ref/fb/dialognode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DialogNode](/vext/ref/fb/dialognode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
