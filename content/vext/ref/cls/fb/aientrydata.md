---
title: AIEntryData (Frostbite Container)
---
### Base Classes

[GameAIEntryData](GameAIEntryData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| AIEntryData()                                                          | Create a new instance of this container type.                                                                 |
| AIEntryData(AIEntryData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| AIEntryData([GameAIEntryData](GameAIEntryData) other)                  | Upcast an instance of type [GameAIEntryData](GameAIEntryData) to [AIEntryData](AIEntryData).                  |
| AIEntryData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AIEntryData](AIEntryData).                                      |
| AIEntryData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AIEntryData](AIEntryData). |

## Properties

| Name              | Type                                             | Description |
| ----------------- | ------------------------------------------------ | ----------- |
| equipmentType     | [AIVehicleBehaviourData](AIVehicleBehaviourData) |             |
| armament          | [ArmamentData](ArmamentData)                     |             |
| mobility          | [MobilityData](MobilityData)                     |             |
| strengthType      | [StrengthType](StrengthType)                     |             |
| reuseTime         | number                                           |             |
| forbidden         | bool                                             |             |
| hasExposedSoldier | bool                                             |             |
| interludeOnly     | bool                                             |             |
| invalidForAI      | bool                                             |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [AIEntryData](AIEntryData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AIEntryData](AIEntryData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
