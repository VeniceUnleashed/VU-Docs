---
title: ScoringTypeData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ScoringTypeData()                                                          | Create a new instance of this container type.                                                                         |
| ScoringTypeData(ScoringTypeData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| ScoringTypeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScoringTypeData](/vext/ref/fb/scoringtypedata/). |

## Properties

| Name                      | Type                                           | Description |
| ------------------------- | ---------------------------------------------- | ----------- |
| measuring                 | [StatEvent](/vext/ref/fb/statevent/)                         |             |
| paramX                    | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) |             |
| paramY                    | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) |             |
| limit                     | number                                         |             |
| descriptionSid            | string                                         |             |
| visibilityType            | [ScoringVisibilityType](/vext/ref/fb/scoringvisibilitytype/) |             |
| bucket                    | [ScoringBucket](/vext/ref/fb/scoringbucket/)                 |             |
| score                     | number                                         |             |
| additionalValueMultiplier | number                                         |             |
| showForTeam               | bool                                           |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [ScoringTypeData](/vext/ref/fb/scoringtypedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ScoringTypeData](/vext/ref/fb/scoringtypedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
