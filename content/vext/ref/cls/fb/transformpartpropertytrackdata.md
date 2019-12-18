---
title: TransformPartPropertyTrackData (Frostbite Container)
---
### Base Classes

[PropertyTrackData](PropertyTrackData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| TransformPartPropertyTrackData()                                                          | Create a new instance of this container type.                                                                                                       |
| TransformPartPropertyTrackData(TransformPartPropertyTrackData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| TransformPartPropertyTrackData([PropertyTrackData](PropertyTrackData) other)              | Upcast an instance of type [PropertyTrackData](PropertyTrackData) to [TransformPartPropertyTrackData](TransformPartPropertyTrackData).              |
| TransformPartPropertyTrackData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TransformPartPropertyTrackData](TransformPartPropertyTrackData). |

## Properties

| Name          | Type                                   | Description |
| ------------- | -------------------------------------- | ----------- |
| transformPart | [TransformPart](TransformPart)         |             |
| preInfinity   | [CurveInfinityType](CurveInfinityType) |             |
| postInfinity  | [CurveInfinityType](CurveInfinityType) |             |
| keyStartIndex | number                                 |             |
| resourceName  | string                                 |             |
| keyCount      | number                                 |             |
| weighted      | bool                                   |             |
| isStatic      | bool                                   |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TransformPartPropertyTrackData](TransformPartPropertyTrackData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TransformPartPropertyTrackData](TransformPartPropertyTrackData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
