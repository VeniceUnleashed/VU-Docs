---
title: HudCapturePointTrackerData (Frostbite Container)
---
### Base Classes

[HudTrackerData](HudTrackerData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| HudCapturePointTrackerData()                                                          | Create a new instance of this container type.                                                                                               |
| HudCapturePointTrackerData(HudCapturePointTrackerData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| HudCapturePointTrackerData([HudTrackerData](HudTrackerData) other)                    | Upcast an instance of type [HudTrackerData](HudTrackerData) to [HudCapturePointTrackerData](HudCapturePointTrackerData).                    |
| HudCapturePointTrackerData([UIPartData](UIPartData) other)                            | Upcast an instance of type [UIPartData](UIPartData) to [HudCapturePointTrackerData](HudCapturePointTrackerData).                            |
| HudCapturePointTrackerData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [HudCapturePointTrackerData](HudCapturePointTrackerData). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [HudCapturePointTrackerData](HudCapturePointTrackerData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [HudCapturePointTrackerData](HudCapturePointTrackerData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
