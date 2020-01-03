---
title: SettingEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SettingEntityData()                                                          | Create a new instance of this container type.                                                                             |
| SettingEntityData(SettingEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| SettingEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SettingEntityData](/vext/ref/fb/settingentitydata/).                            |
| SettingEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SettingEntityData](/vext/ref/fb/settingentitydata/).                    |
| SettingEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SettingEntityData](/vext/ref/fb/settingentitydata/).              |
| SettingEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SettingEntityData](/vext/ref/fb/settingentitydata/). |

## Properties

| Name             | Type           | Description |
| ---------------- | -------------- | ----------- |
| realm            | [Realm](/vext/ref/fb/realm/) |             |
| boolSettingName  | string         |             |
| intSettingName   | string         |             |
| floatSettingName | string         |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [SettingEntityData](/vext/ref/fb/settingentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SettingEntityData](/vext/ref/fb/settingentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
