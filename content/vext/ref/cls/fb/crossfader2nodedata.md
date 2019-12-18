---
title: Crossfader2NodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Crossfader2NodeData()                                                          | Create a new instance of this container type.                                                                                 |
| Crossfader2NodeData(Crossfader2NodeData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| Crossfader2NodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [Crossfader2NodeData](Crossfader2NodeData).            |
| Crossfader2NodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [Crossfader2NodeData](Crossfader2NodeData). |

## Properties

| Name     | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| ctrl     | [AudioGraphNodePort](AudioGraphNodePort) |             |
| ctrlOut1 | [AudioGraphNodePort](AudioGraphNodePort) |             |
| ctrlOut2 | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [Crossfader2NodeData](Crossfader2NodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [Crossfader2NodeData](Crossfader2NodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
