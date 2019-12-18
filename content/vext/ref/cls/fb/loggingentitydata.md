---
title: LoggingEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| LoggingEntityData()                                                          | Create a new instance of this container type.                                                                             |
| LoggingEntityData(LoggingEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| LoggingEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [LoggingEntityData](LoggingEntityData).                            |
| LoggingEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [LoggingEntityData](LoggingEntityData).                    |
| LoggingEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [LoggingEntityData](LoggingEntityData).              |
| LoggingEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LoggingEntityData](LoggingEntityData). |

## Properties

| Name           | Type                                                    | Description |
| -------------- | ------------------------------------------------------- | ----------- |
| vec2Value      | [Vec2](/vext/ref/cls/shr/Vec2)                       |             |
| vec3Value      | [Vec3](/vext/ref/cls/shr/Vec3)                       |             |
| transformValue | [LinearTransform](/vext/ref/cls/shr/LinearTransform) |             |
| realm          | [Realm](Realm)                                          |             |
| floatValue     | number                                                  |             |
| strings        | string\[\]                                              |             |
| intValue       | number                                                  |             |
| boolValue      | bool                                                    |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [LoggingEntityData](LoggingEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LoggingEntityData](LoggingEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
