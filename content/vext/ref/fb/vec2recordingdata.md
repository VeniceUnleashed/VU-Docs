---
title: Vec2RecordingData
---
### Base Classes

[PropertyRecordingData](PropertyRecordingData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Vec2RecordingData()                                                          | Create a new instance of this container type.                                                                             |
| Vec2RecordingData(Vec2RecordingData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| Vec2RecordingData([PropertyRecordingData](PropertyRecordingData) other)      | Upcast an instance of type [PropertyRecordingData](PropertyRecordingData) to [Vec2RecordingData](Vec2RecordingData).      |
| Vec2RecordingData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Vec2RecordingData](Vec2RecordingData). |

## Properties

| Name   | Type                                  | Description |
| ------ | ------------------------------------- | ----------- |
| values | [Vec2](/vext/ref/shared/class/Vec2)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [Vec2RecordingData](Vec2RecordingData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [Vec2RecordingData](Vec2RecordingData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
