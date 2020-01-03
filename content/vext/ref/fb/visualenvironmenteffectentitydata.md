---
title: VisualEnvironmentEffectEntityData
---
### Base Classes

[EffectEntityData](EffectEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VisualEnvironmentEffectEntityData()                                                          | Create a new instance of this container type.                                                                                                             |
| VisualEnvironmentEffectEntityData(VisualEnvironmentEffectEntityData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| VisualEnvironmentEffectEntityData([EffectEntityData](EffectEntityData) other)                | Upcast an instance of type [EffectEntityData](EffectEntityData) to [VisualEnvironmentEffectEntityData](VisualEnvironmentEffectEntityData).                |
| VisualEnvironmentEffectEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [VisualEnvironmentEffectEntityData](VisualEnvironmentEffectEntityData).              |
| VisualEnvironmentEffectEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [VisualEnvironmentEffectEntityData](VisualEnvironmentEffectEntityData).                            |
| VisualEnvironmentEffectEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VisualEnvironmentEffectEntityData](VisualEnvironmentEffectEntityData).                    |
| VisualEnvironmentEffectEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VisualEnvironmentEffectEntityData](VisualEnvironmentEffectEntityData).              |
| VisualEnvironmentEffectEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VisualEnvironmentEffectEntityData](VisualEnvironmentEffectEntityData). |

## Properties

| Name              | Type                                                     | Description |
| ----------------- | -------------------------------------------------------- | ----------- |
| lifetimeCurve     | [Vec4](/vext/ref/shared/class/vec4)                        |             |
| cullDistanceCurve | [Vec4](/vext/ref/shared/class/vec4)                        |             |
| cullAngleCurve    | [Vec4](/vext/ref/shared/class/vec4)                        |             |
| lifetime          | number                                                   |             |
| visualEnvironment | [VisualEnvironmentBlueprint](VisualEnvironmentBlueprint) |             |
| sampleOnStartOnly | bool                                                     |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VisualEnvironmentEffectEntityData](VisualEnvironmentEffectEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VisualEnvironmentEffectEntityData](VisualEnvironmentEffectEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
