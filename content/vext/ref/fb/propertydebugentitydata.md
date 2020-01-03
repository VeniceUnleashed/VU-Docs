---
title: PropertyDebugEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| PropertyDebugEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| PropertyDebugEntityData(PropertyDebugEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| PropertyDebugEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PropertyDebugEntityData](PropertyDebugEntityData).                            |
| PropertyDebugEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PropertyDebugEntityData](PropertyDebugEntityData).                    |
| PropertyDebugEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PropertyDebugEntityData](PropertyDebugEntityData).              |
| PropertyDebugEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PropertyDebugEntityData](PropertyDebugEntityData). |

## Properties

| Name           | Type                                                    | Description |
| -------------- | ------------------------------------------------------- | ----------- |
| vec3Value      | [Vec3](/vext/ref/shared/class/vec3)                       |             |
| textColor      | [Vec3](/vext/ref/shared/class/vec3)                       |             |
| screenPosition | [Vec2](/vext/ref/shared/class/vec2)                       |             |
| transformValue | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| vec2Value      | [Vec2](/vext/ref/shared/class/vec2)                       |             |
| valuePrefix    | string                                                  |             |
| realm          | [Realm](Realm)                                          |             |
| floatValue     | number                                                  |             |
| intValue       | number                                                  |             |
| textScale      | number                                                  |             |
| stringValue    | string                                                  |             |
| defaultVisible | bool                                                    |             |
| boolValue      | bool                                                    |             |
| multiline      | bool                                                    |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PropertyDebugEntityData](PropertyDebugEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PropertyDebugEntityData](PropertyDebugEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
