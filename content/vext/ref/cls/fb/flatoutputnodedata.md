---
title: FlatOutputNodeData (Frostbite Container)
---
### Base Classes

[OutputNodeData](OutputNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| FlatOutputNodeData()                                                          | Create a new instance of this container type.                                                                               |
| FlatOutputNodeData(FlatOutputNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| FlatOutputNodeData([OutputNodeData](OutputNodeData) other)                    | Upcast an instance of type [OutputNodeData](OutputNodeData) to [FlatOutputNodeData](FlatOutputNodeData).                    |
| FlatOutputNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [FlatOutputNodeData](FlatOutputNodeData).            |
| FlatOutputNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [FlatOutputNodeData](FlatOutputNodeData). |

## Properties

| Name             | Type                                       | Description |
| ---------------- | ------------------------------------------ | ----------- |
| angle            | number                                     |             |
| reverbGain       | number                                     |             |
| reverbSend       | [SoundBusData](SoundBusData)               |             |
| centerLevel      | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| lfeLevel         | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| panPlugin        | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| reverbSendPlugin | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [FlatOutputNodeData](FlatOutputNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [FlatOutputNodeData](FlatOutputNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
