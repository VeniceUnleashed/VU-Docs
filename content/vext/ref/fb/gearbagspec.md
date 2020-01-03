---
title: GearBagSpec
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| GearBagSpec()                                                          | Create a new instance of this container type.                                                                 |
| GearBagSpec(GearBagSpec other)                                         | Create a reference copy of an instance of the same type.                                                      |
| GearBagSpec([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [GearBagSpec](/vext/ref/fb/gearbagspec/).                                      |
| GearBagSpec([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GearBagSpec](/vext/ref/fb/gearbagspec/). |

## Properties

| Name                | Type                           | Description |
| ------------------- | ------------------------------ | ----------- |
| maxPrimaryWeapons   | number                         |             |
| maxSecondaryWeapons | number                         |             |
| maxSidearms         | number                         |             |
| maxGadgetsPerSlot   | number                         |             |
| gadgetSlots         | number                         |             |
| childSpecs          | [GearBagSpec](/vext/ref/fb/gearbagspec/)\[\] |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [GearBagSpec](/vext/ref/fb/gearbagspec/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GearBagSpec](/vext/ref/fb/gearbagspec/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
