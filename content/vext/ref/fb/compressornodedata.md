---
title: CompressorNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| CompressorNodeData()                                                          | Create a new instance of this container type.                                                                               |
| CompressorNodeData(CompressorNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| CompressorNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [CompressorNodeData](/vext/ref/fb/compressornodedata/).            |
| CompressorNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CompressorNodeData](/vext/ref/fb/compressornodedata/). |

## Properties

| Name        | Type                                           | Description |
| ----------- | ---------------------------------------------- | ----------- |
| inValue     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)       |             |
| threshold   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)       |             |
| ratio       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)       |             |
| attackTime  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)       |             |
| releaseTime | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)       |             |
| out         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)       |             |
| channelMode | [CompressorChannelMode](/vext/ref/fb/compressorchannelmode/) |             |
| plugin      | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/)     |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [CompressorNodeData](/vext/ref/fb/compressornodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CompressorNodeData](/vext/ref/fb/compressornodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
