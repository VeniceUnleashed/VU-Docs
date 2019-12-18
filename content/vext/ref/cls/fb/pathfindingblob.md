---
title: PathfindingBlob (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| PathfindingBlob()                      | Create a new instance of this structure type.            |
| PathfindingBlob(PathfindingBlob other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type                              | Description |
| ---------- | --------------------------------- | ----------- |
| blobId     | [Guid](/vext/ref/cls/shr/Guid) |             |
| blobSize   | number                            |             |
| chunkSizes | number\[\]                        |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [PathfindingBlob](PathfindingBlob) | [Clone](#clone) |            |

### Clone

> [PathfindingBlob](PathfindingBlob) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
