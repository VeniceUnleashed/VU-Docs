---
title: MixerGraphData
---
### Base Classes

[AudioGraphData](/vext/ref/fb/audiographdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| MixerGraphData()                                                          | Create a new instance of this container type.                                                                       |
| MixerGraphData(MixerGraphData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| MixerGraphData([AudioGraphData](/vext/ref/fb/audiographdata/) other)                    | Upcast an instance of type [AudioGraphData](/vext/ref/fb/audiographdata/) to [MixerGraphData](/vext/ref/fb/mixergraphdata/).                    |
| MixerGraphData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerGraphData](/vext/ref/fb/mixergraphdata/). |

## Properties

| Name            | Type                                                     | Description |
| --------------- | -------------------------------------------------------- | ----------- |
| inputs          | [AudioGraphParameter](/vext/ref/fb/audiographparameter/)\[\]           |             |
| accumulateModes | [MixerValueAccumulateMode](/vext/ref/fb/mixervalueaccumulatemode/)\[\] |             |
| outputs         | [AudioGraphParameter](/vext/ref/fb/audiographparameter/)\[\]           |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [MixerGraphData](/vext/ref/fb/mixergraphdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerGraphData](/vext/ref/fb/mixergraphdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
