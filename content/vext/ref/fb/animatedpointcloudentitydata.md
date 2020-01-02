---
title: AnimatedPointCloudEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| AnimatedPointCloudEntityData()                                                          | Create a new instance of this container type.                                                                                                   |
| AnimatedPointCloudEntityData(AnimatedPointCloudEntityData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| AnimatedPointCloudEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AnimatedPointCloudEntityData](AnimatedPointCloudEntityData).                            |
| AnimatedPointCloudEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AnimatedPointCloudEntityData](AnimatedPointCloudEntityData).                    |
| AnimatedPointCloudEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AnimatedPointCloudEntityData](AnimatedPointCloudEntityData).              |
| AnimatedPointCloudEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedPointCloudEntityData](AnimatedPointCloudEntityData). |

## Properties

| Name         | Type                                               | Description |
| ------------ | -------------------------------------------------- | ----------- |
| realm        | [Realm](Realm)                                     |             |
| pointCloud   | [AnimatedPointCloudAsset](AnimatedPointCloudAsset) |             |
| externalTime | number                                             |             |
| startPaused  | bool                                               |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AnimatedPointCloudEntityData](AnimatedPointCloudEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimatedPointCloudEntityData](AnimatedPointCloudEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
