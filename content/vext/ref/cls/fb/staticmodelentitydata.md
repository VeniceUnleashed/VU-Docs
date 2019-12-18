---
title: StaticModelEntityData (Frostbite Container)
---
### Base Classes

[GamePhysicsEntityData](GamePhysicsEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| StaticModelEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| StaticModelEntityData(StaticModelEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| StaticModelEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [StaticModelEntityData](StaticModelEntityData).      |
| StaticModelEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [StaticModelEntityData](StaticModelEntityData).                    |
| StaticModelEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [StaticModelEntityData](StaticModelEntityData).              |
| StaticModelEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [StaticModelEntityData](StaticModelEntityData).                            |
| StaticModelEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [StaticModelEntityData](StaticModelEntityData).                    |
| StaticModelEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [StaticModelEntityData](StaticModelEntityData).              |
| StaticModelEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StaticModelEntityData](StaticModelEntityData). |

## Properties

| Name                               | Type                                                        | Description |
| ---------------------------------- | ----------------------------------------------------------- | ----------- |
| partLinks                          | [PartLinkData](PartLinkData)\[\]                            |             |
| mesh                               | [MeshAsset](MeshAsset)                                      |             |
| boneCount                          | number                                                      |             |
| basePoseTransforms                 | [LinearTransform](/vext/ref/cls/shr/LinearTransform)\[\] |             |
| networkInfo                        | [StaticModelNetworkInfo](StaticModelNetworkInfo)            |             |
| physicsPartInfos                   | [PhysicsPartInfo](PhysicsPartInfo)\[\]                      |             |
| excludeFromNearbyObjectDestruction | bool                                                        |             |
| animatePhysics                     | bool                                                        |             |
| visible                            | bool                                                        |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [StaticModelEntityData](StaticModelEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StaticModelEntityData](StaticModelEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
