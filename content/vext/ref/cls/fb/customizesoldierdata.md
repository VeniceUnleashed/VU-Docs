---
title: CustomizeSoldierData (Frostbite Container)
---
### Base Classes

[CustomizeCharacterData](CustomizeCharacterData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| CustomizeSoldierData()                                                          | Create a new instance of this container type.                                                                                   |
| CustomizeSoldierData(CustomizeSoldierData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| CustomizeSoldierData([CustomizeCharacterData](CustomizeCharacterData) other)    | Upcast an instance of type [CustomizeCharacterData](CustomizeCharacterData) to [CustomizeSoldierData](CustomizeSoldierData).    |
| CustomizeSoldierData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [CustomizeSoldierData](CustomizeSoldierData).                                      |
| CustomizeSoldierData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CustomizeSoldierData](CustomizeSoldierData). |

## Properties

| Name                     | Type                                           | Description |
| ------------------------ | ---------------------------------------------- | ----------- |
| weapons                  | [UnlockWeaponAndSlot](UnlockWeaponAndSlot)\[\] |             |
| activeSlot               | [WeaponSlot](WeaponSlot)                       |             |
| deathPickup              | [PickupEntityAsset](PickupEntityAsset)         |             |
| removeAllExistingWeapons | bool                                           |             |
| disableDeathPickup       | bool                                           |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [CustomizeSoldierData](CustomizeSoldierData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CustomizeSoldierData](CustomizeSoldierData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
