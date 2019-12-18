---
title: WarpAnimationComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| WarpAnimationComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| WarpAnimationComponentData(WarpAnimationComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| WarpAnimationComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [WarpAnimationComponentData](WarpAnimationComponentData).                      |
| WarpAnimationComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WarpAnimationComponentData](WarpAnimationComponentData).                    |
| WarpAnimationComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WarpAnimationComponentData](WarpAnimationComponentData).              |
| WarpAnimationComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WarpAnimationComponentData](WarpAnimationComponentData). |

## Properties

| Name                         | Type                                                    | Description |
| ---------------------------- | ------------------------------------------------------- | ----------- |
| connectTransform             | [LinearTransform](/vext/ref/cls/shr/LinearTransform) |             |
| cannedAnimBinding            | [CannedAnimationBinding](CannedAnimationBinding)        |             |
| animationEntitySpacePriority | number                                                  |             |
| warpBinding                  | [WarpAnimationBinding](WarpAnimationBinding)            |             |
| boneToAlign                  | [GameplayBones](GameplayBones)                          |             |
| requireAnimationWeight       | bool                                                    |             |
| forceAnimationTransform      | bool                                                    |             |
| externalConnectTransform     | bool                                                    |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WarpAnimationComponentData](WarpAnimationComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WarpAnimationComponentData](WarpAnimationComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
