---
title: EventSwitcherEntry
---
### Base Classes

[AudioGraphNodePortGroup](AudioGraphNodePortGroup)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| EventSwitcherEntry()                                                          | Create a new instance of this container type.                                                                               |
| EventSwitcherEntry(EventSwitcherEntry other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| EventSwitcherEntry([AudioGraphNodePortGroup](AudioGraphNodePortGroup) other)  | Upcast an instance of type [AudioGraphNodePortGroup](AudioGraphNodePortGroup) to [EventSwitcherEntry](EventSwitcherEntry).  |
| EventSwitcherEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventSwitcherEntry](EventSwitcherEntry). |

## Properties

| Name        | Type                                     | Description |
| ----------- | ---------------------------------------- | ----------- |
| caseTrigger | [AudioGraphNodePort](AudioGraphNodePort) |             |
| value       | number                                   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [EventSwitcherEntry](EventSwitcherEntry) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EventSwitcherEntry](EventSwitcherEntry) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
