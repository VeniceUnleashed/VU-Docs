---
title: MultipleTargetPainterWeaponData
---
### Base Classes

[WeaponData](/vext/ref/fb/weapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| MultipleTargetPainterWeaponData()                                                          | Create a new instance of this container type.                                                                                                         |
| MultipleTargetPainterWeaponData(MultipleTargetPainterWeaponData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| MultipleTargetPainterWeaponData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [MultipleTargetPainterWeaponData](/vext/ref/fb/multipletargetpainterweapondata/).                            |
| MultipleTargetPainterWeaponData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [MultipleTargetPainterWeaponData](/vext/ref/fb/multipletargetpainterweapondata/).                                |
| MultipleTargetPainterWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MultipleTargetPainterWeaponData](/vext/ref/fb/multipletargetpainterweapondata/). |

## Properties

| Name                | Type                         | Description |
| ------------------- | ---------------------------- | ----------- |
| spottingBehavior    | [SpottingType](/vext/ref/fb/spottingtype/) |             |
| timeObjectIsPainted | number                       |             |
| angle               | number                       |             |
| timeObjectIsSpotted | number                       |             |
| range               | number                       |             |
| useSpotting         | bool                         |             |
| useLaserPainting    | bool                         |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MultipleTargetPainterWeaponData](/vext/ref/fb/multipletargetpainterweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MultipleTargetPainterWeaponData](/vext/ref/fb/multipletargetpainterweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
