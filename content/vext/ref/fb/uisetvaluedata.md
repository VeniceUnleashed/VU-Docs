---
title: UISetValueData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| UISetValueData()                                                          | Create a new instance of this container type.                                                                       |
| UISetValueData(UISetValueData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| UISetValueData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [UISetValueData](UISetValueData).                            |
| UISetValueData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [UISetValueData](UISetValueData).                    |
| UISetValueData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [UISetValueData](UISetValueData).              |
| UISetValueData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UISetValueData](UISetValueData). |

## Properties

| Name        | Type                                 | Description |
| ----------- | ------------------------------------ | ----------- |
| dataSource  | [UIDataSourceInfo](UIDataSourceInfo) |             |
| intValue    | number                               |             |
| floatValue  | number                               |             |
| stringValue | string                               |             |
| boolValue   | bool                                 |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [UISetValueData](UISetValueData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UISetValueData](UISetValueData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
