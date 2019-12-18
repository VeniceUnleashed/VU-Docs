---
title: LinearMovingBodyData (Frostbite Container)
---
### Base Classes

[MovingBodyData](MovingBodyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LinearMovingBodyData()                                                          | Create a new instance of this container type.                                                                                   |
| LinearMovingBodyData(LinearMovingBodyData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LinearMovingBodyData([MovingBodyData](MovingBodyData) other)                    | Upcast an instance of type [MovingBodyData](MovingBodyData) to [LinearMovingBodyData](LinearMovingBodyData).                    |
| LinearMovingBodyData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LinearMovingBodyData](LinearMovingBodyData). |

## Properties

| Name     | Type                              | Description |
| -------- | --------------------------------- | ----------- |
| axis     | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| start    | [EndPointData](EndPointData)      |             |
| endValue | [EndPointData](EndPointData)      |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LinearMovingBodyData](LinearMovingBodyData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LinearMovingBodyData](LinearMovingBodyData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
