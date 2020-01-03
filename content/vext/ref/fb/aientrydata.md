---
title: AIEntryData
---
### Base Classes

[GameAIEntryData](/vext/ref/fb/gameaientrydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| AIEntryData()                                                          | Create a new instance of this container type.                                                                 |
| AIEntryData(AIEntryData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| AIEntryData([GameAIEntryData](/vext/ref/fb/gameaientrydata/) other)                  | Upcast an instance of type [GameAIEntryData](/vext/ref/fb/gameaientrydata/) to [AIEntryData](/vext/ref/fb/aientrydata/).                  |
| AIEntryData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [AIEntryData](/vext/ref/fb/aientrydata/).                                      |
| AIEntryData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AIEntryData](/vext/ref/fb/aientrydata/). |

## Properties

| Name              | Type                                             | Description |
| ----------------- | ------------------------------------------------ | ----------- |
| equipmentType     | [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata/) |             |
| armament          | [ArmamentData](/vext/ref/fb/armamentdata/)                     |             |
| mobility          | [MobilityData](/vext/ref/fb/mobilitydata/)                     |             |
| strengthType      | [StrengthType](/vext/ref/fb/strengthtype/)                     |             |
| reuseTime         | number                                           |             |
| forbidden         | bool                                             |             |
| hasExposedSoldier | bool                                             |             |
| interludeOnly     | bool                                             |             |
| invalidForAI      | bool                                             |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [AIEntryData](/vext/ref/fb/aientrydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AIEntryData](/vext/ref/fb/aientrydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
