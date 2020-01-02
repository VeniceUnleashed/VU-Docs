---
title: HudTrackerData
---
### Base Classes

[UIPartData](UIPartData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| HudTrackerData()                                                          | Create a new instance of this container type.                                                                       |
| HudTrackerData(HudTrackerData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| HudTrackerData([UIPartData](UIPartData) other)                            | Upcast an instance of type [UIPartData](UIPartData) to [HudTrackerData](HudTrackerData).                            |
| HudTrackerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HudTrackerData](HudTrackerData). |

## Properties

| Name                | Type   | Description |
| ------------------- | ------ | ----------- |
| maxDistance         | number |             |
| startFadeDistance   | number |             |
| secondFadeDistance  | number |             |
| fadeMinAlpha        | number |             |
| iconSize            | number |             |
| trackerHudRadiusX   | number |             |
| trackerHudRadiusY   | number |             |
| distanceTextOffsetY | number |             |
| showDistance        | bool   |             |
| displayExtraInfo    | bool   |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [HudTrackerData](HudTrackerData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HudTrackerData](HudTrackerData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
