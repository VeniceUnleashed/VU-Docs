---
title: UINodeConnection (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| UINodeConnection()                                                          | Create a new instance of this container type.                                                                           |
| UINodeConnection(UINodeConnection other)                                    | Create a reference copy of an instance of the same type.                                                                |
| UINodeConnection([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UINodeConnection](UINodeConnection). |

## Properties

| Name            | Type                     | Description |
| --------------- | ------------------------ | ----------- |
| sourceNode      | [UINodeData](UINodeData) |             |
| targetNode      | [UINodeData](UINodeData) |             |
| sourcePort      | [UINodePort](UINodePort) |             |
| targetPort      | [UINodePort](UINodePort) |             |
| numScreensToPop | number                   |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [UINodeConnection](UINodeConnection) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UINodeConnection](UINodeConnection) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
