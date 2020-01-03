---
title: MixerSendNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| MixerSendNodeData()                                                          | Create a new instance of this container type.                                                                             |
| MixerSendNodeData(MixerSendNodeData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| MixerSendNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [MixerSendNodeData](/vext/ref/fb/mixersendnodedata/).            |
| MixerSendNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerSendNodeData](/vext/ref/fb/mixersendnodedata/). |

## Properties

| Name    | Type                                 | Description |
| ------- | ------------------------------------ | ----------- |
| entries | [MixerSendEntry](/vext/ref/fb/mixersendentry/)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [MixerSendNodeData](/vext/ref/fb/mixersendnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerSendNodeData](/vext/ref/fb/mixersendnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
