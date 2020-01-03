---
title: VehicleDeployWeaponData
---
### Base Classes

[WeaponData](/vext/ref/fb/weapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleDeployWeaponData()                                                          | Create a new instance of this container type.                                                                                         |
| VehicleDeployWeaponData(VehicleDeployWeaponData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| VehicleDeployWeaponData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [VehicleDeployWeaponData](/vext/ref/fb/vehicledeployweapondata/).                            |
| VehicleDeployWeaponData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [VehicleDeployWeaponData](/vext/ref/fb/vehicledeployweapondata/).                                |
| VehicleDeployWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleDeployWeaponData](/vext/ref/fb/vehicledeployweapondata/). |

## Properties

| Name                      | Type                               | Description |
| ------------------------- | ---------------------------------- | ----------- |
| deployAreaRadius          | number                             |             |
| previewObject             | [ObjectBlueprint](/vext/ref/fb/objectblueprint/) |             |
| deployAreaGroundRayLength | number                             |             |
| deployAreaGroundFlatness  | number                             |             |
| usePreview                | bool                               |             |
| checkClearSky             | bool                               |             |
| canRemoteEnterVehicle     | bool                               |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleDeployWeaponData](/vext/ref/fb/vehicledeployweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleDeployWeaponData](/vext/ref/fb/vehicledeployweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
