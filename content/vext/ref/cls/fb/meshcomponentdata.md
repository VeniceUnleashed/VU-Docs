---
title: MeshComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| MeshComponentData()                                                          | Create a new instance of this container type.                                                                             |
| MeshComponentData(MeshComponentData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| MeshComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [MeshComponentData](MeshComponentData).                      |
| MeshComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [MeshComponentData](MeshComponentData).                    |
| MeshComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MeshComponentData](MeshComponentData).              |
| MeshComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MeshComponentData](MeshComponentData). |

## Properties

| Name            | Type                                           | Description |
| --------------- | ---------------------------------------------- | ----------- |
| boneFakePhysics | [BoneFakePhysicsData](BoneFakePhysicsData)\[\] |             |
| mesh            | [MeshAsset](MeshAsset)                         |             |
| skeleton        | [SkeletonAsset](SkeletonAsset)                 |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [MeshComponentData](MeshComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MeshComponentData](MeshComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
