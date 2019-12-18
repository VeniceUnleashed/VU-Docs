---
title: UnlockAssetPair (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| UnlockAssetPair()                      | Create a new instance of this structure type.            |
| UnlockAssetPair(UnlockAssetPair other) | Create a reference copy of a structure of the same type. |

## Properties

| Name   | Type                               | Description |
| ------ | ---------------------------------- | ----------- |
| second | [UnlockAssetBase](UnlockAssetBase) |             |
| result | [UnlockAssetBase](UnlockAssetBase) |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [UnlockAssetPair](UnlockAssetPair) | [Clone](#clone) |            |

### Clone

> [UnlockAssetPair](UnlockAssetPair) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
