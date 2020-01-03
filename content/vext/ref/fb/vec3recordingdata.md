---
title: Vec3RecordingData
---
### Base Classes

[PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Vec3RecordingData()                                                          | Create a new instance of this container type.                                                                             |
| Vec3RecordingData(Vec3RecordingData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| Vec3RecordingData([PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/) other)      | Upcast an instance of type [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/) to [Vec3RecordingData](/vext/ref/fb/vec3recordingdata/).      |
| Vec3RecordingData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Vec3RecordingData](/vext/ref/fb/vec3recordingdata/). |

## Properties

| Name   | Type                                  | Description |
| ------ | ------------------------------------- | ----------- |
| values | [Vec3](/vext/ref/shared/class/vec3)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [Vec3RecordingData](/vext/ref/fb/vec3recordingdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [Vec3RecordingData](/vext/ref/fb/vec3recordingdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
