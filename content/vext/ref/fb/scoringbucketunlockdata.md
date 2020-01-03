---
title: ScoringBucketUnlockData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| ScoringBucketUnlockData()                              | Create a new instance of this structure type.            |
| ScoringBucketUnlockData(ScoringBucketUnlockData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type                               | Description |
| ------------ | ---------------------------------- | ----------- |
| pointsNeeded | number                             |             |
| unlockInfo   | [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo/) |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata/) | [Clone](#clone) |            |

### Clone

> [ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
