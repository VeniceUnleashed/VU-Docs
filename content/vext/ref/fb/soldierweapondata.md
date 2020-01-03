---
title: SoldierWeaponData
---
### Base Classes

[WeaponEntityData](WeaponEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponData()                                                          | Create a new instance of this container type.                                                                             |
| SoldierWeaponData(SoldierWeaponData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| SoldierWeaponData([WeaponEntityData](WeaponEntityData) other)                | Upcast an instance of type [WeaponEntityData](WeaponEntityData) to [SoldierWeaponData](SoldierWeaponData).                |
| SoldierWeaponData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [SoldierWeaponData](SoldierWeaponData).                    |
| SoldierWeaponData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [SoldierWeaponData](SoldierWeaponData).              |
| SoldierWeaponData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SoldierWeaponData](SoldierWeaponData).                            |
| SoldierWeaponData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoldierWeaponData](SoldierWeaponData).                    |
| SoldierWeaponData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierWeaponData](SoldierWeaponData).              |
| SoldierWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponData](SoldierWeaponData). |

## Properties

| Name                               | Type                                                               | Description |
| ---------------------------------- | ------------------------------------------------------------------ | ----------- |
| interactionOffset                  | [Vec3](/vext/ref/shared/class/vec3)                                  |             |
| weaponModifierData                 | [WeaponModifierData](WeaponModifierData)\[\]                       |             |
| aimingController                   | [SoldierAimingSimulationData](SoldierAimingSimulationData)         |             |
| firstPersonCamera                  | [FirstPersonCameraData](FirstPersonCameraData)                     |             |
| hud                                | [HudData](HudData)                                                 |             |
| damageGiverName                    | string                                                             |             |
| pickupSettings                     | [PickupSettingsData](PickupSettingsData)                           |             |
| animBaseSet                        | [WeaponAnimBaseSetEnum](WeaponAnimBaseSetEnum)                     |             |
| animationData                      | [AntPackageAsset](AntPackageAsset)                                 |             |
| renderFov                          | number                                                             |             |
| zoomRenderFov                      | number                                                             |             |
| streamGroup1p                      | [StreamGroupData](StreamGroupData)                                 |             |
| voiceOverInfo                      | [EntityVoiceOverInfo](EntityVoiceOverInfo)                         |             |
| quickThrowType                     | [QuickThrowTypeEnum](QuickThrowTypeEnum)                           |             |
| customization                      | [SoldierWeaponCustomizationAsset](SoldierWeaponCustomizationAsset) |             |
| weaponFloatParam                   | number                                                             |             |
| sockets                            | [SocketData](SocketData)\[\]                                       |             |
| switchWeaponStateInputAction       | [EntryInputActionEnum](EntryInputActionEnum)                       |             |
| soldierWeaponBlueprint             | [SoldierWeaponBlueprint](SoldierWeaponBlueprint)                   |             |
| persistenceId                      | string                                                             |             |
| allowSwitchingToWeaponOutOfAmmo    | bool                                                               |             |
| hideWhenOutOfAmmo                  | bool                                                               |             |
| lowerOnOwnTeam                     | bool                                                               |             |
| redeployWhenSwitchingWeaponStates  | bool                                                               |             |
| useQuickThrowOnAutomaticSwitchback | bool                                                               |             |
| enableBreathControl                | bool                                                               |             |
| canBeInSupportedShooting           | bool                                                               |             |
| allowSwitchingToWeaponReloading    | bool                                                               |             |
| switchToPrimaryWhenOutOfAmmo       | bool                                                               |             |
| allowSwitchingToWeaponInVehicles   | bool                                                               |             |
| isSilenced                         | bool                                                               |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierWeaponData](SoldierWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierWeaponData](SoldierWeaponData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
