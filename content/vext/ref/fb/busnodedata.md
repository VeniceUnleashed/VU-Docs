---
title: BusNodeData
---
### Base Classes

[SoundBusData](SoundBusData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| BusNodeData()                                                          | Create a new instance of this container type.                                                                 |
| BusNodeData(BusNodeData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| BusNodeData([SoundBusData](SoundBusData) other)                        | Upcast an instance of type [SoundBusData](SoundBusData) to [BusNodeData](BusNodeData).                        |
| BusNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [BusNodeData](BusNodeData).            |
| BusNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BusNodeData](BusNodeData). |

## Properties

| Name     | Type                                       | Description |
| -------- | ------------------------------------------ | ----------- |
| out      | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| vuPlugin | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [BusNodeData](BusNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BusNodeData](BusNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
