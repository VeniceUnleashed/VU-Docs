---
title: MeshComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| MeshComponentData()                                                          | Create a new instance of this container type.                                                                             |
| MeshComponentData(MeshComponentData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| MeshComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [MeshComponentData](/vext/ref/fb/meshcomponentdata/).                      |
| MeshComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MeshComponentData](/vext/ref/fb/meshcomponentdata/).                    |
| MeshComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MeshComponentData](/vext/ref/fb/meshcomponentdata/).              |
| MeshComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshComponentData](/vext/ref/fb/meshcomponentdata/). |

## Properties

| Name            | Type                                           | Description |
| --------------- | ---------------------------------------------- | ----------- |
| boneFakePhysics | [BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata/)\[\] |             |
| mesh            | [MeshAsset](/vext/ref/fb/meshasset/)                         |             |
| skeleton        | [SkeletonAsset](/vext/ref/fb/skeletonasset/)                 |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [MeshComponentData](/vext/ref/fb/meshcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeshComponentData](/vext/ref/fb/meshcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
