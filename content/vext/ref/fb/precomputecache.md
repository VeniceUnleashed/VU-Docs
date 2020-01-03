---
title: PrecomputeCache
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| PrecomputeCache()                      | Create a new instance of this structure type.            |
| PrecomputeCache(PrecomputeCache other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type                              | Description |
| ---------------- | --------------------------------- | ----------- |
| guid             | [Guid](/vext/ref/shared/class/guid) |             |
| key              | string                            |             |
| cachedDataEnable | bool                              |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [PrecomputeCache](PrecomputeCache) | [Clone](#clone) |            |

### Clone

> [PrecomputeCache](PrecomputeCache) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
