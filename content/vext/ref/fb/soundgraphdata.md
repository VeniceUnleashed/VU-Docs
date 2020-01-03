---
title: SoundGraphData
---
### Base Classes

[AudioGraphData](/vext/ref/fb/audiographdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SoundGraphData()                                                          | Create a new instance of this container type.                                                                       |
| SoundGraphData(SoundGraphData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| SoundGraphData([AudioGraphData](/vext/ref/fb/audiographdata/) other)                    | Upcast an instance of type [AudioGraphData](/vext/ref/fb/audiographdata/) to [SoundGraphData](/vext/ref/fb/soundgraphdata/).                    |
| SoundGraphData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundGraphData](/vext/ref/fb/soundgraphdata/). |

## Properties

| Name             | Type                                           | Description |
| ---------------- | ---------------------------------------------- | ----------- |
| info             | [SoundGraphInfo](/vext/ref/fb/soundgraphinfo/)               |             |
| inputParameters  | [AudioGraphParameter](/vext/ref/fb/audiographparameter/)\[\] |             |
| outputParameters | [AudioGraphParameter](/vext/ref/fb/audiographparameter/)\[\] |             |
| inputEvents      | [AudioGraphEvent](/vext/ref/fb/audiographevent/)\[\]         |             |
| outputEvents     | [AudioGraphEvent](/vext/ref/fb/audiographevent/)\[\]         |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [SoundGraphData](/vext/ref/fb/soundgraphdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundGraphData](/vext/ref/fb/soundgraphdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
