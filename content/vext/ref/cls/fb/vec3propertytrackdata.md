---
title: Vec3PropertyTrackData (Frostbite Container)
---
### Base Classes

[SimplePropertyTrackData](SimplePropertyTrackData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Vec3PropertyTrackData()                                                          | Create a new instance of this container type.                                                                                     |
| Vec3PropertyTrackData(Vec3PropertyTrackData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| Vec3PropertyTrackData([SimplePropertyTrackData](SimplePropertyTrackData) other)  | Upcast an instance of type [SimplePropertyTrackData](SimplePropertyTrackData) to [Vec3PropertyTrackData](Vec3PropertyTrackData).  |
| Vec3PropertyTrackData([PropertyTrackData](PropertyTrackData) other)              | Upcast an instance of type [PropertyTrackData](PropertyTrackData) to [Vec3PropertyTrackData](Vec3PropertyTrackData).              |
| Vec3PropertyTrackData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [Vec3PropertyTrackData](Vec3PropertyTrackData). |

## Properties

| Name   | Type                                  | Description |
| ------ | ------------------------------------- | ----------- |
| values | [Vec3](/vext/ref/cls/shr/Vec3)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [Vec3PropertyTrackData](Vec3PropertyTrackData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [Vec3PropertyTrackData](Vec3PropertyTrackData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
