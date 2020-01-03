---
title: DropWeaponComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| DropWeaponComponentData()                                                          | Create a new instance of this container type.                                                                                         |
| DropWeaponComponentData(DropWeaponComponentData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| DropWeaponComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [DropWeaponComponentData](DropWeaponComponentData).                      |
| DropWeaponComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DropWeaponComponentData](DropWeaponComponentData).                    |
| DropWeaponComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DropWeaponComponentData](DropWeaponComponentData).              |
| DropWeaponComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DropWeaponComponentData](DropWeaponComponentData). |

## Properties

| Name                              | Type                                         | Description |
| --------------------------------- | -------------------------------------------- | ----------- |
| deathPickup                       | [PickupEntityAsset](PickupEntityAsset)       |             |
| actionIdentifier                  | [EntryInputActionEnum](EntryInputActionEnum) |             |
| dropWeaponAfterTime               | number                                       |             |
| pickup                            | [PickupEntityAsset](PickupEntityAsset)       |             |
| excludedWeaponSlots               | [WeaponSlot](WeaponSlot)\[\]                 |             |
| weaponDropTime                    | number                                       |             |
| listenToAnimationWeaponDropSignal | bool                                         |             |
| allowDropWeaponOnAction           | bool                                         |             |
| requireWeaponSlotEmpty            | bool                                         |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DropWeaponComponentData](DropWeaponComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DropWeaponComponentData](DropWeaponComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
