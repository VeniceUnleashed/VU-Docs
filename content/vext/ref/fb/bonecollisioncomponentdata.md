---
title: BoneCollisionComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| BoneCollisionComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| BoneCollisionComponentData(BoneCollisionComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| BoneCollisionComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata/).                      |
| BoneCollisionComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata/).                    |
| BoneCollisionComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata/).              |
| BoneCollisionComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata/). |

## Properties

| Name                  | Type                                           | Description |
| --------------------- | ---------------------------------------------- | ----------- |
| skeletonCollisionData | [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata/) |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
