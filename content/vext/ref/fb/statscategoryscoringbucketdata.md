---
title: StatsCategoryScoringBucketData
---
### Base Classes

[StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryScoringBucketData()                                                          | Create a new instance of this container type.                                                                                                       |
| StatsCategoryScoringBucketData(StatsCategoryScoringBucketData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| StatsCategoryScoringBucketData([StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) other)      | Upcast an instance of type [StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) to [StatsCategoryScoringBucketData](/vext/ref/fb/statscategoryscoringbucketdata/).      |
| StatsCategoryScoringBucketData([StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) other)      | Upcast an instance of type [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) to [StatsCategoryScoringBucketData](/vext/ref/fb/statscategoryscoringbucketdata/).      |
| StatsCategoryScoringBucketData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [StatsCategoryScoringBucketData](/vext/ref/fb/statscategoryscoringbucketdata/).                        |
| StatsCategoryScoringBucketData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryScoringBucketData](/vext/ref/fb/statscategoryscoringbucketdata/). |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryScoringBucketData](/vext/ref/fb/statscategoryscoringbucketdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryScoringBucketData](/vext/ref/fb/statscategoryscoringbucketdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
