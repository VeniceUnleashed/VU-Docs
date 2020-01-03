---
title: StateNode
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| StateNode()                                                          | Create a new instance of this container type.                                                             |
| StateNode(StateNode other)                                           | Create a reference copy of an instance of the same type.                                                  |
| StateNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [StateNode](StateNode).                            |
| StateNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StateNode](StateNode). |

## Properties

| Name            | Type                           | Description |
| --------------- | ------------------------------ | ----------- |
| screen          | [UIScreenAsset](UIScreenAsset) |             |
| inValue         | [UINodePort](UINodePort)       |             |
| show            | [UINodePort](UINodePort)       |             |
| hide            | [UINodePort](UINodePort)       |             |
| inputs          | [UINodePort](UINodePort)\[\]   |             |
| outputs         | [UINodePort](UINodePort)\[\]   |             |
| renderToTexture | bool                           |             |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [StateNode](StateNode) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StateNode](StateNode) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
