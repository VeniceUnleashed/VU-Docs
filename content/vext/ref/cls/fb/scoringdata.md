---
title: ScoringData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ScoringData()                                                          | Create a new instance of this container type.                                                                 |
| ScoringData(ScoringData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| ScoringData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ScoringData](ScoringData).                                      |
| ScoringData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ScoringData](ScoringData). |

## Properties

| Name            | Type                                         | Description |
| --------------- | -------------------------------------------- | ----------- |
| scoringTypes    | [ScoringTypeData](ScoringTypeData)\[\]       |             |
| scoringHandlers | [ScoringHandlerData](ScoringHandlerData)\[\] |             |
| buckets         | [ScoringBucketData](ScoringBucketData)\[\]   |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [ScoringData](ScoringData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ScoringData](ScoringData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
