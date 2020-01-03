---
title: ScoringBucketData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ScoringBucketData()                                                          | Create a new instance of this container type.                                                                             |
| ScoringBucketData(ScoringBucketData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| ScoringBucketData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScoringBucketData](ScoringBucketData). |

## Properties

| Name                | Type                                                   | Description |
| ------------------- | ------------------------------------------------------ | ----------- |
| destinationBucket   | [ScoringBucket](ScoringBucket)                         |             |
| bucketType          | [ScoringBucketType](ScoringBucketType)                 |             |
| name                | string                                                 |             |
| teamTotalBucket     | [ScoringBucketData](ScoringBucketData)                 |             |
| unlocks             | [ScoringBucketUnlockData](ScoringBucketUnlockData)\[\] |             |
| connectedCategories | [StatsCategoryBaseData](StatsCategoryBaseData)\[\]     |             |
| addToEntry          | bool                                                   |             |
| roundScore          | bool                                                   |             |
| globalScore         | bool                                                   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [ScoringBucketData](ScoringBucketData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ScoringBucketData](ScoringBucketData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
