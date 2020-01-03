---
title: BoolPropertyTrackData
---
### Base Classes

[SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| BoolPropertyTrackData()                                                          | Create a new instance of this container type.                                                                                     |
| BoolPropertyTrackData(BoolPropertyTrackData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| BoolPropertyTrackData([SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/) other)  | Upcast an instance of type [SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/) to [BoolPropertyTrackData](/vext/ref/fb/boolpropertytrackdata/).  |
| BoolPropertyTrackData([PropertyTrackData](/vext/ref/fb/propertytrackdata/) other)              | Upcast an instance of type [PropertyTrackData](/vext/ref/fb/propertytrackdata/) to [BoolPropertyTrackData](/vext/ref/fb/boolpropertytrackdata/).              |
| BoolPropertyTrackData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BoolPropertyTrackData](/vext/ref/fb/boolpropertytrackdata/). |

## Properties

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| values | bool\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [BoolPropertyTrackData](/vext/ref/fb/boolpropertytrackdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BoolPropertyTrackData](/vext/ref/fb/boolpropertytrackdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
