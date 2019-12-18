---
title: EventDebugNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| EventDebugNodeData()                                                          | Create a new instance of this container type.                                                                               |
| EventDebugNodeData(EventDebugNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| EventDebugNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [EventDebugNodeData](EventDebugNodeData).            |
| EventDebugNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EventDebugNodeData](EventDebugNodeData). |

## Properties

| Name   | Type                                   | Description |
| ------ | -------------------------------------- | ----------- |
| events | [DebugEventInput](DebugEventInput)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [EventDebugNodeData](EventDebugNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EventDebugNodeData](EventDebugNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
