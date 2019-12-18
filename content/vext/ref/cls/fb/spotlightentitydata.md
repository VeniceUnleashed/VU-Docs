---
title: SpotLightEntityData (Frostbite Container)
---
### Base Classes

[LocalLightEntityData](LocalLightEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| SpotLightEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| SpotLightEntityData(SpotLightEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| SpotLightEntityData([LocalLightEntityData](LocalLightEntityData) other)        | Upcast an instance of type [LocalLightEntityData](LocalLightEntityData) to [SpotLightEntityData](SpotLightEntityData).        |
| SpotLightEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [SpotLightEntityData](SpotLightEntityData).              |
| SpotLightEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SpotLightEntityData](SpotLightEntityData).                            |
| SpotLightEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SpotLightEntityData](SpotLightEntityData).                    |
| SpotLightEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SpotLightEntityData](SpotLightEntityData).              |
| SpotLightEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SpotLightEntityData](SpotLightEntityData). |

## Properties

| Name                | Type                             | Description |
| ------------------- | -------------------------------- | ----------- |
| shape               | [SpotLightShape](SpotLightShape) |             |
| coneInnerAngle      | number                           |             |
| coneOuterAngle      | number                           |             |
| frustumFov          | number                           |             |
| frustumAspect       | number                           |             |
| orthoWidth          | number                           |             |
| orthoHeight         | number                           |             |
| texture             | [TextureAsset](TextureAsset)     |             |
| castShadowsMinLevel | [QualityLevel](QualityLevel)     |             |
| castShadowsEnable   | bool                             |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [SpotLightEntityData](SpotLightEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SpotLightEntityData](SpotLightEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
