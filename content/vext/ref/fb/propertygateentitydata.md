---
title: PropertyGateEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PropertyGateEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| PropertyGateEntityData(PropertyGateEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PropertyGateEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PropertyGateEntityData](PropertyGateEntityData).                            |
| PropertyGateEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PropertyGateEntityData](PropertyGateEntityData).                    |
| PropertyGateEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PropertyGateEntityData](PropertyGateEntityData).              |
| PropertyGateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PropertyGateEntityData](PropertyGateEntityData). |

## Properties

| Name        | Type                                                    | Description |
| ----------- | ------------------------------------------------------- | ----------- |
| transformIn | [LinearTransform](/vext/ref/shared/class/LinearTransform) |             |
| vec4In      | [Vec4](/vext/ref/shared/class/Vec4)                       |             |
| vec3In      | [Vec3](/vext/ref/shared/class/Vec3)                       |             |
| realm       | [Realm](Realm)                                          |             |
| floatIn     | number                                                  |             |
| intIn       | number                                                  |             |
| boolIn      | bool                                                    |             |
| default     | bool                                                    |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PropertyGateEntityData](PropertyGateEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PropertyGateEntityData](PropertyGateEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
