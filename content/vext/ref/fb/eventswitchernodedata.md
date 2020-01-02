---
title: EventSwitcherNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| EventSwitcherNodeData()                                                          | Create a new instance of this container type.                                                                                     |
| EventSwitcherNodeData(EventSwitcherNodeData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| EventSwitcherNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [EventSwitcherNodeData](EventSwitcherNodeData).            |
| EventSwitcherNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventSwitcherNodeData](EventSwitcherNodeData). |

## Properties

| Name   | Type                                         | Description |
| ------ | -------------------------------------------- | ----------- |
| inputs | [EventSwitcherEntry](EventSwitcherEntry)\[\] |             |
| value  | [AudioGraphNodePort](AudioGraphNodePort)     |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [EventSwitcherNodeData](EventSwitcherNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EventSwitcherNodeData](EventSwitcherNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
