---
title: DifficultyData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| DifficultyData()                                                          | Create a new instance of this container type.                                                                       |
| DifficultyData(DifficultyData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| DifficultyData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DifficultyData](DifficultyData). |

## Properties

| Name                                | Type                                         | Description |
| ----------------------------------- | -------------------------------------------- | ----------- |
| stickyBoxModifier                   | [Vec3](/vext/ref/cls/shr/Vec3)            |             |
| snapBoxModifier                     | [Vec3](/vext/ref/cls/shr/Vec3)            |             |
| humanHealthModifier                 | number                                       |             |
| gameType                            | [PersistenceGameType](PersistenceGameType)   |             |
| friendsHealthModifier               | number                                       |             |
| friendlyDamageModifier              | number                                       |             |
| vehicleDamageModifier               | number                                       |             |
| humanInCriticalHealth               | number                                       |             |
| enemiesHealthModifier               | number                                       |             |
| humanRegenerationRateModifier       | number                                       |             |
| humanInCriticalHealthDamageModifier | number                                       |             |
| interactiveManDownDamageModifier    | number                                       |             |
| interactiveManDownTimeMultiplier    | number                                       |             |
| interactiveManDownReviveTime        | number                                       |             |
| adrenalineKillLimit                 | number                                       |             |
| criticalHealthJesusModeTimeModifier | number                                       |             |
| difficulty                          | [Difficulty](Difficulty)                     |             |
| criticalFakeImmortalModifier        | number                                       |             |
| suckZoomModifier                    | number                                       |             |
| aiData                              | [GameAIDifficultyData](GameAIDifficultyData) |             |
| aiBulletDamageHumanCooldown         | number                                       |             |
| usePitchZoomSnap                    | bool                                         |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [DifficultyData](DifficultyData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DifficultyData](DifficultyData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
