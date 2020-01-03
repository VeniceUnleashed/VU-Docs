---
title: SettingEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SettingEntityData()                                                          | Create a new instance of this container type.                                                                             |
| SettingEntityData(SettingEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| SettingEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SettingEntityData](SettingEntityData).                            |
| SettingEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SettingEntityData](SettingEntityData).                    |
| SettingEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SettingEntityData](SettingEntityData).              |
| SettingEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SettingEntityData](SettingEntityData). |

## Properties

| Name             | Type           | Description |
| ---------------- | -------------- | ----------- |
| realm            | [Realm](Realm) |             |
| boolSettingName  | string         |             |
| intSettingName   | string         |             |
| floatSettingName | string         |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [SettingEntityData](SettingEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SettingEntityData](SettingEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
