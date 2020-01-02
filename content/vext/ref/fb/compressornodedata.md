---
title: CompressorNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| CompressorNodeData()                                                          | Create a new instance of this container type.                                                                               |
| CompressorNodeData(CompressorNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| CompressorNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [CompressorNodeData](CompressorNodeData).            |
| CompressorNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CompressorNodeData](CompressorNodeData). |

## Properties

| Name        | Type                                           | Description |
| ----------- | ---------------------------------------------- | ----------- |
| inValue     | [AudioGraphNodePort](AudioGraphNodePort)       |             |
| threshold   | [AudioGraphNodePort](AudioGraphNodePort)       |             |
| ratio       | [AudioGraphNodePort](AudioGraphNodePort)       |             |
| attackTime  | [AudioGraphNodePort](AudioGraphNodePort)       |             |
| releaseTime | [AudioGraphNodePort](AudioGraphNodePort)       |             |
| out         | [AudioGraphNodePort](AudioGraphNodePort)       |             |
| channelMode | [CompressorChannelMode](CompressorChannelMode) |             |
| plugin      | [SoundGraphPluginRef](SoundGraphPluginRef)     |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [CompressorNodeData](CompressorNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CompressorNodeData](CompressorNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
