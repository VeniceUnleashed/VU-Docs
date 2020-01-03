---
title: CompareFloatEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| CompareFloatEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| CompareFloatEntityData(CompareFloatEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| CompareFloatEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CompareFloatEntityData](/vext/ref/fb/comparefloatentitydata/).                            |
| CompareFloatEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CompareFloatEntityData](/vext/ref/fb/comparefloatentitydata/).                    |
| CompareFloatEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CompareFloatEntityData](/vext/ref/fb/comparefloatentitydata/).              |
| CompareFloatEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CompareFloatEntityData](/vext/ref/fb/comparefloatentitydata/). |

## Properties

| Name                    | Type           | Description |
| ----------------------- | -------------- | ----------- |
| realm                   | [Realm](/vext/ref/fb/realm/) |             |
| a                       | number         |             |
| b                       | number         |             |
| triggerOnPropertyChange | bool           |             |
| triggerOnStart          | bool           |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CompareFloatEntityData](/vext/ref/fb/comparefloatentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CompareFloatEntityData](/vext/ref/fb/comparefloatentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
