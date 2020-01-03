---
title: Vec3PropertyTrackData
---
### Base Classes

[SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Vec3PropertyTrackData()                                                          | Create a new instance of this container type.                                                                                     |
| Vec3PropertyTrackData(Vec3PropertyTrackData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| Vec3PropertyTrackData([SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/) other)  | Upcast an instance of type [SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/) to [Vec3PropertyTrackData](/vext/ref/fb/vec3propertytrackdata/).  |
| Vec3PropertyTrackData([PropertyTrackData](/vext/ref/fb/propertytrackdata/) other)              | Upcast an instance of type [PropertyTrackData](/vext/ref/fb/propertytrackdata/) to [Vec3PropertyTrackData](/vext/ref/fb/vec3propertytrackdata/).              |
| Vec3PropertyTrackData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Vec3PropertyTrackData](/vext/ref/fb/vec3propertytrackdata/). |

## Properties

| Name   | Type                                  | Description |
| ------ | ------------------------------------- | ----------- |
| values | [Vec3](/vext/ref/shared/class/vec3)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [Vec3PropertyTrackData](/vext/ref/fb/vec3propertytrackdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [Vec3PropertyTrackData](/vext/ref/fb/vec3propertytrackdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
