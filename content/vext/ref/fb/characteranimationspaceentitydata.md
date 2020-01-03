---
title: CharacterAnimationSpaceEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterAnimationSpaceEntityData()                                                          | Create a new instance of this container type.                                                                                                             |
| CharacterAnimationSpaceEntityData(CharacterAnimationSpaceEntityData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| CharacterAnimationSpaceEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CharacterAnimationSpaceEntityData](/vext/ref/fb/characteranimationspaceentitydata/).                            |
| CharacterAnimationSpaceEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CharacterAnimationSpaceEntityData](/vext/ref/fb/characteranimationspaceentitydata/).                    |
| CharacterAnimationSpaceEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CharacterAnimationSpaceEntityData](/vext/ref/fb/characteranimationspaceentitydata/).              |
| CharacterAnimationSpaceEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterAnimationSpaceEntityData](/vext/ref/fb/characteranimationspaceentitydata/). |

## Properties

| Name                   | Type             | Description |
| ---------------------- | ---------------- | ----------- |
| realm                  | [Realm](/vext/ref/fb/realm/)   |             |
| spacePositionGS        | [AntRef](/vext/ref/fb/antref/) |             |
| spaceRotationGS        | [AntRef](/vext/ref/fb/antref/) |             |
| warpAnimationBlendTime | number           |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterAnimationSpaceEntityData](/vext/ref/fb/characteranimationspaceentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterAnimationSpaceEntityData](/vext/ref/fb/characteranimationspaceentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
