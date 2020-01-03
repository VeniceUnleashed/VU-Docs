---
title: ConditionGroup
---
### Base Classes

[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ConditionGroup()                                                          | Create a new instance of this container type.                                                                       |
| ConditionGroup(ConditionGroup other)                                      | Create a reference copy of an instance of the same type.                                                            |
| ConditionGroup([AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) other)  | Upcast an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) to [ConditionGroup](/vext/ref/fb/conditiongroup/).  |
| ConditionGroup([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ConditionGroup](/vext/ref/fb/conditiongroup/). |

## Properties

| Name      | Type                                     | Description |
| --------- | ---------------------------------------- | ----------- |
| x         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| y         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| trueValue | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| condition | [ConditionType](/vext/ref/fb/conditiontype/)           |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [ConditionGroup](/vext/ref/fb/conditiongroup/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ConditionGroup](/vext/ref/fb/conditiongroup/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
