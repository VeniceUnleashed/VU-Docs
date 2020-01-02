---
title: WarpAnimationEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| WarpAnimationEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| WarpAnimationEntityData(WarpAnimationEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| WarpAnimationEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [WarpAnimationEntityData](WarpAnimationEntityData).                            |
| WarpAnimationEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WarpAnimationEntityData](WarpAnimationEntityData).                    |
| WarpAnimationEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WarpAnimationEntityData](WarpAnimationEntityData).              |
| WarpAnimationEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WarpAnimationEntityData](WarpAnimationEntityData). |

## Properties

| Name                         | Type                                                    | Description |
| ---------------------------- | ------------------------------------------------------- | ----------- |
| connectTransform             | [LinearTransform](/vext/ref/shared/class/LinearTransform) |             |
| animationEntitySpacePriority | number                                                  |             |
| warpBinding                  | [WarpAnimationBinding](WarpAnimationBinding)            |             |
| boneToAlign                  | [GameplayBones](GameplayBones)                          |             |
| forceAnimationTransform      | bool                                                    |             |
| requireAnimationWeight       | bool                                                    |             |
| externalConnectTransform     | bool                                                    |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WarpAnimationEntityData](WarpAnimationEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WarpAnimationEntityData](WarpAnimationEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
