---
title: BoneCollisionComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| BoneCollisionComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| BoneCollisionComponentData(BoneCollisionComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| BoneCollisionComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [BoneCollisionComponentData](BoneCollisionComponentData).                      |
| BoneCollisionComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [BoneCollisionComponentData](BoneCollisionComponentData).                    |
| BoneCollisionComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BoneCollisionComponentData](BoneCollisionComponentData).              |
| BoneCollisionComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BoneCollisionComponentData](BoneCollisionComponentData). |

## Properties

| Name                  | Type                                           | Description |
| --------------------- | ---------------------------------------------- | ----------- |
| skeletonCollisionData | [SkeletonCollisionData](SkeletonCollisionData) |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BoneCollisionComponentData](BoneCollisionComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BoneCollisionComponentData](BoneCollisionComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
