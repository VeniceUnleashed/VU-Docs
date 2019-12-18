---
title: GameAIWeaponData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| GameAIWeaponData()                                                          | Create a new instance of this container type.                                                                           |
| GameAIWeaponData(GameAIWeaponData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| GameAIWeaponData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [GameAIWeaponData](GameAIWeaponData).                                      |
| GameAIWeaponData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GameAIWeaponData](GameAIWeaponData). |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [GameAIWeaponData](GameAIWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GameAIWeaponData](GameAIWeaponData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
