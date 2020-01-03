---
title: StaticModelEntityData
---
### Base Classes

[GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| StaticModelEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| StaticModelEntityData(StaticModelEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| StaticModelEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/).      |
| StaticModelEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/).                    |
| StaticModelEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/).              |
| StaticModelEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/).                            |
| StaticModelEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/).                    |
| StaticModelEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/).              |
| StaticModelEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/). |

## Properties

| Name                               | Type                                                        | Description |
| ---------------------------------- | ----------------------------------------------------------- | ----------- |
| partLinks                          | [PartLinkData](/vext/ref/fb/partlinkdata/)\[\]                            |             |
| mesh                               | [MeshAsset](/vext/ref/fb/meshasset/)                                      |             |
| boneCount                          | number                                                      |             |
| basePoseTransforms                 | [LinearTransform](/vext/ref/shared/class/lineartransform)\[\] |             |
| networkInfo                        | [StaticModelNetworkInfo](/vext/ref/fb/staticmodelnetworkinfo/)            |             |
| physicsPartInfos                   | [PhysicsPartInfo](/vext/ref/fb/physicspartinfo/)\[\]                      |             |
| excludeFromNearbyObjectDestruction | bool                                                        |             |
| animatePhysics                     | bool                                                        |             |
| visible                            | bool                                                        |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
