---
title: MinMaxNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| MinMaxNodeData()                                                          | Create a new instance of this container type.                                                                       |
| MinMaxNodeData(MinMaxNodeData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| MinMaxNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [MinMaxNodeData](/vext/ref/fb/minmaxnodedata/).            |
| MinMaxNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MinMaxNodeData](/vext/ref/fb/minmaxnodedata/). |

## Properties

| Name | Type                                     | Description |
| ---- | ---------------------------------------- | ----------- |
| x    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| y    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| max  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| min  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [MinMaxNodeData](/vext/ref/fb/minmaxnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MinMaxNodeData](/vext/ref/fb/minmaxnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
