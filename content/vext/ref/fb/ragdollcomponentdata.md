---
title: RagdollComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| RagdollComponentData()                                                          | Create a new instance of this container type.                                                                                   |
| RagdollComponentData(RagdollComponentData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| RagdollComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata/).                      |
| RagdollComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata/).                    |
| RagdollComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata/).              |
| RagdollComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata/). |

## Properties

| Name                  | Type                                           | Description |
| --------------------- | ---------------------------------------------- | ----------- |
| skeletonAsset         | [SkeletonAsset](/vext/ref/fb/skeletonasset/)                 |             |
| ragdollAsset          | [RagdollAsset](/vext/ref/fb/ragdollasset/)                   |             |
| skeletonCollisionData | [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata/) |             |
| binding               | [RagdollBinding](/vext/ref/fb/ragdollbinding/)               |             |
| leftLegBoneName       | string                                         |             |
| rightLegBoneName      | string                                         |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
