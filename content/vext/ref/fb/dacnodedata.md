---
title: DacNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| DacNodeData()                                                          | Create a new instance of this container type.                                                                 |
| DacNodeData(DacNodeData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| DacNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [DacNodeData](/vext/ref/fb/dacnodedata/).            |
| DacNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DacNodeData](/vext/ref/fb/dacnodedata/). |

## Properties

| Name         | Type                                       | Description |
| ------------ | ------------------------------------------ | ----------- |
| inValue      | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| speakerCount | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| sampleRate   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| vuPlugin     | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| gainPlugin   | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| dacPlugin    | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [DacNodeData](/vext/ref/fb/dacnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DacNodeData](/vext/ref/fb/dacnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
