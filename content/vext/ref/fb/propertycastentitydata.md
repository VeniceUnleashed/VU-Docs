---
title: PropertyCastEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PropertyCastEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| PropertyCastEntityData(PropertyCastEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PropertyCastEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PropertyCastEntityData](/vext/ref/fb/propertycastentitydata/).                            |
| PropertyCastEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PropertyCastEntityData](/vext/ref/fb/propertycastentitydata/).                    |
| PropertyCastEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PropertyCastEntityData](/vext/ref/fb/propertycastentitydata/).              |
| PropertyCastEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PropertyCastEntityData](/vext/ref/fb/propertycastentitydata/). |

## Properties

| Name       | Type           | Description |
| ---------- | -------------- | ----------- |
| realm      | [Realm](/vext/ref/fb/realm/) |             |
| intValue   | number         |             |
| floatValue | number         |             |
| boolValue  | bool           |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PropertyCastEntityData](/vext/ref/fb/propertycastentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PropertyCastEntityData](/vext/ref/fb/propertycastentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
