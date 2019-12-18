---
title: EventGateNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| EventGateNodeData()                                                          | Create a new instance of this container type.                                                                             |
| EventGateNodeData(EventGateNodeData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| EventGateNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [EventGateNodeData](EventGateNodeData).            |
| EventGateNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EventGateNodeData](EventGateNodeData). |

## Properties

| Name         | Type                                     | Description |
| ------------ | ---------------------------------------- | ----------- |
| inValue      | [AudioGraphNodePort](AudioGraphNodePort) |             |
| out          | [AudioGraphNodePort](AudioGraphNodePort) |             |
| coolDownTime | [AudioGraphNodePort](AudioGraphNodePort) |             |
| enable       | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [EventGateNodeData](EventGateNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EventGateNodeData](EventGateNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
