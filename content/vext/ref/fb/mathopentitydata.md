---
title: MathOpEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| MathOpEntityData()                                                          | Create a new instance of this container type.                                                                           |
| MathOpEntityData(MathOpEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| MathOpEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [MathOpEntityData](/vext/ref/fb/mathopentitydata/).                            |
| MathOpEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MathOpEntityData](/vext/ref/fb/mathopentitydata/).                    |
| MathOpEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MathOpEntityData](/vext/ref/fb/mathopentitydata/).              |
| MathOpEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MathOpEntityData](/vext/ref/fb/mathopentitydata/). |

## Properties

| Name      | Type                 | Description |
| --------- | -------------------- | ----------- |
| realm     | [Realm](/vext/ref/fb/realm/)       |             |
| operators | [MathOp](/vext/ref/fb/mathop/)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [MathOpEntityData](/vext/ref/fb/mathopentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MathOpEntityData](/vext/ref/fb/mathopentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
