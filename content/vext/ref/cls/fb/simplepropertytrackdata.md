---
title: SimplePropertyTrackData (Frostbite Container)
---
### Base Classes

[PropertyTrackData](PropertyTrackData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| SimplePropertyTrackData()                                                          | Create a new instance of this container type.                                                                                         |
| SimplePropertyTrackData(SimplePropertyTrackData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| SimplePropertyTrackData([PropertyTrackData](PropertyTrackData) other)              | Upcast an instance of type [PropertyTrackData](PropertyTrackData) to [SimplePropertyTrackData](SimplePropertyTrackData).              |
| SimplePropertyTrackData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SimplePropertyTrackData](SimplePropertyTrackData). |

## Properties

| Name              | Type                                   | Description |
| ----------------- | -------------------------------------- | ----------- |
| interpolationType | [InterpolationType](InterpolationType) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SimplePropertyTrackData](SimplePropertyTrackData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SimplePropertyTrackData](SimplePropertyTrackData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
