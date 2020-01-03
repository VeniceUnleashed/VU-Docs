---
title: EventSwitcherNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| EventSwitcherNodeData()                                                          | Create a new instance of this container type.                                                                                     |
| EventSwitcherNodeData(EventSwitcherNodeData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| EventSwitcherNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata/).            |
| EventSwitcherNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata/). |

## Properties

| Name   | Type                                         | Description |
| ------ | -------------------------------------------- | ----------- |
| inputs | [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry/)\[\] |             |
| value  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
