---
title: CustomizeSoldierData
---
### Base Classes

[CustomizeCharacterData](/vext/ref/fb/customizecharacterdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| CustomizeSoldierData()                                                          | Create a new instance of this container type.                                                                                   |
| CustomizeSoldierData(CustomizeSoldierData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| CustomizeSoldierData([CustomizeCharacterData](/vext/ref/fb/customizecharacterdata/) other)    | Upcast an instance of type [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata/) to [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata/).    |
| CustomizeSoldierData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata/).                                      |
| CustomizeSoldierData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata/). |

## Properties

| Name                     | Type                                           | Description |
| ------------------------ | ---------------------------------------------- | ----------- |
| weapons                  | [UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot/)\[\] |             |
| activeSlot               | [WeaponSlot](/vext/ref/fb/weaponslot/)                       |             |
| deathPickup              | [PickupEntityAsset](/vext/ref/fb/pickupentityasset/)         |             |
| removeAllExistingWeapons | bool                                           |             |
| disableDeathPickup       | bool                                           |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
