---
title: MixerGraphData
---
### Base Classes

[AudioGraphData](AudioGraphData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| MixerGraphData()                                                          | Create a new instance of this container type.                                                                       |
| MixerGraphData(MixerGraphData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| MixerGraphData([AudioGraphData](AudioGraphData) other)                    | Upcast an instance of type [AudioGraphData](AudioGraphData) to [MixerGraphData](MixerGraphData).                    |
| MixerGraphData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerGraphData](MixerGraphData). |

## Properties

| Name            | Type                                                     | Description |
| --------------- | -------------------------------------------------------- | ----------- |
| inputs          | [AudioGraphParameter](AudioGraphParameter)\[\]           |             |
| accumulateModes | [MixerValueAccumulateMode](MixerValueAccumulateMode)\[\] |             |
| outputs         | [AudioGraphParameter](AudioGraphParameter)\[\]           |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [MixerGraphData](MixerGraphData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerGraphData](MixerGraphData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
