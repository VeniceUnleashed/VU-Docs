---
title: SoldierWeaponData
---
### Base Classes

[WeaponEntityData](/vext/ref/fb/weaponentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponData()                                                          | Create a new instance of this container type.                                                                             |
| SoldierWeaponData(SoldierWeaponData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| SoldierWeaponData([WeaponEntityData](/vext/ref/fb/weaponentitydata/) other)                | Upcast an instance of type [WeaponEntityData](/vext/ref/fb/weaponentitydata/) to [SoldierWeaponData](/vext/ref/fb/soldierweapondata/).                |
| SoldierWeaponData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [SoldierWeaponData](/vext/ref/fb/soldierweapondata/).                    |
| SoldierWeaponData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [SoldierWeaponData](/vext/ref/fb/soldierweapondata/).              |
| SoldierWeaponData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SoldierWeaponData](/vext/ref/fb/soldierweapondata/).                            |
| SoldierWeaponData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoldierWeaponData](/vext/ref/fb/soldierweapondata/).                    |
| SoldierWeaponData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoldierWeaponData](/vext/ref/fb/soldierweapondata/).              |
| SoldierWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponData](/vext/ref/fb/soldierweapondata/). |

## Properties

| Name                               | Type                                                               | Description |
| ---------------------------------- | ------------------------------------------------------------------ | ----------- |
| interactionOffset                  | [Vec3](/vext/ref/shared/class/vec3)                                  |             |
| weaponModifierData                 | [WeaponModifierData](/vext/ref/fb/weaponmodifierdata/)\[\]                       |             |
| aimingController                   | [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata/)         |             |
| firstPersonCamera                  | [FirstPersonCameraData](/vext/ref/fb/firstpersoncameradata/)                     |             |
| hud                                | [HudData](/vext/ref/fb/huddata/)                                                 |             |
| damageGiverName                    | string                                                             |             |
| pickupSettings                     | [PickupSettingsData](/vext/ref/fb/pickupsettingsdata/)                           |             |
| animBaseSet                        | [WeaponAnimBaseSetEnum](/vext/ref/fb/weaponanimbasesetenum/)                     |             |
| animationData                      | [AntPackageAsset](/vext/ref/fb/antpackageasset/)                                 |             |
| renderFov                          | number                                                             |             |
| zoomRenderFov                      | number                                                             |             |
| streamGroup1p                      | [StreamGroupData](/vext/ref/fb/streamgroupdata/)                                 |             |
| voiceOverInfo                      | [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo/)                         |             |
| quickThrowType                     | [QuickThrowTypeEnum](/vext/ref/fb/quickthrowtypeenum/)                           |             |
| customization                      | [SoldierWeaponCustomizationAsset](/vext/ref/fb/soldierweaponcustomizationasset/) |             |
| weaponFloatParam                   | number                                                             |             |
| sockets                            | [SocketData](/vext/ref/fb/socketdata/)\[\]                                       |             |
| switchWeaponStateInputAction       | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/)                       |             |
| soldierWeaponBlueprint             | [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/)                   |             |
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
| [SoldierWeaponData](/vext/ref/fb/soldierweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierWeaponData](/vext/ref/fb/soldierweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
