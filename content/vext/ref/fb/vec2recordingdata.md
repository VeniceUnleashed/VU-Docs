---
title: Vec2RecordingData
---
### Base Classes

[PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Vec2RecordingData()                                                          | Create a new instance of this container type.                                                                             |
| Vec2RecordingData(Vec2RecordingData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| Vec2RecordingData([PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/) other)      | Upcast an instance of type [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/) to [Vec2RecordingData](/vext/ref/fb/vec2recordingdata/).      |
| Vec2RecordingData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Vec2RecordingData](/vext/ref/fb/vec2recordingdata/). |

## Properties

| Name   | Type                                  | Description |
| ------ | ------------------------------------- | ----------- |
| values | [Vec2](/vext/ref/shared/class/vec2)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [Vec2RecordingData](/vext/ref/fb/vec2recordingdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [Vec2RecordingData](/vext/ref/fb/vec2recordingdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
