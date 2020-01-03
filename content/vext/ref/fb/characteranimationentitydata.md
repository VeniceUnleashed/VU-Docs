---
title: CharacterAnimationEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterAnimationEntityData()                                                          | Create a new instance of this container type.                                                                                                   |
| CharacterAnimationEntityData(CharacterAnimationEntityData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| CharacterAnimationEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata/).                            |
| CharacterAnimationEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata/).                    |
| CharacterAnimationEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata/).              |
| CharacterAnimationEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata/). |

## Properties

| Name                      | Type                                                    | Description |
| ------------------------- | ------------------------------------------------------- | ----------- |
| entitySpaceTransform      | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| controller                | [AntRef](/vext/ref/fb/antref/)                                        |             |
| trackLength               | number                                                  |             |
| externalTime              | number                                                  |             |
| warpAnimationBlendTime    | number                                                  |             |
| restoreControllerOnFinish | bool                                                    |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
