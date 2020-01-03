---
title: LandingGearLogicData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LandingGearLogicData()                                                          | Create a new instance of this container type.                                                                                   |
| LandingGearLogicData(LandingGearLogicData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LandingGearLogicData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LandingGearLogicData](/vext/ref/fb/landinggearlogicdata/). |

## Properties

| Name             | Type                                                 | Description |
| ---------------- | ---------------------------------------------------- | ----------- |
| retractCondition | [LandingGearConditionData](/vext/ref/fb/landinggearconditiondata/) |             |
| deployCondition  | [LandingGearConditionData](/vext/ref/fb/landinggearconditiondata/) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LandingGearLogicData](/vext/ref/fb/landinggearlogicdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LandingGearLogicData](/vext/ref/fb/landinggearlogicdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
