---
title: LoggingEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| LoggingEntityData()                                                          | Create a new instance of this container type.                                                                             |
| LoggingEntityData(LoggingEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| LoggingEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [LoggingEntityData](/vext/ref/fb/loggingentitydata/).                            |
| LoggingEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [LoggingEntityData](/vext/ref/fb/loggingentitydata/).                    |
| LoggingEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [LoggingEntityData](/vext/ref/fb/loggingentitydata/).              |
| LoggingEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LoggingEntityData](/vext/ref/fb/loggingentitydata/). |

## Properties

| Name           | Type                                                    | Description |
| -------------- | ------------------------------------------------------- | ----------- |
| vec2Value      | [Vec2](/vext/ref/shared/class/vec2)                       |             |
| vec3Value      | [Vec3](/vext/ref/shared/class/vec3)                       |             |
| transformValue | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| realm          | [Realm](/vext/ref/fb/realm/)                                          |             |
| floatValue     | number                                                  |             |
| strings        | string\[\]                                              |             |
| intValue       | number                                                  |             |
| boolValue      | bool                                                    |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [LoggingEntityData](/vext/ref/fb/loggingentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LoggingEntityData](/vext/ref/fb/loggingentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
