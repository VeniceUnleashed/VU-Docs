---
title: TimingConstantData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| TimingConstantData()                                                          | Create a new instance of this container type.                                                                               |
| TimingConstantData(TimingConstantData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| TimingConstantData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [TimingConstantData](TimingConstantData).                                      |
| TimingConstantData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TimingConstantData](TimingConstantData). |

## Properties

| Name               | Type                                                   | Description |
| ------------------ | ------------------------------------------------------ | ----------- |
| updateTimePerFrame | number                                                 |             |
| subsystemTimeParts | [SubsystemTimingConfigData](SubsystemTimingConfigData) |             |
| priorityClasses    | [BotPriorityConfigData](BotPriorityConfigData)\[\]     |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [TimingConstantData](TimingConstantData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TimingConstantData](TimingConstantData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
