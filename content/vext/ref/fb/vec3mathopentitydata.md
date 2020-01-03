---
title: Vec3MathOpEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Vec3MathOpEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| Vec3MathOpEntityData(Vec3MathOpEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| Vec3MathOpEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [Vec3MathOpEntityData](/vext/ref/fb/vec3mathopentitydata/).                            |
| Vec3MathOpEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [Vec3MathOpEntityData](/vext/ref/fb/vec3mathopentitydata/).                    |
| Vec3MathOpEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [Vec3MathOpEntityData](/vext/ref/fb/vec3mathopentitydata/).              |
| Vec3MathOpEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Vec3MathOpEntityData](/vext/ref/fb/vec3mathopentitydata/). |

## Properties

| Name      | Type                         | Description |
| --------- | ---------------------------- | ----------- |
| realm     | [Realm](/vext/ref/fb/realm/)               |             |
| operators | [Vec3MathOp](/vext/ref/fb/vec3mathop/)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [Vec3MathOpEntityData](/vext/ref/fb/vec3mathopentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [Vec3MathOpEntityData](/vext/ref/fb/vec3mathopentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
