---
title: BoolPropertyTrackData (Frostbite Container)
---
### Base Classes

[SimplePropertyTrackData](SimplePropertyTrackData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| BoolPropertyTrackData()                                                          | Create a new instance of this container type.                                                                                     |
| BoolPropertyTrackData(BoolPropertyTrackData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| BoolPropertyTrackData([SimplePropertyTrackData](SimplePropertyTrackData) other)  | Upcast an instance of type [SimplePropertyTrackData](SimplePropertyTrackData) to [BoolPropertyTrackData](BoolPropertyTrackData).  |
| BoolPropertyTrackData([PropertyTrackData](PropertyTrackData) other)              | Upcast an instance of type [PropertyTrackData](PropertyTrackData) to [BoolPropertyTrackData](BoolPropertyTrackData).              |
| BoolPropertyTrackData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BoolPropertyTrackData](BoolPropertyTrackData). |

## Properties

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| values | bool\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [BoolPropertyTrackData](BoolPropertyTrackData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BoolPropertyTrackData](BoolPropertyTrackData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
