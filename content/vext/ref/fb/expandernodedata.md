---
title: ExpanderNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ExpanderNodeData()                                                          | Create a new instance of this container type.                                                                           |
| ExpanderNodeData(ExpanderNodeData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| ExpanderNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [ExpanderNodeData](/vext/ref/fb/expandernodedata/).            |
| ExpanderNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ExpanderNodeData](/vext/ref/fb/expandernodedata/). |

## Properties

| Name        | Type                                       | Description |
| ----------- | ------------------------------------------ | ----------- |
| inValue     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| threshold   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| ratio       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| attackTime  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| releaseTime | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| out         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| channelMode | [ExpanderChannelMode](/vext/ref/fb/expanderchannelmode/) |             |
| plugin      | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [ExpanderNodeData](/vext/ref/fb/expandernodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ExpanderNodeData](/vext/ref/fb/expandernodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
