---
title: ActionNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ActionNode()                                                          | Create a new instance of this container type.                                                               |
| ActionNode(ActionNode other)                                          | Create a reference copy of an instance of the same type.                                                    |
| ActionNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [ActionNode](/vext/ref/fb/actionnode/).                            |
| ActionNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ActionNode](/vext/ref/fb/actionnode/). |

## Properties

| Name                 | Type                         | Description |
| -------------------- | ---------------------------- | ----------- |
| actionKey            | number                       |             |
| params               | string\[\]                   |             |
| actionAsset          | [Asset](/vext/ref/fb/asset/)               |             |
| inValue              | [UINodePort](/vext/ref/fb/uinodeport/)     |             |
| out                  | [UINodePort](/vext/ref/fb/uinodeport/)     |             |
| dataInputs           | [UINodePort](/vext/ref/fb/uinodeport/)\[\] |             |
| appendIncomingParams | bool                         |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [ActionNode](/vext/ref/fb/actionnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ActionNode](/vext/ref/fb/actionnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
