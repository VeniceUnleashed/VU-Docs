---
title: StaticModelGroupEntityData
---
### Base Classes

[GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| StaticModelGroupEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| StaticModelGroupEntityData(StaticModelGroupEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| StaticModelGroupEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata/).      |
| StaticModelGroupEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata/).                    |
| StaticModelGroupEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata/).              |
| StaticModelGroupEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata/).                            |
| StaticModelGroupEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata/).                    |
| StaticModelGroupEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata/).              |
| StaticModelGroupEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata/). |

## Properties

| Name                             | Type                                                         | Description |
| -------------------------------- | ------------------------------------------------------------ | ----------- |
| memberDatas                      | [StaticModelGroupMemberData](/vext/ref/fb/staticmodelgroupmemberdata/)\[\] |             |
| hackToSolveRealTimeTweakingIssue | [Guid](/vext/ref/shared/class/guid)                            |             |
| networkIdCount                   | number                                                       |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StaticModelGroupEntityData](/vext/ref/fb/staticmodelgroupentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
