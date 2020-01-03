---
title: CharacterAnimationEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterAnimationEntityData()                                                          | Create a new instance of this container type.                                                                                                   |
| CharacterAnimationEntityData(CharacterAnimationEntityData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| CharacterAnimationEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CharacterAnimationEntityData](CharacterAnimationEntityData).                            |
| CharacterAnimationEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CharacterAnimationEntityData](CharacterAnimationEntityData).                    |
| CharacterAnimationEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CharacterAnimationEntityData](CharacterAnimationEntityData).              |
| CharacterAnimationEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterAnimationEntityData](CharacterAnimationEntityData). |

## Properties

| Name                      | Type                                                    | Description |
| ------------------------- | ------------------------------------------------------- | ----------- |
| entitySpaceTransform      | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| controller                | [AntRef](AntRef)                                        |             |
| trackLength               | number                                                  |             |
| externalTime              | number                                                  |             |
| warpAnimationBlendTime    | number                                                  |             |
| restoreControllerOnFinish | bool                                                    |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CharacterAnimationEntityData](CharacterAnimationEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterAnimationEntityData](CharacterAnimationEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
