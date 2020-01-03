---
title: Vec2PropertyTrackData
---
### Base Classes

[SimplePropertyTrackData](SimplePropertyTrackData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Vec2PropertyTrackData()                                                          | Create a new instance of this container type.                                                                                     |
| Vec2PropertyTrackData(Vec2PropertyTrackData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| Vec2PropertyTrackData([SimplePropertyTrackData](SimplePropertyTrackData) other)  | Upcast an instance of type [SimplePropertyTrackData](SimplePropertyTrackData) to [Vec2PropertyTrackData](Vec2PropertyTrackData).  |
| Vec2PropertyTrackData([PropertyTrackData](PropertyTrackData) other)              | Upcast an instance of type [PropertyTrackData](PropertyTrackData) to [Vec2PropertyTrackData](Vec2PropertyTrackData).              |
| Vec2PropertyTrackData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Vec2PropertyTrackData](Vec2PropertyTrackData). |

## Properties

| Name   | Type                                  | Description |
| ------ | ------------------------------------- | ----------- |
| values | [Vec2](/vext/ref/shared/class/Vec2)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [Vec2PropertyTrackData](Vec2PropertyTrackData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [Vec2PropertyTrackData](Vec2PropertyTrackData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
