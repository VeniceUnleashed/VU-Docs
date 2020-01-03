---
title: InspectEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| InspectEntityData()                                                          | Create a new instance of this container type.                                                                             |
| InspectEntityData(InspectEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| InspectEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [InspectEntityData](/vext/ref/fb/inspectentitydata/).                    |
| InspectEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [InspectEntityData](/vext/ref/fb/inspectentitydata/).              |
| InspectEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [InspectEntityData](/vext/ref/fb/inspectentitydata/).                            |
| InspectEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [InspectEntityData](/vext/ref/fb/inspectentitydata/).                    |
| InspectEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [InspectEntityData](/vext/ref/fb/inspectentitydata/).              |
| InspectEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InspectEntityData](/vext/ref/fb/inspectentitydata/). |

## Properties

| Name                   | Type                                             | Description |
| ---------------------- | ------------------------------------------------ | ----------- |
| centerOffset           | [Vec3](/vext/ref/shared/class/vec3)                |             |
| uiName                 | string                                           |             |
| maxLookAtHeight        | number                                           |             |
| viewPoints             | [InspectViewPointData](/vext/ref/fb/inspectviewpointdata/)\[\] |             |
| cameras                | [TargetCameraData](/vext/ref/fb/targetcameradata/)\[\]         |             |
| minLookAtHeight        | number                                           |             |
| minDistance            | number                                           |             |
| zoomScrollSpeed        | number                                           |             |
| maxDistance            | number                                           |             |
| animationSignal        | [AntRef](/vext/ref/fb/antref/)                                 |             |
| zoomScrollAcceleration | number                                           |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [InspectEntityData](/vext/ref/fb/inspectentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InspectEntityData](/vext/ref/fb/inspectentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
