---
title: CrossfaderNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| CrossfaderNodeData()                                                          | Create a new instance of this container type.                                                                               |
| CrossfaderNodeData(CrossfaderNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| CrossfaderNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [CrossfaderNodeData](/vext/ref/fb/crossfadernodedata/).            |
| CrossfaderNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CrossfaderNodeData](/vext/ref/fb/crossfadernodedata/). |

## Properties

| Name    | Type                                       | Description |
| ------- | ------------------------------------------ | ----------- |
| in1     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| in2     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| ctrl    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| out     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| plugin1 | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| plugin2 | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [CrossfaderNodeData](/vext/ref/fb/crossfadernodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CrossfaderNodeData](/vext/ref/fb/crossfadernodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
