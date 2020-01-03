---
title: TransformPartPropertyTrackData
---
### Base Classes

[PropertyTrackData](/vext/ref/fb/propertytrackdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| TransformPartPropertyTrackData()                                                          | Create a new instance of this container type.                                                                                                       |
| TransformPartPropertyTrackData(TransformPartPropertyTrackData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| TransformPartPropertyTrackData([PropertyTrackData](/vext/ref/fb/propertytrackdata/) other)              | Upcast an instance of type [PropertyTrackData](/vext/ref/fb/propertytrackdata/) to [TransformPartPropertyTrackData](/vext/ref/fb/transformpartpropertytrackdata/).              |
| TransformPartPropertyTrackData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformPartPropertyTrackData](/vext/ref/fb/transformpartpropertytrackdata/). |

## Properties

| Name          | Type                                   | Description |
| ------------- | -------------------------------------- | ----------- |
| transformPart | [TransformPart](/vext/ref/fb/transformpart/)         |             |
| preInfinity   | [CurveInfinityType](/vext/ref/fb/curveinfinitytype/) |             |
| postInfinity  | [CurveInfinityType](/vext/ref/fb/curveinfinitytype/) |             |
| keyStartIndex | number                                 |             |
| resourceName  | string                                 |             |
| keyCount      | number                                 |             |
| weighted      | bool                                   |             |
| isStatic      | bool                                   |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TransformPartPropertyTrackData](/vext/ref/fb/transformpartpropertytrackdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformPartPropertyTrackData](/vext/ref/fb/transformpartpropertytrackdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
