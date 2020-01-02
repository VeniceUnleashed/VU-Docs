---
title: MinMaxNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| MinMaxNodeData()                                                          | Create a new instance of this container type.                                                                       |
| MinMaxNodeData(MinMaxNodeData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| MinMaxNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [MinMaxNodeData](MinMaxNodeData).            |
| MinMaxNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MinMaxNodeData](MinMaxNodeData). |

## Properties

| Name | Type                                     | Description |
| ---- | ---------------------------------------- | ----------- |
| x    | [AudioGraphNodePort](AudioGraphNodePort) |             |
| y    | [AudioGraphNodePort](AudioGraphNodePort) |             |
| max  | [AudioGraphNodePort](AudioGraphNodePort) |             |
| min  | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [MinMaxNodeData](MinMaxNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MinMaxNodeData](MinMaxNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
