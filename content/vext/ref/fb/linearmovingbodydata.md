---
title: LinearMovingBodyData
---
### Base Classes

[MovingBodyData](/vext/ref/fb/movingbodydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LinearMovingBodyData()                                                          | Create a new instance of this container type.                                                                                   |
| LinearMovingBodyData(LinearMovingBodyData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LinearMovingBodyData([MovingBodyData](/vext/ref/fb/movingbodydata/) other)                    | Upcast an instance of type [MovingBodyData](/vext/ref/fb/movingbodydata/) to [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata/).                    |
| LinearMovingBodyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata/). |

## Properties

| Name     | Type                              | Description |
| -------- | --------------------------------- | ----------- |
| axis     | [Vec3](/vext/ref/shared/class/vec3) |             |
| start    | [EndPointData](/vext/ref/fb/endpointdata/)      |             |
| endValue | [EndPointData](/vext/ref/fb/endpointdata/)      |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
