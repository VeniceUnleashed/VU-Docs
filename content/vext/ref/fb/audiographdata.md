---
title: AudioGraphData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| AudioGraphData()                                                          | Create a new instance of this container type.                                                                       |
| AudioGraphData(AudioGraphData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| AudioGraphData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AudioGraphData](/vext/ref/fb/audiographdata/). |

## Properties

| Name                  | Type                                                     | Description |
| --------------------- | -------------------------------------------------------- | ----------- |
| nodes                 | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)\[\]             |             |
| publicParameters      | [AudioGraphParameter](/vext/ref/fb/audiographparameter/)\[\]           |             |
| publicEvents          | [AudioGraphEvent](/vext/ref/fb/audiographevent/)\[\]                   |             |
| publicAssetParameters | [AudioGraphAssetParameter](/vext/ref/fb/audiographassetparameter/)\[\] |             |
| publicValueCount      | number                                                   |             |
| valueCount            | number                                                   |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [AudioGraphData](/vext/ref/fb/audiographdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AudioGraphData](/vext/ref/fb/audiographdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
