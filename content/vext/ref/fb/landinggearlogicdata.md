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
| LandingGearLogicData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LandingGearLogicData](LandingGearLogicData). |

## Properties

| Name             | Type                                                 | Description |
| ---------------- | ---------------------------------------------------- | ----------- |
| retractCondition | [LandingGearConditionData](LandingGearConditionData) |             |
| deployCondition  | [LandingGearConditionData](LandingGearConditionData) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LandingGearLogicData](LandingGearLogicData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LandingGearLogicData](LandingGearLogicData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
