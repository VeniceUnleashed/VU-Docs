---
title: TransformPropertyTrackData
---
### Base Classes

[SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| TransformPropertyTrackData()                                                          | Create a new instance of this container type.                                                                                               |
| TransformPropertyTrackData(TransformPropertyTrackData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| TransformPropertyTrackData([SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/) other)  | Upcast an instance of type [SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/) to [TransformPropertyTrackData](/vext/ref/fb/transformpropertytrackdata/).  |
| TransformPropertyTrackData([PropertyTrackData](/vext/ref/fb/propertytrackdata/) other)              | Upcast an instance of type [PropertyTrackData](/vext/ref/fb/propertytrackdata/) to [TransformPropertyTrackData](/vext/ref/fb/transformpropertytrackdata/).              |
| TransformPropertyTrackData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformPropertyTrackData](/vext/ref/fb/transformpropertytrackdata/). |

## Properties

| Name   | Type                                                        | Description |
| ------ | ----------------------------------------------------------- | ----------- |
| values | [LinearTransform](/vext/ref/shared/class/lineartransform)\[\] |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TransformPropertyTrackData](/vext/ref/fb/transformpropertytrackdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformPropertyTrackData](/vext/ref/fb/transformpropertytrackdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
