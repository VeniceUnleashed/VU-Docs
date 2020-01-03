---
title: StateNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| StateNode()                                                          | Create a new instance of this container type.                                                             |
| StateNode(StateNode other)                                           | Create a reference copy of an instance of the same type.                                                  |
| StateNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [StateNode](/vext/ref/fb/statenode/).                            |
| StateNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StateNode](/vext/ref/fb/statenode/). |

## Properties

| Name            | Type                           | Description |
| --------------- | ------------------------------ | ----------- |
| screen          | [UIScreenAsset](/vext/ref/fb/uiscreenasset/) |             |
| inValue         | [UINodePort](/vext/ref/fb/uinodeport/)       |             |
| show            | [UINodePort](/vext/ref/fb/uinodeport/)       |             |
| hide            | [UINodePort](/vext/ref/fb/uinodeport/)       |             |
| inputs          | [UINodePort](/vext/ref/fb/uinodeport/)\[\]   |             |
| outputs         | [UINodePort](/vext/ref/fb/uinodeport/)\[\]   |             |
| renderToTexture | bool                           |             |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [StateNode](/vext/ref/fb/statenode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StateNode](/vext/ref/fb/statenode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
