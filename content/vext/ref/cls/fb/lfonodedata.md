---
title: LfoNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| LfoNodeData()                                                          | Create a new instance of this container type.                                                                 |
| LfoNodeData(LfoNodeData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| LfoNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [LfoNodeData](LfoNodeData).            |
| LfoNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LfoNodeData](LfoNodeData). |

## Properties

| Name               | Type                                     | Description |
| ------------------ | ---------------------------------------- | ----------- |
| hz                 | [AudioGraphNodePort](AudioGraphNodePort) |             |
| amplitude          | [AudioGraphNodePort](AudioGraphNodePort) |             |
| out                | [AudioGraphNodePort](AudioGraphNodePort) |             |
| min                | number                                   |             |
| max                | number                                   |             |
| startAtRandomValue | bool                                     |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [LfoNodeData](LfoNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LfoNodeData](LfoNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
