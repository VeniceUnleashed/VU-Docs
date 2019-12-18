---
title: LocalLightEntityData (Frostbite Container)
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LocalLightEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| LocalLightEntityData(LocalLightEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LocalLightEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [LocalLightEntityData](LocalLightEntityData).              |
| LocalLightEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [LocalLightEntityData](LocalLightEntityData).                            |
| LocalLightEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [LocalLightEntityData](LocalLightEntityData).                    |
| LocalLightEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [LocalLightEntityData](LocalLightEntityData).              |
| LocalLightEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LocalLightEntityData](LocalLightEntityData). |

## Properties

| Name                | Type                                     | Description |
| ------------------- | ---------------------------------------- | ----------- |
| color               | [Vec3](/vext/ref/cls/shr/Vec3)        |             |
| particleColorScale  | [Vec3](/vext/ref/cls/shr/Vec3)        |             |
| enlightenColorScale | [Vec3](/vext/ref/cls/shr/Vec3)        |             |
| radius              | number                                   |             |
| intensity           | number                                   |             |
| attenuationOffset   | number                                   |             |
| enlightenColorMode  | [EnlightenColorMode](EnlightenColorMode) |             |
| enlightenEnable     | bool                                     |             |
| visible             | bool                                     |             |
| specularEnable      | bool                                     |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LocalLightEntityData](LocalLightEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LocalLightEntityData](LocalLightEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
