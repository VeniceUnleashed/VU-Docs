---
title: SwitchPropertyStringEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| SwitchPropertyStringEntityData()                                                          | Create a new instance of this container type.                                                                                                       |
| SwitchPropertyStringEntityData(SwitchPropertyStringEntityData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| SwitchPropertyStringEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SwitchPropertyStringEntityData](SwitchPropertyStringEntityData).                            |
| SwitchPropertyStringEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SwitchPropertyStringEntityData](SwitchPropertyStringEntityData).                    |
| SwitchPropertyStringEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SwitchPropertyStringEntityData](SwitchPropertyStringEntityData).              |
| SwitchPropertyStringEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SwitchPropertyStringEntityData](SwitchPropertyStringEntityData). |

## Properties

| Name             | Type           | Description |
| ---------------- | -------------- | ----------- |
| stringProperties | string\[\]     |             |
| realm            | [Realm](Realm) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SwitchPropertyStringEntityData](SwitchPropertyStringEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SwitchPropertyStringEntityData](SwitchPropertyStringEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
