---
title: PropertyDebugEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| PropertyDebugEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| PropertyDebugEntityData(PropertyDebugEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| PropertyDebugEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata/).                            |
| PropertyDebugEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata/).                    |
| PropertyDebugEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata/).              |
| PropertyDebugEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata/). |

## Properties

| Name           | Type                                                    | Description |
| -------------- | ------------------------------------------------------- | ----------- |
| vec3Value      | [Vec3](/vext/ref/shared/class/vec3)                       |             |
| textColor      | [Vec3](/vext/ref/shared/class/vec3)                       |             |
| screenPosition | [Vec2](/vext/ref/shared/class/vec2)                       |             |
| transformValue | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| vec2Value      | [Vec2](/vext/ref/shared/class/vec2)                       |             |
| valuePrefix    | string                                                  |             |
| realm          | [Realm](/vext/ref/fb/realm/)                                          |             |
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
| [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
