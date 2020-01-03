---
title: MeleeEntityCommonData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| MeleeEntityCommonData()                                                          | Create a new instance of this container type.                                                                                     |
| MeleeEntityCommonData(MeleeEntityCommonData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| MeleeEntityCommonData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [MeleeEntityCommonData](/vext/ref/fb/meleeentitycommondata/).                                      |
| MeleeEntityCommonData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeleeEntityCommonData](/vext/ref/fb/meleeentitycommondata/). |

## Properties

| Name                      | Type                                                       | Description |
| ------------------------- | ---------------------------------------------------------- | ----------- |
| meleeBinding              | [CharacterMeleeBinding](/vext/ref/fb/charactermeleebinding/)             |             |
| meleeCommonBinding        | [CharacterMeleeCommonBinding](/vext/ref/fb/charactermeleecommonbinding/) |             |
| triggerDelay              | number                                                     |             |
| defendWindow              | number                                                     |             |
| killDelay                 | number                                                     |             |
| meleeEndDelay             | number                                                     |             |
| invalidMeleeAttackZone    | number                                                     |             |
| meleeAttackDistance       | number                                                     |             |
| maxAttackHeightDifference | number                                                     |             |
| killDamage                | number                                                     |             |
| proneAttackType           | [AntEnumeration](/vext/ref/fb/antenumeration/)                           |             |
| crouchAttackType          | [AntEnumeration](/vext/ref/fb/antenumeration/)                           |             |
| enableAbortPossibility    | bool                                                       |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [MeleeEntityCommonData](/vext/ref/fb/meleeentitycommondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeleeEntityCommonData](/vext/ref/fb/meleeentitycommondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
