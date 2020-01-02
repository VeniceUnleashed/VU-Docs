---
title: LinearMovingBodyData
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
| LinearMovingBodyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LinearMovingBodyData](LinearMovingBodyData). |

## Properties

| Name     | Type                              | Description |
| -------- | --------------------------------- | ----------- |
| axis     | [Vec3](/vext/ref/shared/class/Vec3) |             |
| start    | [EndPointData](EndPointData)      |             |
| endValue | [EndPointData](EndPointData)      |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LinearMovingBodyData](LinearMovingBodyData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LinearMovingBodyData](LinearMovingBodyData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
