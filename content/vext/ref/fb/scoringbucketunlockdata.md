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
| unlockInfo   | [BasicUnlockInfo](BasicUnlockInfo) |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [ScoringBucketUnlockData](ScoringBucketUnlockData) | [Clone](#clone) |            |

### Clone

> [ScoringBucketUnlockData](ScoringBucketUnlockData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
