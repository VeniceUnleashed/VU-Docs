---
title: TransformPropertyTrackData
---
### Base Classes

[SimplePropertyTrackData](SimplePropertyTrackData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| TransformPropertyTrackData()                                                          | Create a new instance of this container type.                                                                                               |
| TransformPropertyTrackData(TransformPropertyTrackData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| TransformPropertyTrackData([SimplePropertyTrackData](SimplePropertyTrackData) other)  | Upcast an instance of type [SimplePropertyTrackData](SimplePropertyTrackData) to [TransformPropertyTrackData](TransformPropertyTrackData).  |
| TransformPropertyTrackData([PropertyTrackData](PropertyTrackData) other)              | Upcast an instance of type [PropertyTrackData](PropertyTrackData) to [TransformPropertyTrackData](TransformPropertyTrackData).              |
| TransformPropertyTrackData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformPropertyTrackData](TransformPropertyTrackData). |

## Properties

| Name   | Type                                                        | Description |
| ------ | ----------------------------------------------------------- | ----------- |
| values | [LinearTransform](/vext/ref/shared/class/lineartransform)\[\] |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TransformPropertyTrackData](TransformPropertyTrackData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformPropertyTrackData](TransformPropertyTrackData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
