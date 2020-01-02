---
title: PadRumbleNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PadRumbleNodeData()                                                          | Create a new instance of this container type.                                                                             |
| PadRumbleNodeData(PadRumbleNodeData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| PadRumbleNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [PadRumbleNodeData](PadRumbleNodeData).            |
| PadRumbleNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PadRumbleNodeData](PadRumbleNodeData). |

## Properties

| Name       | Type                                     | Description |
| ---------- | ---------------------------------------- | ----------- |
| rumbleHigh | [AudioGraphNodePort](AudioGraphNodePort) |             |
| rumbleLow  | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [PadRumbleNodeData](PadRumbleNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PadRumbleNodeData](PadRumbleNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
