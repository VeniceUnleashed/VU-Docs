---
title: PickupEntityData
---
### Base Classes

[GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| PickupEntityData()                                                          | Create a new instance of this container type.                                                                           |
| PickupEntityData(PickupEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| PickupEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [PickupEntityData](/vext/ref/fb/pickupentitydata/).      |
| PickupEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [PickupEntityData](/vext/ref/fb/pickupentitydata/).                    |
| PickupEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [PickupEntityData](/vext/ref/fb/pickupentitydata/).              |
| PickupEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PickupEntityData](/vext/ref/fb/pickupentitydata/).                            |
| PickupEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PickupEntityData](/vext/ref/fb/pickupentitydata/).                    |
| PickupEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PickupEntityData](/vext/ref/fb/pickupentitydata/).              |
| PickupEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PickupEntityData](/vext/ref/fb/pickupentitydata/). |

## Properties

| Name                         | Type                                 | Description |
| ---------------------------- | ------------------------------------ | ----------- |
| randomizeAmmoOnDropForPlayer | [PickupPlayerEnum](/vext/ref/fb/pickupplayerenum/) |             |
| minRandomClipAmmoPercent     | number                               |             |
| physicsBlueprint             | [ObjectBlueprint](/vext/ref/fb/objectblueprint/)   |             |
| mesh                         | [MeshAsset](/vext/ref/fb/meshasset/)               |             |
| maxRandomClipAmmoPercent     | number                               |             |
| preferredWeaponSlot          | number                               |             |
| timeToLive                   | number                               |             |
| minRandomSpareAmmoPercent    | number                               |             |
| interactionRadius            | number                               |             |
| maxRandomSpareAmmoPercent    | number                               |             |
| unspawnOnPickup              | bool                                 |             |
| unspawnOnAmmoPickup          | bool                                 |             |
| forceWeaponSlotSelection     | bool                                 |             |
| displayInMiniMap             | bool                                 |             |
| hasAutomaticAmmoPickup       | bool                                 |             |
| useWeaponMesh                | bool                                 |             |
| allowPickup                  | bool                                 |             |
| contentIsStatic              | bool                                 |             |
| positionIsStatic             | bool                                 |             |
| ignoreNullWeaponSlots        | bool                                 |             |
| replaceAllContent            | bool                                 |             |
| removeWeaponOnDrop           | bool                                 |             |
| sendPlayerInEventOnPickup    | bool                                 |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [PickupEntityData](/vext/ref/fb/pickupentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PickupEntityData](/vext/ref/fb/pickupentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
