---
title: ValueDebugNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ValueDebugNodeData()                                                          | Create a new instance of this container type.                                                                               |
| ValueDebugNodeData(ValueDebugNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| ValueDebugNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [ValueDebugNodeData](ValueDebugNodeData).            |
| ValueDebugNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ValueDebugNodeData](ValueDebugNodeData). |

## Properties

| Name   | Type                                   | Description |
| ------ | -------------------------------------- | ----------- |
| values | [DebugValueInput](DebugValueInput)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [ValueDebugNodeData](ValueDebugNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ValueDebugNodeData](ValueDebugNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
