---
title: CharacterAnimationSpaceEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterAnimationSpaceEntityData()                                                          | Create a new instance of this container type.                                                                                                             |
| CharacterAnimationSpaceEntityData(CharacterAnimationSpaceEntityData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| CharacterAnimationSpaceEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CharacterAnimationSpaceEntityData](CharacterAnimationSpaceEntityData).                            |
| CharacterAnimationSpaceEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CharacterAnimationSpaceEntityData](CharacterAnimationSpaceEntityData).                    |
| CharacterAnimationSpaceEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CharacterAnimationSpaceEntityData](CharacterAnimationSpaceEntityData).              |
| CharacterAnimationSpaceEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CharacterAnimationSpaceEntityData](CharacterAnimationSpaceEntityData). |

## Properties

| Name                   | Type             | Description |
| ---------------------- | ---------------- | ----------- |
| realm                  | [Realm](Realm)   |             |
| spacePositionGS        | [AntRef](AntRef) |             |
| spaceRotationGS        | [AntRef](AntRef) |             |
| warpAnimationBlendTime | number           |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterAnimationSpaceEntityData](CharacterAnimationSpaceEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CharacterAnimationSpaceEntityData](CharacterAnimationSpaceEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
