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
| ScoringBucketData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScoringBucketData](/vext/ref/fb/scoringbucketdata/). |

## Properties

| Name                | Type                                                   | Description |
| ------------------- | ------------------------------------------------------ | ----------- |
| destinationBucket   | [ScoringBucket](/vext/ref/fb/scoringbucket/)                         |             |
| bucketType          | [ScoringBucketType](/vext/ref/fb/scoringbuckettype/)                 |             |
| name                | string                                                 |             |
| teamTotalBucket     | [ScoringBucketData](/vext/ref/fb/scoringbucketdata/)                 |             |
| unlocks             | [ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata/)\[\] |             |
| connectedCategories | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/)\[\]     |             |
| addToEntry          | bool                                                   |             |
| roundScore          | bool                                                   |             |
| globalScore         | bool                                                   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [ScoringBucketData](/vext/ref/fb/scoringbucketdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ScoringBucketData](/vext/ref/fb/scoringbucketdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
