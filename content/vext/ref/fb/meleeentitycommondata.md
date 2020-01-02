---
title: MeleeEntityCommonData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| MeleeEntityCommonData()                                                          | Create a new instance of this container type.                                                                                     |
| MeleeEntityCommonData(MeleeEntityCommonData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| MeleeEntityCommonData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [MeleeEntityCommonData](MeleeEntityCommonData).                                      |
| MeleeEntityCommonData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeleeEntityCommonData](MeleeEntityCommonData). |

## Properties

| Name                      | Type                                                       | Description |
| ------------------------- | ---------------------------------------------------------- | ----------- |
| meleeBinding              | [CharacterMeleeBinding](CharacterMeleeBinding)             |             |
| meleeCommonBinding        | [CharacterMeleeCommonBinding](CharacterMeleeCommonBinding) |             |
| triggerDelay              | number                                                     |             |
| defendWindow              | number                                                     |             |
| killDelay                 | number                                                     |             |
| meleeEndDelay             | number                                                     |             |
| invalidMeleeAttackZone    | number                                                     |             |
| meleeAttackDistance       | number                                                     |             |
| maxAttackHeightDifference | number                                                     |             |
| killDamage                | number                                                     |             |
| proneAttackType           | [AntEnumeration](AntEnumeration)                           |             |
| crouchAttackType          | [AntEnumeration](AntEnumeration)                           |             |
| enableAbortPossibility    | bool                                                       |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [MeleeEntityCommonData](MeleeEntityCommonData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeleeEntityCommonData](MeleeEntityCommonData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
