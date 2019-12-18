---
title: VehicleDeployWeaponData (Frostbite Container)
---
### Base Classes

[WeaponData](WeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleDeployWeaponData()                                                          | Create a new instance of this container type.                                                                                         |
| VehicleDeployWeaponData(VehicleDeployWeaponData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| VehicleDeployWeaponData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [VehicleDeployWeaponData](VehicleDeployWeaponData).                            |
| VehicleDeployWeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [VehicleDeployWeaponData](VehicleDeployWeaponData).                                |
| VehicleDeployWeaponData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VehicleDeployWeaponData](VehicleDeployWeaponData). |

## Properties

| Name                      | Type                               | Description |
| ------------------------- | ---------------------------------- | ----------- |
| deployAreaRadius          | number                             |             |
| previewObject             | [ObjectBlueprint](ObjectBlueprint) |             |
| deployAreaGroundRayLength | number                             |             |
| deployAreaGroundFlatness  | number                             |             |
| usePreview                | bool                               |             |
| checkClearSky             | bool                               |             |
| canRemoteEnterVehicle     | bool                               |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleDeployWeaponData](VehicleDeployWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VehicleDeployWeaponData](VehicleDeployWeaponData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
