---
title: AiffWriterNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| AiffWriterNodeData()                                                          | Create a new instance of this container type.                                                                               |
| AiffWriterNodeData(AiffWriterNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| AiffWriterNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [AiffWriterNodeData](/vext/ref/fb/aiffwriternodedata/).            |
| AiffWriterNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AiffWriterNodeData](/vext/ref/fb/aiffwriternodedata/). |

## Properties

| Name     | Type                                       | Description |
| -------- | ------------------------------------------ | ----------- |
| inValue  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| start    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| stop     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| plugin   | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| fileName | string                                     |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [AiffWriterNodeData](/vext/ref/fb/aiffwriternodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AiffWriterNodeData](/vext/ref/fb/aiffwriternodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
