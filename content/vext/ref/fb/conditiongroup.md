---
title: ConditionGroup
---
### Base Classes

[AudioGraphNodePortGroup](AudioGraphNodePortGroup)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ConditionGroup()                                                          | Create a new instance of this container type.                                                                       |
| ConditionGroup(ConditionGroup other)                                      | Create a reference copy of an instance of the same type.                                                            |
| ConditionGroup([AudioGraphNodePortGroup](AudioGraphNodePortGroup) other)  | Upcast an instance of type [AudioGraphNodePortGroup](AudioGraphNodePortGroup) to [ConditionGroup](ConditionGroup).  |
| ConditionGroup([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ConditionGroup](ConditionGroup). |

## Properties

| Name      | Type                                     | Description |
| --------- | ---------------------------------------- | ----------- |
| x         | [AudioGraphNodePort](AudioGraphNodePort) |             |
| y         | [AudioGraphNodePort](AudioGraphNodePort) |             |
| trueValue | [AudioGraphNodePort](AudioGraphNodePort) |             |
| condition | [ConditionType](ConditionType)           |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [ConditionGroup](ConditionGroup) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ConditionGroup](ConditionGroup) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
