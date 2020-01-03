---
title: GunSwayModifierData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| GunSwayModifierData()                                                          | Create a new instance of this container type.                                                                                 |
| GunSwayModifierData(GunSwayModifierData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| GunSwayModifierData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [GunSwayModifierData](/vext/ref/fb/gunswaymodifierdata/).                                      |
| GunSwayModifierData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GunSwayModifierData](/vext/ref/fb/gunswaymodifierdata/). |

## Properties

| Name                     | Type                                                           | Description |
| ------------------------ | -------------------------------------------------------------- | ----------- |
| unlockAsset              | [UnlockAssetBase](/vext/ref/fb/unlockassetbase/)                             |             |
| standZoomModifier        | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata/) |             |
| standNoZoomModifier      | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata/) |             |
| crouchZoomModifier       | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata/) |             |
| crouchNoZoomModifier     | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata/) |             |
| proneZoomModifier        | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata/) |             |
| proneNoZoomModifier      | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata/) |             |
| onlyInSupportedShooting  | bool                                                           |             |
| onlyOnWeaponLightEnabled | bool                                                           |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [GunSwayModifierData](/vext/ref/fb/gunswaymodifierdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GunSwayModifierData](/vext/ref/fb/gunswaymodifierdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
