---
title: GunSwayData
---
### Base Classes

[WeaponSwayData](/vext/ref/fb/weaponswaydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| GunSwayData()                                                          | Create a new instance of this container type.                                                                 |
| GunSwayData(GunSwayData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| GunSwayData([WeaponSwayData](/vext/ref/fb/weaponswaydata/) other)                    | Upcast an instance of type [WeaponSwayData](/vext/ref/fb/weaponswaydata/) to [GunSwayData](/vext/ref/fb/gunswaydata/).                    |
| GunSwayData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GunSwayData](/vext/ref/fb/gunswaydata/). |

## Properties

| Name                               | Type                                                           | Description |
| ---------------------------------- | -------------------------------------------------------------- | ----------- |
| stand                              | [GunSwayStandData](/vext/ref/fb/gunswaystanddata/)                           |             |
| crouch                             | [GunSwayCrouchProneData](/vext/ref/fb/gunswaycrouchpronedata/)               |             |
| prone                              | [GunSwayCrouchProneData](/vext/ref/fb/gunswaycrouchpronedata/)               |             |
| proneToCrouch                      | [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition/)             |             |
| proneToStand                       | [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition/)             |             |
| crouchToProne                      | [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition/)             |             |
| crouchToStand                      | [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition/)             |             |
| standToProne                       | [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition/)             |             |
| standToCrouch                      | [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition/)             |             |
| suppressionModifierUnzoomed        | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata/) |             |
| suppressionModifierZoomed          | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata/) |             |
| modifiers                          | [GunSwayModifierData](/vext/ref/fb/gunswaymodifierdata/)\[\]                 |             |
| deviationScaleFactorZoom           | number                                                         |             |
| gameplayDeviationScaleFactorZoom   | number                                                         |             |
| deviationScaleFactorNoZoom         | number                                                         |             |
| gameplayDeviationScaleFactorNoZoom | number                                                         |             |
| shootingRecoilDecreaseScale        | number                                                         |             |
| firstShotRecoilMultiplier          | number                                                         |             |
| cameraRecoil                       | [CameraRecoilData](/vext/ref/fb/camerarecoildata/)                           |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [GunSwayData](/vext/ref/fb/gunswaydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GunSwayData](/vext/ref/fb/gunswaydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
