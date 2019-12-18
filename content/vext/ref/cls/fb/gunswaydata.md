---
title: GunSwayData (Frostbite Container)
---
### Base Classes

[WeaponSwayData](WeaponSwayData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| GunSwayData()                                                          | Create a new instance of this container type.                                                                 |
| GunSwayData(GunSwayData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| GunSwayData([WeaponSwayData](WeaponSwayData) other)                    | Upcast an instance of type [WeaponSwayData](WeaponSwayData) to [GunSwayData](GunSwayData).                    |
| GunSwayData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GunSwayData](GunSwayData). |

## Properties

| Name                               | Type                                                           | Description |
| ---------------------------------- | -------------------------------------------------------------- | ----------- |
| stand                              | [GunSwayStandData](GunSwayStandData)                           |             |
| crouch                             | [GunSwayCrouchProneData](GunSwayCrouchProneData)               |             |
| prone                              | [GunSwayCrouchProneData](GunSwayCrouchProneData)               |             |
| proneToCrouch                      | [GunSwayStanceTransition](GunSwayStanceTransition)             |             |
| proneToStand                       | [GunSwayStanceTransition](GunSwayStanceTransition)             |             |
| crouchToProne                      | [GunSwayStanceTransition](GunSwayStanceTransition)             |             |
| crouchToStand                      | [GunSwayStanceTransition](GunSwayStanceTransition)             |             |
| standToProne                       | [GunSwayStanceTransition](GunSwayStanceTransition)             |             |
| standToCrouch                      | [GunSwayStanceTransition](GunSwayStanceTransition)             |             |
| suppressionModifierUnzoomed        | [GunSwayStanceZoomModifierData](GunSwayStanceZoomModifierData) |             |
| suppressionModifierZoomed          | [GunSwayStanceZoomModifierData](GunSwayStanceZoomModifierData) |             |
| modifiers                          | [GunSwayModifierData](GunSwayModifierData)\[\]                 |             |
| deviationScaleFactorZoom           | number                                                         |             |
| gameplayDeviationScaleFactorZoom   | number                                                         |             |
| deviationScaleFactorNoZoom         | number                                                         |             |
| gameplayDeviationScaleFactorNoZoom | number                                                         |             |
| shootingRecoilDecreaseScale        | number                                                         |             |
| firstShotRecoilMultiplier          | number                                                         |             |
| cameraRecoil                       | [CameraRecoilData](CameraRecoilData)                           |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [GunSwayData](GunSwayData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GunSwayData](GunSwayData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
