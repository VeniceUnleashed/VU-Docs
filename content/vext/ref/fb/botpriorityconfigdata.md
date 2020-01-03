---
title: BotPriorityConfigData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| BotPriorityConfigData()                                                          | Create a new instance of this container type.                                                                                     |
| BotPriorityConfigData(BotPriorityConfigData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| BotPriorityConfigData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata/). |

## Properties

| Name               | Type                              | Description |
| ------------------ | --------------------------------- | ----------- |
| debugColor         | [Vec3](/vext/ref/shared/class/vec3) |             |
| distance           | number                            |             |
| period             | number                            |             |
| angleOffset        | number                            |             |
| appliesToExecution | bool                              |             |
| appliesToDecisions | bool                              |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
