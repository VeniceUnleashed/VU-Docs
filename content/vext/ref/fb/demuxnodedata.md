---
title: DeMuxNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| DeMuxNodeData()                                                          | Create a new instance of this container type.                                                                     |
| DeMuxNodeData(DeMuxNodeData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| DeMuxNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [DeMuxNodeData](/vext/ref/fb/demuxnodedata/).            |
| DeMuxNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DeMuxNodeData](/vext/ref/fb/demuxnodedata/). |

## Properties

| Name      | Type                                     | Description |
| --------- | ---------------------------------------- | ----------- |
| outputs   | [DeMuxOutput](/vext/ref/fb/demuxoutput/)\[\]           |             |
| trigger   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| value     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| wrapValue | bool                                     |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [DeMuxNodeData](/vext/ref/fb/demuxnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DeMuxNodeData](/vext/ref/fb/demuxnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
