---
title: FlatOutputNodeData
---
### Base Classes

[OutputNodeData](/vext/ref/fb/outputnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| FlatOutputNodeData()                                                          | Create a new instance of this container type.                                                                               |
| FlatOutputNodeData(FlatOutputNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| FlatOutputNodeData([OutputNodeData](/vext/ref/fb/outputnodedata/) other)                    | Upcast an instance of type [OutputNodeData](/vext/ref/fb/outputnodedata/) to [FlatOutputNodeData](/vext/ref/fb/flatoutputnodedata/).                    |
| FlatOutputNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [FlatOutputNodeData](/vext/ref/fb/flatoutputnodedata/).            |
| FlatOutputNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FlatOutputNodeData](/vext/ref/fb/flatoutputnodedata/). |

## Properties

| Name             | Type                                       | Description |
| ---------------- | ------------------------------------------ | ----------- |
| angle            | number                                     |             |
| reverbGain       | number                                     |             |
| reverbSend       | [SoundBusData](/vext/ref/fb/soundbusdata/)               |             |
| centerLevel      | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| lfeLevel         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| panPlugin        | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| reverbSendPlugin | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [FlatOutputNodeData](/vext/ref/fb/flatoutputnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FlatOutputNodeData](/vext/ref/fb/flatoutputnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
