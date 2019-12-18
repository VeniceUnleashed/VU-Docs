---
title: SoundGraphData (Frostbite Container)
---
### Base Classes

[AudioGraphData](AudioGraphData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SoundGraphData()                                                          | Create a new instance of this container type.                                                                       |
| SoundGraphData(SoundGraphData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| SoundGraphData([AudioGraphData](AudioGraphData) other)                    | Upcast an instance of type [AudioGraphData](AudioGraphData) to [SoundGraphData](SoundGraphData).                    |
| SoundGraphData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundGraphData](SoundGraphData). |

## Properties

| Name             | Type                                           | Description |
| ---------------- | ---------------------------------------------- | ----------- |
| info             | [SoundGraphInfo](SoundGraphInfo)               |             |
| inputParameters  | [AudioGraphParameter](AudioGraphParameter)\[\] |             |
| outputParameters | [AudioGraphParameter](AudioGraphParameter)\[\] |             |
| inputEvents      | [AudioGraphEvent](AudioGraphEvent)\[\]         |             |
| outputEvents     | [AudioGraphEvent](AudioGraphEvent)\[\]         |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [SoundGraphData](SoundGraphData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundGraphData](SoundGraphData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
