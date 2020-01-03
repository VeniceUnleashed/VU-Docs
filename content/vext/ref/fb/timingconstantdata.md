---
title: TimingConstantData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| TimingConstantData()                                                          | Create a new instance of this container type.                                                                               |
| TimingConstantData(TimingConstantData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| TimingConstantData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [TimingConstantData](/vext/ref/fb/timingconstantdata/).                                      |
| TimingConstantData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TimingConstantData](/vext/ref/fb/timingconstantdata/). |

## Properties

| Name               | Type                                                   | Description |
| ------------------ | ------------------------------------------------------ | ----------- |
| updateTimePerFrame | number                                                 |             |
| subsystemTimeParts | [SubsystemTimingConfigData](/vext/ref/fb/subsystemtimingconfigdata/) |             |
| priorityClasses    | [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata/)\[\]     |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [TimingConstantData](/vext/ref/fb/timingconstantdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TimingConstantData](/vext/ref/fb/timingconstantdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
