---
title: ScoringData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ScoringData()                                                          | Create a new instance of this container type.                                                                 |
| ScoringData(ScoringData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| ScoringData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ScoringData](/vext/ref/fb/scoringdata/).                                      |
| ScoringData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScoringData](/vext/ref/fb/scoringdata/). |

## Properties

| Name            | Type                                         | Description |
| --------------- | -------------------------------------------- | ----------- |
| scoringTypes    | [ScoringTypeData](/vext/ref/fb/scoringtypedata/)\[\]       |             |
| scoringHandlers | [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/)\[\] |             |
| buckets         | [ScoringBucketData](/vext/ref/fb/scoringbucketdata/)\[\]   |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [ScoringData](/vext/ref/fb/scoringdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ScoringData](/vext/ref/fb/scoringdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
