---
title: VeniceMapMarkerHudData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| VeniceMapMarkerHudData()                                                          | Create a new instance of this container type.                                                                                       |
| VeniceMapMarkerHudData(VeniceMapMarkerHudData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| VeniceMapMarkerHudData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceMapMarkerHudData](/vext/ref/fb/venicemapmarkerhuddata/). |

## Properties

| Name | Type                   | Description |
| ---- | ---------------------- | ----------- |
| icon | [UIHudIcon](/vext/ref/fb/uihudicon/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceMapMarkerHudData](/vext/ref/fb/venicemapmarkerhuddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceMapMarkerHudData](/vext/ref/fb/venicemapmarkerhuddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
