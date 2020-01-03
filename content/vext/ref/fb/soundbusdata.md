---
title: SoundBusData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| SoundBusData()                                                          | Create a new instance of this container type.                                                                   |
| SoundBusData(SoundBusData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| SoundBusData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [SoundBusData](SoundBusData).            |
| SoundBusData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundBusData](SoundBusData). |

## Properties

| Name         | Type                                       | Description |
| ------------ | ------------------------------------------ | ----------- |
| busName      | string                                     |             |
| submixPlugin | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| channelCount | number                                     |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [SoundBusData](SoundBusData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundBusData](SoundBusData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
