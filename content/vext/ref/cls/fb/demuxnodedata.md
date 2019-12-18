---
title: DeMuxNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| DeMuxNodeData()                                                          | Create a new instance of this container type.                                                                     |
| DeMuxNodeData(DeMuxNodeData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| DeMuxNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [DeMuxNodeData](DeMuxNodeData).            |
| DeMuxNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DeMuxNodeData](DeMuxNodeData). |

## Properties

| Name      | Type                                     | Description |
| --------- | ---------------------------------------- | ----------- |
| outputs   | [DeMuxOutput](DeMuxOutput)\[\]           |             |
| trigger   | [AudioGraphNodePort](AudioGraphNodePort) |             |
| value     | [AudioGraphNodePort](AudioGraphNodePort) |             |
| wrapValue | bool                                     |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [DeMuxNodeData](DeMuxNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DeMuxNodeData](DeMuxNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
