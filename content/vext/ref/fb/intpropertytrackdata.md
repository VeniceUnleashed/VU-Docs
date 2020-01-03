---
title: IntPropertyTrackData
---
### Base Classes

[SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| IntPropertyTrackData()                                                          | Create a new instance of this container type.                                                                                   |
| IntPropertyTrackData(IntPropertyTrackData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| IntPropertyTrackData([SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/) other)  | Upcast an instance of type [SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/) to [IntPropertyTrackData](/vext/ref/fb/intpropertytrackdata/).  |
| IntPropertyTrackData([PropertyTrackData](/vext/ref/fb/propertytrackdata/) other)              | Upcast an instance of type [PropertyTrackData](/vext/ref/fb/propertytrackdata/) to [IntPropertyTrackData](/vext/ref/fb/intpropertytrackdata/).              |
| IntPropertyTrackData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [IntPropertyTrackData](/vext/ref/fb/intpropertytrackdata/). |

## Properties

| Name   | Type       | Description |
| ------ | ---------- | ----------- |
| values | number\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [IntPropertyTrackData](/vext/ref/fb/intpropertytrackdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [IntPropertyTrackData](/vext/ref/fb/intpropertytrackdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
