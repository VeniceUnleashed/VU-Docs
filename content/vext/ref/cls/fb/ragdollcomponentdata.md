---
title: RagdollComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| RagdollComponentData()                                                          | Create a new instance of this container type.                                                                                   |
| RagdollComponentData(RagdollComponentData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| RagdollComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [RagdollComponentData](RagdollComponentData).                      |
| RagdollComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RagdollComponentData](RagdollComponentData).                    |
| RagdollComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RagdollComponentData](RagdollComponentData).              |
| RagdollComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RagdollComponentData](RagdollComponentData). |

## Properties

| Name                  | Type                                           | Description |
| --------------------- | ---------------------------------------------- | ----------- |
| skeletonAsset         | [SkeletonAsset](SkeletonAsset)                 |             |
| ragdollAsset          | [RagdollAsset](RagdollAsset)                   |             |
| skeletonCollisionData | [SkeletonCollisionData](SkeletonCollisionData) |             |
| binding               | [RagdollBinding](RagdollBinding)               |             |
| leftLegBoneName       | string                                         |             |
| rightLegBoneName      | string                                         |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [RagdollComponentData](RagdollComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RagdollComponentData](RagdollComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
