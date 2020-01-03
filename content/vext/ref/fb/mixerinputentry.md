---
title: MixerInputEntry
---
### Base Classes

[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| MixerInputEntry()                                                          | Create a new instance of this container type.                                                                         |
| MixerInputEntry(MixerInputEntry other)                                     | Create a reference copy of an instance of the same type.                                                              |
| MixerInputEntry([AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) other)  | Upcast an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) to [MixerInputEntry](/vext/ref/fb/mixerinputentry/).  |
| MixerInputEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerInputEntry](/vext/ref/fb/mixerinputentry/). |

## Properties

| Name           | Type                                                 | Description |
| -------------- | ---------------------------------------------------- | ----------- |
| out            | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)             |             |
| source         | [AudioGraphParameter](/vext/ref/fb/audiographparameter/)           |             |
| accumulateMode | [MixerValueAccumulateMode](/vext/ref/fb/mixervalueaccumulatemode/) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [MixerInputEntry](/vext/ref/fb/mixerinputentry/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerInputEntry](/vext/ref/fb/mixerinputentry/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
