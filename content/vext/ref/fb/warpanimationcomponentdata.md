---
title: WarpAnimationComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| WarpAnimationComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| WarpAnimationComponentData(WarpAnimationComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| WarpAnimationComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata/).                      |
| WarpAnimationComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata/).                    |
| WarpAnimationComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata/).              |
| WarpAnimationComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata/). |

## Properties

| Name                         | Type                                                    | Description |
| ---------------------------- | ------------------------------------------------------- | ----------- |
| connectTransform             | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| cannedAnimBinding            | [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding/)        |             |
| animationEntitySpacePriority | number                                                  |             |
| warpBinding                  | [WarpAnimationBinding](/vext/ref/fb/warpanimationbinding/)            |             |
| boneToAlign                  | [GameplayBones](/vext/ref/fb/gameplaybones/)                          |             |
| requireAnimationWeight       | bool                                                    |             |
| forceAnimationTransform      | bool                                                    |             |
| externalConnectTransform     | bool                                                    |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
