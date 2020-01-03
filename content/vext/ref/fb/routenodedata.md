---
title: RouteNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| RouteNodeData()                                                          | Create a new instance of this container type.                                                                     |
| RouteNodeData(RouteNodeData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| RouteNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [RouteNodeData](RouteNodeData).            |
| RouteNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RouteNodeData](RouteNodeData). |

## Properties

| Name    | Type                                     | Description |
| ------- | ---------------------------------------- | ----------- |
| inValue | [AudioGraphNodePort](AudioGraphNodePort) |             |
| routes  | [RouteEntry](RouteEntry)\[\]             |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [RouteNodeData](RouteNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RouteNodeData](RouteNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
