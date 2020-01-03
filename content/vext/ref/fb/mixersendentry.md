---
title: MixerSendEntry
---
### Base Classes

[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| MixerSendEntry()                                                          | Create a new instance of this container type.                                                                       |
| MixerSendEntry(MixerSendEntry other)                                      | Create a reference copy of an instance of the same type.                                                            |
| MixerSendEntry([AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) other)  | Upcast an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) to [MixerSendEntry](/vext/ref/fb/mixersendentry/).  |
| MixerSendEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerSendEntry](/vext/ref/fb/mixersendentry/). |

## Properties

| Name    | Type                                       | Description |
| ------- | ------------------------------------------ | ----------- |
| inValue | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| target  | [AudioGraphParameter](/vext/ref/fb/audiographparameter/) |             |
| mixer   | [MixerAsset](/vext/ref/fb/mixerasset/)                   |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [MixerSendEntry](/vext/ref/fb/mixersendentry/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerSendEntry](/vext/ref/fb/mixersendentry/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
