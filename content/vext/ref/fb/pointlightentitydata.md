---
title: PointLightEntityData
---
### Base Classes

[LocalLightEntityData](LocalLightEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| PointLightEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| PointLightEntityData(PointLightEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| PointLightEntityData([LocalLightEntityData](LocalLightEntityData) other)        | Upcast an instance of type [LocalLightEntityData](LocalLightEntityData) to [PointLightEntityData](PointLightEntityData).        |
| PointLightEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [PointLightEntityData](PointLightEntityData).              |
| PointLightEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PointLightEntityData](PointLightEntityData).                            |
| PointLightEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PointLightEntityData](PointLightEntityData).                    |
| PointLightEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PointLightEntityData](PointLightEntityData).              |
| PointLightEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PointLightEntityData](PointLightEntityData). |

## Properties

| Name                   | Type   | Description |
| ---------------------- | ------ | ----------- |
| width                  | number |             |
| translucencyAmbient    | number |             |
| translucencyScale      | number |             |
| translucencyPower      | number |             |
| translucencyDistortion | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [PointLightEntityData](PointLightEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PointLightEntityData](PointLightEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
