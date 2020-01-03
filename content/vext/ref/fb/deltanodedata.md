---
title: DeltaNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| DeltaNodeData()                                                          | Create a new instance of this container type.                                                                     |
| DeltaNodeData(DeltaNodeData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| DeltaNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [DeltaNodeData](/vext/ref/fb/deltanodedata/).            |
| DeltaNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DeltaNodeData](/vext/ref/fb/deltanodedata/). |

## Properties

| Name   | Type                         | Description |
| ------ | ---------------------------- | ----------- |
| deltas | [DeltaGroup](/vext/ref/fb/deltagroup/)\[\] |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [DeltaNodeData](/vext/ref/fb/deltanodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DeltaNodeData](/vext/ref/fb/deltanodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
