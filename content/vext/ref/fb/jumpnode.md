---
title: JumpNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                         | Description                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| JumpNode()                                                          | Create a new instance of this container type.                                                           |
| JumpNode(JumpNode other)                                            | Create a reference copy of an instance of the same type.                                                |
| JumpNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [JumpNode](/vext/ref/fb/jumpnode/).                            |
| JumpNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [JumpNode](/vext/ref/fb/jumpnode/). |

## Properties

| Name       | Type                     | Description |
| ---------- | ------------------------ | ----------- |
| inValue    | [UINodePort](/vext/ref/fb/uinodeport/) |             |
| targetNode | [UINodeData](/vext/ref/fb/uinodedata/) |             |
| targetPort | [UINodePort](/vext/ref/fb/uinodeport/) |             |

## Methods

| Type                 | Name            | Parameters                                     |
| -------------------- | --------------- | ---------------------------------------------- |
| [JumpNode](/vext/ref/fb/jumpnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [JumpNode](/vext/ref/fb/jumpnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
