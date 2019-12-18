---
title: Vec4PropertyTrackData (Frostbite Container)
---
### Base Classes

[SimplePropertyTrackData](SimplePropertyTrackData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Vec4PropertyTrackData()                                                          | Create a new instance of this container type.                                                                                     |
| Vec4PropertyTrackData(Vec4PropertyTrackData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| Vec4PropertyTrackData([SimplePropertyTrackData](SimplePropertyTrackData) other)  | Upcast an instance of type [SimplePropertyTrackData](SimplePropertyTrackData) to [Vec4PropertyTrackData](Vec4PropertyTrackData).  |
| Vec4PropertyTrackData([PropertyTrackData](PropertyTrackData) other)              | Upcast an instance of type [PropertyTrackData](PropertyTrackData) to [Vec4PropertyTrackData](Vec4PropertyTrackData).              |
| Vec4PropertyTrackData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [Vec4PropertyTrackData](Vec4PropertyTrackData). |

## Properties

| Name   | Type                                  | Description |
| ------ | ------------------------------------- | ----------- |
| values | [Vec4](/vext/ref/cls/shr/Vec4)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [Vec4PropertyTrackData](Vec4PropertyTrackData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [Vec4PropertyTrackData](Vec4PropertyTrackData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
