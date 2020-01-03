---
title: MultiCrossfaderNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| MultiCrossfaderNodeData()                                                          | Create a new instance of this container type.                                                                                         |
| MultiCrossfaderNodeData(MultiCrossfaderNodeData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| MultiCrossfaderNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [MultiCrossfaderNodeData](/vext/ref/fb/multicrossfadernodedata/).            |
| MultiCrossfaderNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MultiCrossfaderNodeData](/vext/ref/fb/multicrossfadernodedata/). |

## Properties

| Name             | Type                                             | Description |
| ---------------- | ------------------------------------------------ | ----------- |
| crossfaderGroups | [MultiCrossfaderGroup](/vext/ref/fb/multicrossfadergroup/)\[\] |             |
| start            | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)         |             |
| stop             | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)         |             |
| control          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)         |             |
| lockControlValue | bool                                             |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MultiCrossfaderNodeData](/vext/ref/fb/multicrossfadernodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MultiCrossfaderNodeData](/vext/ref/fb/multicrossfadernodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
