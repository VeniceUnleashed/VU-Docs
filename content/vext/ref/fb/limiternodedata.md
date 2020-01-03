---
title: LimiterNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| LimiterNodeData()                                                          | Create a new instance of this container type.                                                                         |
| LimiterNodeData(LimiterNodeData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| LimiterNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [LimiterNodeData](/vext/ref/fb/limiternodedata/).            |
| LimiterNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LimiterNodeData](/vext/ref/fb/limiternodedata/). |

## Properties

| Name        | Type                                       | Description |
| ----------- | ------------------------------------------ | ----------- |
| inValue     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| threshold   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| releaseTime | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| out         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| channelMode | [LimiterChannelMode](/vext/ref/fb/limiterchannelmode/)   |             |
| plugin      | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [LimiterNodeData](/vext/ref/fb/limiternodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LimiterNodeData](/vext/ref/fb/limiternodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
