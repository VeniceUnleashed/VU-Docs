---
title: FriendlyFireEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| FriendlyFireEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| FriendlyFireEntityData(FriendlyFireEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| FriendlyFireEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata/).                            |
| FriendlyFireEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata/).                    |
| FriendlyFireEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata/).              |
| FriendlyFireEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata/). |

## Properties

| Name                         | Type                 | Description |
| ---------------------------- | -------------------- | ----------- |
| teams                        | [TeamId](/vext/ref/fb/teamid/)\[\] |             |
| enemyCommitmentAllocation    | number               |             |
| friendlyCommitmentAllocation | number               |             |
| maxCommitment                | number               |             |
| failureThreshold             | number               |             |
| decayRate                    | number               |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FriendlyFireEntityData](/vext/ref/fb/friendlyfireentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
