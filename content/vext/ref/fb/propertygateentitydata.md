---
title: PropertyGateEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PropertyGateEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| PropertyGateEntityData(PropertyGateEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PropertyGateEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata/).                            |
| PropertyGateEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata/).                    |
| PropertyGateEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata/).              |
| PropertyGateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata/). |

## Properties

| Name        | Type                                                    | Description |
| ----------- | ------------------------------------------------------- | ----------- |
| transformIn | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| vec4In      | [Vec4](/vext/ref/shared/class/vec4)                       |             |
| vec3In      | [Vec3](/vext/ref/shared/class/vec3)                       |             |
| realm       | [Realm](/vext/ref/fb/realm/)                                          |             |
| floatIn     | number                                                  |             |
| intIn       | number                                                  |             |
| boolIn      | bool                                                    |             |
| default     | bool                                                    |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
