---
title: MixerReceiveEntry
---
### Base Classes

[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| MixerReceiveEntry()                                                          | Create a new instance of this container type.                                                                             |
| MixerReceiveEntry(MixerReceiveEntry other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| MixerReceiveEntry([AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) other)  | Upcast an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) to [MixerReceiveEntry](/vext/ref/fb/mixerreceiveentry/).  |
| MixerReceiveEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerReceiveEntry](/vext/ref/fb/mixerreceiveentry/). |

## Properties

| Name   | Type                                       | Description |
| ------ | ------------------------------------------ | ----------- |
| out    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| source | [AudioGraphParameter](/vext/ref/fb/audiographparameter/) |             |
| mixer  | [MixerAsset](/vext/ref/fb/mixerasset/)                   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [MixerReceiveEntry](/vext/ref/fb/mixerreceiveentry/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerReceiveEntry](/vext/ref/fb/mixerreceiveentry/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
