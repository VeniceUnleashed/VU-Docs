---
title: WarpAnimationEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| WarpAnimationEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| WarpAnimationEntityData(WarpAnimationEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| WarpAnimationEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata/).                            |
| WarpAnimationEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata/).                    |
| WarpAnimationEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata/).              |
| WarpAnimationEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata/). |

## Properties

| Name                         | Type                                                    | Description |
| ---------------------------- | ------------------------------------------------------- | ----------- |
| connectTransform             | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| animationEntitySpacePriority | number                                                  |             |
| warpBinding                  | [WarpAnimationBinding](/vext/ref/fb/warpanimationbinding/)            |             |
| boneToAlign                  | [GameplayBones](/vext/ref/fb/gameplaybones/)                          |             |
| forceAnimationTransform      | bool                                                    |             |
| requireAnimationWeight       | bool                                                    |             |
| externalConnectTransform     | bool                                                    |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
