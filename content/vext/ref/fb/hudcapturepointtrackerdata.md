---
title: HudCapturePointTrackerData
---
### Base Classes

[HudTrackerData](/vext/ref/fb/hudtrackerdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| HudCapturePointTrackerData()                                                          | Create a new instance of this container type.                                                                                               |
| HudCapturePointTrackerData(HudCapturePointTrackerData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| HudCapturePointTrackerData([HudTrackerData](/vext/ref/fb/hudtrackerdata/) other)                    | Upcast an instance of type [HudTrackerData](/vext/ref/fb/hudtrackerdata/) to [HudCapturePointTrackerData](/vext/ref/fb/hudcapturepointtrackerdata/).                    |
| HudCapturePointTrackerData([UIPartData](/vext/ref/fb/uipartdata/) other)                            | Upcast an instance of type [UIPartData](/vext/ref/fb/uipartdata/) to [HudCapturePointTrackerData](/vext/ref/fb/hudcapturepointtrackerdata/).                            |
| HudCapturePointTrackerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HudCapturePointTrackerData](/vext/ref/fb/hudcapturepointtrackerdata/). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [HudCapturePointTrackerData](/vext/ref/fb/hudcapturepointtrackerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HudCapturePointTrackerData](/vext/ref/fb/hudcapturepointtrackerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
