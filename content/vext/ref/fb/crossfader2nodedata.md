---
title: Crossfader2NodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Crossfader2NodeData()                                                          | Create a new instance of this container type.                                                                                 |
| Crossfader2NodeData(Crossfader2NodeData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| Crossfader2NodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [Crossfader2NodeData](/vext/ref/fb/crossfader2nodedata/).            |
| Crossfader2NodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Crossfader2NodeData](/vext/ref/fb/crossfader2nodedata/). |

## Properties

| Name     | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| ctrl     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| ctrlOut1 | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| ctrlOut2 | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [Crossfader2NodeData](/vext/ref/fb/crossfader2nodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [Crossfader2NodeData](/vext/ref/fb/crossfader2nodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
