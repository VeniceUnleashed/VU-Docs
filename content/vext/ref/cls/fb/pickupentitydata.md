---
title: PickupEntityData (Frostbite Container)
---
### Base Classes

[GamePhysicsEntityData](GamePhysicsEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| PickupEntityData()                                                          | Create a new instance of this container type.                                                                           |
| PickupEntityData(PickupEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| PickupEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [PickupEntityData](PickupEntityData).      |
| PickupEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [PickupEntityData](PickupEntityData).                    |
| PickupEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [PickupEntityData](PickupEntityData).              |
| PickupEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PickupEntityData](PickupEntityData).                            |
| PickupEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PickupEntityData](PickupEntityData).                    |
| PickupEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PickupEntityData](PickupEntityData).              |
| PickupEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PickupEntityData](PickupEntityData). |

## Properties

| Name                         | Type                                 | Description |
| ---------------------------- | ------------------------------------ | ----------- |
| randomizeAmmoOnDropForPlayer | [PickupPlayerEnum](PickupPlayerEnum) |             |
| minRandomClipAmmoPercent     | number                               |             |
| physicsBlueprint             | [ObjectBlueprint](ObjectBlueprint)   |             |
| mesh                         | [MeshAsset](MeshAsset)               |             |
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
| [PickupEntityData](PickupEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PickupEntityData](PickupEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
