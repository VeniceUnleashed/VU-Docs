---
title: GunSwayModifierData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| GunSwayModifierData()                                                          | Create a new instance of this container type.                                                                                 |
| GunSwayModifierData(GunSwayModifierData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| GunSwayModifierData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [GunSwayModifierData](GunSwayModifierData).                                      |
| GunSwayModifierData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GunSwayModifierData](GunSwayModifierData). |

## Properties

| Name                     | Type                                                           | Description |
| ------------------------ | -------------------------------------------------------------- | ----------- |
| unlockAsset              | [UnlockAssetBase](UnlockAssetBase)                             |             |
| standZoomModifier        | [GunSwayStanceZoomModifierData](GunSwayStanceZoomModifierData) |             |
| standNoZoomModifier      | [GunSwayStanceZoomModifierData](GunSwayStanceZoomModifierData) |             |
| crouchZoomModifier       | [GunSwayStanceZoomModifierData](GunSwayStanceZoomModifierData) |             |
| crouchNoZoomModifier     | [GunSwayStanceZoomModifierData](GunSwayStanceZoomModifierData) |             |
| proneZoomModifier        | [GunSwayStanceZoomModifierData](GunSwayStanceZoomModifierData) |             |
| proneNoZoomModifier      | [GunSwayStanceZoomModifierData](GunSwayStanceZoomModifierData) |             |
| onlyInSupportedShooting  | bool                                                           |             |
| onlyOnWeaponLightEnabled | bool                                                           |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [GunSwayModifierData](GunSwayModifierData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GunSwayModifierData](GunSwayModifierData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
