---
title: MixerOutputEntry
---
### Base Classes

[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| MixerOutputEntry()                                                          | Create a new instance of this container type.                                                                           |
| MixerOutputEntry(MixerOutputEntry other)                                    | Create a reference copy of an instance of the same type.                                                                |
| MixerOutputEntry([AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) other)  | Upcast an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) to [MixerOutputEntry](/vext/ref/fb/mixeroutputentry/).  |
| MixerOutputEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerOutputEntry](/vext/ref/fb/mixeroutputentry/). |

## Properties

| Name    | Type                                       | Description |
| ------- | ------------------------------------------ | ----------- |
| inValue | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| target  | [AudioGraphParameter](/vext/ref/fb/audiographparameter/) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [MixerOutputEntry](/vext/ref/fb/mixeroutputentry/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerOutputEntry](/vext/ref/fb/mixeroutputentry/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
