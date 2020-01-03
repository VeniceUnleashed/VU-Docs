---
title: InspectEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| InspectEntityData()                                                          | Create a new instance of this container type.                                                                             |
| InspectEntityData(InspectEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| InspectEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [InspectEntityData](InspectEntityData).                    |
| InspectEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [InspectEntityData](InspectEntityData).              |
| InspectEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [InspectEntityData](InspectEntityData).                            |
| InspectEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [InspectEntityData](InspectEntityData).                    |
| InspectEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [InspectEntityData](InspectEntityData).              |
| InspectEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InspectEntityData](InspectEntityData). |

## Properties

| Name                   | Type                                             | Description |
| ---------------------- | ------------------------------------------------ | ----------- |
| centerOffset           | [Vec3](/vext/ref/shared/class/Vec3)                |             |
| uiName                 | string                                           |             |
| maxLookAtHeight        | number                                           |             |
| viewPoints             | [InspectViewPointData](InspectViewPointData)\[\] |             |
| cameras                | [TargetCameraData](TargetCameraData)\[\]         |             |
| minLookAtHeight        | number                                           |             |
| minDistance            | number                                           |             |
| zoomScrollSpeed        | number                                           |             |
| maxDistance            | number                                           |             |
| animationSignal        | [AntRef](AntRef)                                 |             |
| zoomScrollAcceleration | number                                           |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [InspectEntityData](InspectEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InspectEntityData](InspectEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
