---
title: ScoringTypeData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ScoringTypeData()                                                          | Create a new instance of this container type.                                                                         |
| ScoringTypeData(ScoringTypeData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| ScoringTypeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ScoringTypeData](ScoringTypeData). |

## Properties

| Name                      | Type                                           | Description |
| ------------------------- | ---------------------------------------------- | ----------- |
| measuring                 | [StatEvent](StatEvent)                         |             |
| paramX                    | [StatsCategoryBaseData](StatsCategoryBaseData) |             |
| paramY                    | [StatsCategoryBaseData](StatsCategoryBaseData) |             |
| limit                     | number                                         |             |
| descriptionSid            | string                                         |             |
| visibilityType            | [ScoringVisibilityType](ScoringVisibilityType) |             |
| bucket                    | [ScoringBucket](ScoringBucket)                 |             |
| score                     | number                                         |             |
| additionalValueMultiplier | number                                         |             |
| showForTeam               | bool                                           |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [ScoringTypeData](ScoringTypeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ScoringTypeData](ScoringTypeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
