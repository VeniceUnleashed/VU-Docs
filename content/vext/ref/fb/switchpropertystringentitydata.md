---
title: SwitchPropertyStringEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| SwitchPropertyStringEntityData()                                                          | Create a new instance of this container type.                                                                                                       |
| SwitchPropertyStringEntityData(SwitchPropertyStringEntityData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| SwitchPropertyStringEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SwitchPropertyStringEntityData](/vext/ref/fb/switchpropertystringentitydata/).                            |
| SwitchPropertyStringEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SwitchPropertyStringEntityData](/vext/ref/fb/switchpropertystringentitydata/).                    |
| SwitchPropertyStringEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SwitchPropertyStringEntityData](/vext/ref/fb/switchpropertystringentitydata/).              |
| SwitchPropertyStringEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SwitchPropertyStringEntityData](/vext/ref/fb/switchpropertystringentitydata/). |

## Properties

| Name             | Type           | Description |
| ---------------- | -------------- | ----------- |
| stringProperties | string\[\]     |             |
| realm            | [Realm](/vext/ref/fb/realm/) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SwitchPropertyStringEntityData](/vext/ref/fb/switchpropertystringentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SwitchPropertyStringEntityData](/vext/ref/fb/switchpropertystringentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
