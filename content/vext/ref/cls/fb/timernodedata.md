---
title: TimerNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| TimerNodeData()                                                          | Create a new instance of this container type.                                                                     |
| TimerNodeData(TimerNodeData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| TimerNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [TimerNodeData](TimerNodeData).            |
| TimerNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TimerNodeData](TimerNodeData). |

## Properties

| Name     | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| start    | [AudioGraphNodePort](AudioGraphNodePort) |             |
| stop     | [AudioGraphNodePort](AudioGraphNodePort) |             |
| period   | [AudioGraphNodePort](AudioGraphNodePort) |             |
| tick     | [AudioGraphNodePort](AudioGraphNodePort) |             |
| progress | [AudioGraphNodePort](AudioGraphNodePort) |             |
| mode     | [TimerMode](TimerMode)                   |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [TimerNodeData](TimerNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TimerNodeData](TimerNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
