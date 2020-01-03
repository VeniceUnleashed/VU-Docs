---
title: LinearTransformNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| LinearTransformNodeData()                                                          | Create a new instance of this container type.                                                                                         |
| LinearTransformNodeData(LinearTransformNodeData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| LinearTransformNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [LinearTransformNodeData](LinearTransformNodeData).            |
| LinearTransformNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LinearTransformNodeData](LinearTransformNodeData). |

## Properties

| Name | Type                                     | Description |
| ---- | ---------------------------------------- | ----------- |
| x    | [AudioGraphNodePort](AudioGraphNodePort) |             |
| k    | [AudioGraphNodePort](AudioGraphNodePort) |             |
| m    | [AudioGraphNodePort](AudioGraphNodePort) |             |
| y    | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [LinearTransformNodeData](LinearTransformNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LinearTransformNodeData](LinearTransformNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
