---
title: Vec4PropertyTrackData
---
### Base Classes

[SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Vec4PropertyTrackData()                                                          | Create a new instance of this container type.                                                                                     |
| Vec4PropertyTrackData(Vec4PropertyTrackData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| Vec4PropertyTrackData([SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/) other)  | Upcast an instance of type [SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/) to [Vec4PropertyTrackData](/vext/ref/fb/vec4propertytrackdata/).  |
| Vec4PropertyTrackData([PropertyTrackData](/vext/ref/fb/propertytrackdata/) other)              | Upcast an instance of type [PropertyTrackData](/vext/ref/fb/propertytrackdata/) to [Vec4PropertyTrackData](/vext/ref/fb/vec4propertytrackdata/).              |
| Vec4PropertyTrackData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Vec4PropertyTrackData](/vext/ref/fb/vec4propertytrackdata/). |

## Properties

| Name   | Type                                  | Description |
| ------ | ------------------------------------- | ----------- |
| values | [Vec4](/vext/ref/shared/class/vec4)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [Vec4PropertyTrackData](/vext/ref/fb/vec4propertytrackdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [Vec4PropertyTrackData](/vext/ref/fb/vec4propertytrackdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
