---
title: DropWeaponComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| DropWeaponComponentData()                                                          | Create a new instance of this container type.                                                                                         |
| DropWeaponComponentData(DropWeaponComponentData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| DropWeaponComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata/).                      |
| DropWeaponComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata/).                    |
| DropWeaponComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata/).              |
| DropWeaponComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata/). |

## Properties

| Name                              | Type                                         | Description |
| --------------------------------- | -------------------------------------------- | ----------- |
| deathPickup                       | [PickupEntityAsset](/vext/ref/fb/pickupentityasset/)       |             |
| actionIdentifier                  | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/) |             |
| dropWeaponAfterTime               | number                                       |             |
| pickup                            | [PickupEntityAsset](/vext/ref/fb/pickupentityasset/)       |             |
| excludedWeaponSlots               | [WeaponSlot](/vext/ref/fb/weaponslot/)\[\]                 |             |
| weaponDropTime                    | number                                       |             |
| listenToAnimationWeaponDropSignal | bool                                         |             |
| allowDropWeaponOnAction           | bool                                         |             |
| requireWeaponSlotEmpty            | bool                                         |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
