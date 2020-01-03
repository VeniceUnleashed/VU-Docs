---
title: CompareBoolEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| CompareBoolEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| CompareBoolEntityData(CompareBoolEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| CompareBoolEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CompareBoolEntityData](/vext/ref/fb/compareboolentitydata/).                            |
| CompareBoolEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CompareBoolEntityData](/vext/ref/fb/compareboolentitydata/).                    |
| CompareBoolEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CompareBoolEntityData](/vext/ref/fb/compareboolentitydata/).              |
| CompareBoolEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CompareBoolEntityData](/vext/ref/fb/compareboolentitydata/). |

## Properties

| Name                    | Type           | Description |
| ----------------------- | -------------- | ----------- |
| realm                   | [Realm](/vext/ref/fb/realm/) |             |
| bool                    | bool           |             |
| triggerOnPropertyChange | bool           |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [CompareBoolEntityData](/vext/ref/fb/compareboolentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CompareBoolEntityData](/vext/ref/fb/compareboolentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
