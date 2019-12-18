---
title: GearBagSpec (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| GearBagSpec()                                                          | Create a new instance of this container type.                                                                 |
| GearBagSpec(GearBagSpec other)                                         | Create a reference copy of an instance of the same type.                                                      |
| GearBagSpec([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [GearBagSpec](GearBagSpec).                                      |
| GearBagSpec([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GearBagSpec](GearBagSpec). |

## Properties

| Name                | Type                           | Description |
| ------------------- | ------------------------------ | ----------- |
| maxPrimaryWeapons   | number                         |             |
| maxSecondaryWeapons | number                         |             |
| maxSidearms         | number                         |             |
| maxGadgetsPerSlot   | number                         |             |
| gadgetSlots         | number                         |             |
| childSpecs          | [GearBagSpec](GearBagSpec)\[\] |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [GearBagSpec](GearBagSpec) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GearBagSpec](GearBagSpec) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
