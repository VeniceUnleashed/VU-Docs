---
title: DialogSamplerNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| DialogSamplerNodeData()                                                          | Create a new instance of this container type.                                                                                     |
| DialogSamplerNodeData(DialogSamplerNodeData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| DialogSamplerNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [DialogSamplerNodeData](/vext/ref/fb/dialogsamplernodedata/).            |
| DialogSamplerNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DialogSamplerNodeData](/vext/ref/fb/dialogsamplernodedata/). |

## Properties

| Name            | Type                                       | Description |
| --------------- | ------------------------------------------ | ----------- |
| pitch           | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| amplitude       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| continue        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| output          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| triggered       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| finished        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| sndPlayerPlugin | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| resamplePlugin  | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| pausePlugin     | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| gainPlugin      | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| tailLength      | number                                     |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [DialogSamplerNodeData](/vext/ref/fb/dialogsamplernodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DialogSamplerNodeData](/vext/ref/fb/dialogsamplernodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
