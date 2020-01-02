---
title: StatsCategoryScoringBucketData
---
### Base Classes

[StatsCategoryGuidData](StatsCategoryGuidData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryScoringBucketData()                                                          | Create a new instance of this container type.                                                                                                       |
| StatsCategoryScoringBucketData(StatsCategoryScoringBucketData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| StatsCategoryScoringBucketData([StatsCategoryGuidData](StatsCategoryGuidData) other)      | Upcast an instance of type [StatsCategoryGuidData](StatsCategoryGuidData) to [StatsCategoryScoringBucketData](StatsCategoryScoringBucketData).      |
| StatsCategoryScoringBucketData([StatsCategoryBaseData](StatsCategoryBaseData) other)      | Upcast an instance of type [StatsCategoryBaseData](StatsCategoryBaseData) to [StatsCategoryScoringBucketData](StatsCategoryScoringBucketData).      |
| StatsCategoryScoringBucketData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [StatsCategoryScoringBucketData](StatsCategoryScoringBucketData).                        |
| StatsCategoryScoringBucketData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryScoringBucketData](StatsCategoryScoringBucketData). |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryScoringBucketData](StatsCategoryScoringBucketData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryScoringBucketData](StatsCategoryScoringBucketData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
