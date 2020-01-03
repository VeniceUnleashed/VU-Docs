---
title: SimplePropertyTrackData
---
### Base Classes

[PropertyTrackData](/vext/ref/fb/propertytrackdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| SimplePropertyTrackData()                                                          | Create a new instance of this container type.                                                                                         |
| SimplePropertyTrackData(SimplePropertyTrackData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| SimplePropertyTrackData([PropertyTrackData](/vext/ref/fb/propertytrackdata/) other)              | Upcast an instance of type [PropertyTrackData](/vext/ref/fb/propertytrackdata/) to [SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/).              |
| SimplePropertyTrackData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/). |

## Properties

| Name              | Type                                   | Description |
| ----------------- | -------------------------------------- | ----------- |
| interpolationType | [InterpolationType](/vext/ref/fb/interpolationtype/) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SimplePropertyTrackData](/vext/ref/fb/simplepropertytrackdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
