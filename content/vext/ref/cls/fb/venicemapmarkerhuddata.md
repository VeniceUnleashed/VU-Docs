---
title: VeniceMapMarkerHudData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| VeniceMapMarkerHudData()                                                          | Create a new instance of this container type.                                                                                       |
| VeniceMapMarkerHudData(VeniceMapMarkerHudData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| VeniceMapMarkerHudData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VeniceMapMarkerHudData](VeniceMapMarkerHudData). |

## Properties

| Name | Type                   | Description |
| ---- | ---------------------- | ----------- |
| icon | [UIHudIcon](UIHudIcon) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceMapMarkerHudData](VeniceMapMarkerHudData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VeniceMapMarkerHudData](VeniceMapMarkerHudData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
